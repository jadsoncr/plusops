import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();

  const {
    nome,
    empresa,
    email,
    telefone,
    faturamento,
    colaboradores,
    desafio,
    mensagem,
    honeypot,
  } = req.body;

  // Honeypot
  if (honeypot) return res.status(400).json({ error: 'Spam detectado.' });

  // Validação
  if (!nome || !empresa || !email || !telefone || !faturamento || !colaboradores || !desafio) {
    return res.status(400).json({ error: 'Campos obrigatórios faltando.' });
  }

  // Limite de requisições por IP
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  const now = new Date();
  const recent = await prisma.lead.findMany({
    where: {
      createdAt: {
        gte: new Date(now.getTime() - 1000 * 60 * 5), // últimos 5 minutos
      },
      ip: String(ip),
    },
  });
  if (recent.length > 3) return res.status(429).json({ error: 'Limite de requisições atingido.' });

  // Salvar lead
  const lead = await prisma.lead.create({
    data: {
      nome,
      empresa,
      email,
      telefone,
      faturamento,
      colaboradores,
      desafio,
      mensagem,
      ip: String(ip),
    },
  });

  // Enviar email
  const transporter = nodemailer.createTransport({
    host: 'smtp.yourprovider.com',
    port: 587,
    auth: {
      user: 'your@email.com',
      pass: 'yourpassword',
    },
  });

  await transporter.sendMail({
    from: 'your@email.com',
    to: 'contato@plusopsconsult.com',
    subject: 'Novo lead - Pré-análise operacional',
    text: `Nome: ${nome}\nEmpresa: ${empresa}\nEmail: ${email}\nTelefone: ${telefone}\nFaturamento: ${faturamento}\nColaboradores: ${colaboradores}\nDesafio: ${desafio}\nMensagem: ${mensagem}`,
  });

  return res.status(200).json({ ok: true });
}
