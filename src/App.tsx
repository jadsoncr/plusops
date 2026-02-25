import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  MessageCircle, 
  TrendingDown, 
  AlertTriangle, 
  ShieldAlert, 
  Search, 
  Layers, 
  BarChart3, 
  ClipboardCheck, 
  Bot, 
  GraduationCap,
  Linkedin,
  Mail,
  Phone,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Você se identifica?', href: '#recognition' },
    { name: 'Como funciona', href: '#how' },
    { name: 'Soluções', href: '#products' },
    { name: 'Resultados', href: '#results' },
    { name: 'Quem sou', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4 md:py-6 flex items-center justify-between ${isScrolled ? 'bg-navy/95 backdrop-blur-md shadow-xl' : 'bg-transparent'}`}>
      <div className="font-display font-extrabold text-2xl text-white tracking-tighter">
        Plus<span className="text-orange">Ops</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href} className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            {link.name}
          </a>
        ))}
        <a 
          href="https://wa.me/5521988551085?text=Olá! Gostaria de agendar uma Conversa Estratégica para uma Análise de Gargalos na minha operação." 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange text-white px-6 py-2.5 rounded-sm text-sm font-bold hover:bg-orange-light transition-all active:scale-95"
        >
          Falar no WhatsApp →
        </a>
      </div>

      <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-navy border-b border-white/10 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-lg font-medium text-white/80"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5521988551085?text=Olá! Gostaria de agendar uma Conversa Estratégica para uma Análise de Gargalos na minha operação." 
              className="bg-orange text-white px-6 py-4 rounded-sm text-center font-bold flex items-center justify-center gap-2"
            >
              Falar no WhatsApp <MessageCircle size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Reveal = ({ children, delay = 0, direction = 'up' }: { children: React.ReactNode, delay?: number, direction?: 'up' | 'left' | 'right' }) => {
  const variants = {
    hidden: { 
      opacity: 0, 
      y: direction === 'up' ? 32 : 0,
      x: direction === 'left' ? -40 : direction === 'right' ? 40 : 0
    },
    visible: { 
      opacity: 1, 
      y: 0,
      x: 0
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-cream selection:bg-orange/20 selection:text-orange">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen bg-navy flex items-center px-6 md:px-12 pt-32 pb-20 overflow-hidden">
        <div className="hero-bg" />
        <div className="hero-grid-lines" />
        
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-orange/15 border border-orange/30 text-orange-light text-[10px] font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange animate-pulse" />
              Consultoria em CX & Operações
            </div>
            
            <Reveal>
              <h1 className="font-display text-5xl md:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-5">
                Seu cliente está<br/>
                indo embora.<br/>
                Você sabe <em className="not-italic text-orange relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-[3px] after:bg-orange/40 after:rounded-sm">exatamente</em><br/>
                onde está o buraco?
              </h1>
            </Reveal>
            
            <Reveal delay={0.1}>
              <p className="text-lg text-white/85 leading-relaxed max-w-[480px] mb-10 font-light">
                Cancelamento alto, reclamações que não param, reputação que escorrega — quase sempre o problema <strong className="text-white font-semibold">não está no produto</strong>. Está em como a operação funciona.<br/><br/>
                A PlusOps identifica onde e resolve.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/5521988551085?text=Olá! Gostaria de agendar uma Conversa Estratégica para uma Análise de Gargalos na minha operação." className="bg-orange text-white px-7 py-3.5 rounded-sm font-bold flex items-center gap-2 hover:bg-orange-light hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/35 transition-all">
                  📋 Agendar Conversa Estratégica
                </a>
                <a href="#recognition" className="border border-white/30 text-white/90 px-7 py-3.5 rounded-sm font-medium hover:border-white/70 hover:text-white transition-all">
                  Ver se me identifico
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex gap-8 mt-8 pt-8 border-t border-white/10 w-full">
                <div>
                  <span className="font-display font-extrabold text-3xl text-orange block leading-none">20+</span>
                  <span className="text-xs text-white/65 mt-1.5 block leading-snug">anos em<br/>operações críticas</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-3xl text-orange block leading-none">3x</span>
                  <span className="text-xs text-white/65 mt-1.5 block leading-snug">redução de<br/>reclamações — MetrôRio</span>
                </div>
                <div>
                  <span className="font-display font-extrabold text-3xl text-orange block leading-none">9+</span>
                  <span className="text-xs text-white/65 mt-1.5 block leading-snug">NPS atingido<br/>no GRU Airport</span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3">
            <Reveal direction="right" delay={0.1}>
              <div className="bg-white/5 border border-white/10 border-l-[3px] border-l-[#E74C3C] p-5 rounded-sm flex gap-4 hover:bg-white/10 transition-all">
                <span className="text-2xl leading-none shrink-0">📉</span>
                <div>
                  <h3 className="text-white font-bold mb-1.5">Cancelamentos subindo sem explicação clara</h3>
                  <p className="text-white/70 text-sm leading-normal">O cliente não reclama — simplesmente vai embora. E você fica sem saber exatamente onde perdeu ele.</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.2}>
              <div className="bg-white/5 border border-white/10 border-l-[3px] border-l-[#F39C12] p-5 rounded-sm flex gap-4 hover:bg-white/10 transition-all">
                <span className="text-2xl leading-none shrink-0">😤</span>
                <div>
                  <h3 className="text-white font-bold mb-1.5">Reclamações que se repetem todo mês</h3>
                  <p className="text-white/70 text-sm leading-normal">O time apaga incêndio, mas o fogo volta. Porque a causa raiz nunca foi tratada — só o sintoma.</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.3}>
              <div className="bg-white/5 border border-white/10 border-l-[3px] border-l-[#3498DB] p-5 rounded-sm flex gap-4 hover:bg-white/10 transition-all">
                <span className="text-2xl leading-none shrink-0">⚠️</span>
                <div>
                  <h3 className="text-white font-bold mb-1.5">Reputação sendo corroída em canal público</h3>
                  <p className="text-white/70 text-sm leading-normal">Reclame Aqui, PROCON, órgão regulador. Cada registro público custa mais do que a multa — custa confiança.</p>
                </div>
              </div>
            </Reveal>
            <Reveal direction="right" delay={0.4}>
              <div className="mt-3 p-4 bg-orange/10 border border-orange/15 rounded-sm">
                <p className="text-sm text-white/65 leading-relaxed">
                  💡 <strong className="text-white/70">Se você se reconheceu em pelo menos uma dessas situações</strong>, a PlusOps foi feita para o que você está vivendo.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section id="recognition" className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange mb-3.5 block">Você se reconhece aqui?</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight tracking-tight mb-4.5">Três sinais de que<br/>sua operação precisa de estrutura</h2>
            <p className="text-lg text-[#4A5568] max-w-[560px] leading-relaxed mb-14 font-light">Cada uma dessas situações parece um problema de atendimento. Na verdade, é um problema de processo — e tem solução.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 border-2 border-lgray rounded-lg overflow-hidden">
            {[
              {
                num: '01',
                title: 'O cliente cancela e você descobre tarde demais',
                body: 'Alta taxa de cancelamento é a consequência. A causa está nos meses antes — em algum momento do atendimento onde o cliente já havia decidido ir embora, mas ninguém percebeu.',
                symptoms: [
                  'O churn sobe mesmo sem mudança de produto ou preço',
                  'Você não sabe em qual ponto da jornada o cliente desiste',
                  'A equipe de retenção apaga incêndio, mas não previne',
                  'Indicadores de satisfação existem, mas não geram ação'
                ],
                color: 'bg-[#C0392B]'
              },
              {
                num: '02',
                title: 'Reclamações se repetem. Toda semana. Todo mês.',
                body: 'Não é falta de esforço do time. É que sem processo claro, cada atendente resolve do seu jeito — e o cliente vira uma loteria. O retrabalho acumula, o NPS despenca e o time se cansa.',
                symptoms: [
                  'Os mesmos problemas aparecem no relatório todo mês',
                  'Não há um padrão claro de como cada situação deve ser tratada',
                  'NPS baixo e difícil de melhorar, mesmo treinando a equipe',
                  'Backlog crescente e SLA constantemente estourado'
                ],
                color: 'bg-[#E67E22]'
              },
              {
                num: '03',
                title: 'A reputação está sendo construída pelo cliente insatisfeito',
                body: 'Quando um cliente vai ao Reclame Aqui, PROCON ou órgão regulador, é porque a empresa já teve várias chances de resolver e não resolveu. Cada registro público é um sinal de alerta que virou alarme.',
                symptoms: [
                  'Volume de reclamações formais cresce mês a mês',
                  'Respostas a órgãos reguladores tomam tempo e recurso excessivos',
                  'Nota no Reclame Aqui impacta conversão e novos negócios',
                  'Não há processo estruturado de tratamento de escaladas'
                ],
                color: 'bg-blue'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-9 group relative transition-colors hover:bg-lgray border-b md:border-b-0 md:border-r last:border-0 border-lgray">
                <div className={`absolute top-0 left-0 right-0 h-[3px] transition-transform origin-left scale-x-0 group-hover:scale-x-100 ${item.color}`} />
                <div className="font-display font-extrabold text-5xl text-lgray leading-none mb-4 tracking-tight group-hover:text-cream transition-colors">{item.num}</div>
                <h3 className="font-display font-bold text-xl text-navy leading-snug mb-3 tracking-normal">{item.title}</h3>
                <p className="text-navy-text/80 leading-relaxed mb-5 font-light">{item.body}</p>
                <div className="pt-5 border-t border-lgray">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#7A8699] mb-2.5 block">Você está vivendo isso se:</span>
                  <ul className="space-y-2">
                    {item.symptoms.map((s, sIdx) => (
                      <li key={sIdx} className="text-sm text-navy-text flex items-start gap-2 leading-normal">
                        <span className="text-orange font-bold shrink-0 mt-0.5">→</span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="bg-navy py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange mb-3.5 block">Como funciona</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4.5">Do diagnóstico ao resultado.<br/>Sem enrolação.</h2>
            <p className="text-lg text-white/70 max-w-[560px] leading-relaxed mb-14 font-light">Não chego com PowerPoint pronto. Começo ouvindo e entendendo o que está acontecendo de verdade. Só então monto o caminho.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 relative">
            <div className="absolute top-9 left-[16.66%] right-[16.66%] h-px bg-white/10 hidden md:block" />
            {[
              {
                num: '01',
                icon: '🔍',
                title: 'Diagnóstico objetivo',
                body: 'Analiso como sua operação funciona hoje: processos, canais, indicadores, tecnologia e as pessoas que executam. Sem achismo — mapeio onde está o problema e o custo dele para o negócio.',
                result: 'Você vai saber exatamente o que está errado e por onde começar.'
              },
              {
                num: '02',
                icon: '🏗️',
                title: 'Estruturação e implantação',
                body: 'Desenho o novo modelo operacional: fluxos claros, papéis definidos, SLAs que fazem sentido, indicadores que geram decisão. E acompanho a implantação até funcionar.',
                result: 'Sua equipe trabalha com processo — não na base do improviso.'
              },
              {
                num: '03',
                icon: '📈',
                title: 'Resultado mensurável',
                body: 'Defino com você os indicadores de sucesso antes de começar. Medimos juntos ao longo do projeto e no final. Resultado que não aparece nos números não é resultado.',
                result: 'Menos cancelamento, menos reclamação, NPS melhor — no papel.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white/5 border border-white/5 p-10 rounded-sm">
                <div className="font-display font-extrabold text-4xl text-white/5 leading-none mb-6 tracking-tight">{step.num}</div>
                <div className="w-12 h-12 rounded-sm bg-orange/15 border border-orange/20 flex items-center justify-center text-xl mb-5">{step.icon}</div>
                <h3 className="font-display font-bold text-xl text-white leading-snug mb-3 tracking-normal">{step.title}</h3>
                <p className="text-white/80 leading-relaxed mb-4 font-light">{step.body}</p>
                <div className="p-3 bg-orange/10 border-l-2 border-orange text-sm text-white/90 font-medium rounded-r-sm leading-normal italic">
                  "{step.result}"
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="products" className="bg-cream py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-end mb-16">
            <Reveal>
              <span className="text-xs font-bold uppercase tracking-widest text-orange mb-3.5 block">Soluções</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl text-navy leading-tight tracking-tight">O que eu faço,<br/>em linguagem direta</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg text-[#3D4F63] leading-relaxed font-light">Sem nome pomposo nem jargão de consultoria. Cada solução resolve uma dor específica — e o resultado é mensurável antes de começar.</p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                label: 'Para quem não sabe por onde começar',
                icon: '🔍',
                name: 'Diagnóstico da Operação',
                tagline: '"Vou olhar tudo e te dizer o que está travando — e o que consertar primeiro."',
                desc: 'Analiso processos, canais, indicadores, ferramentas e as pessoas que executam. Mapeio onde o cliente se frustra, onde a equipe perde tempo e qual o custo financeiro de cada problema.',
                result: 'Relatório claro com os problemas priorizados e o caminho mais rápido para o resultado',
                time: '3 a 6 semanas'
              },
              {
                label: 'Para quem está sempre apagando incêndio',
                icon: '🏗️',
                name: 'Reestruturação da Operação',
                tagline: '"Vou redesenhar como seu atendimento funciona para parar o ciclo de retrabalho."',
                desc: 'Monto o fluxo de como cada situação deve ser tratada, quem faz o quê, qual o prazo de cada etapa, e como medir se está funcionando. Documento tudo e acompanho a equipe na mudança.',
                result: 'Operação previsível, NPS melhorando, equipe com menos sobrecarga',
                time: '6 a 12 semanas'
              },
              {
                label: 'Para quem tem reclamações em órgão regulador',
                icon: '📋',
                name: 'Operação para Ambientes Regulados',
                tagline: '"Organizo seu atendimento para resistir a qualquer auditoria — e gerar menos notificações."',
                desc: 'ANAC, ANS, AGETRANSP, ANATEL, PROCON. Cada setor tem regras específicas de atendimento. Documento os processos no formato exigido, treino o time nas obrigações legais e reduzo o volume de escalonamentos externos.',
                result: 'Menos multas, menos tempo respondendo órgão, mais controle operacional',
                time: '4 a 8 semanas',
                featured: true
              },
              {
                label: 'Para quem mede NPS mas não sabe o que fazer com ele',
                icon: '📊',
                name: 'NPS e Voz do Cliente que geram decisão',
                tagline: '"Vou fazer o que o cliente fala virar ação concreta — não só relatório."',
                desc: 'Estruturo ou revejo como vocês medem a satisfação, crio um painel simples de entender e monto o processo para agir sobre o que está sendo apontado. Conectado direto ao churn e à retenção.',
                result: 'Você vai saber por que o cliente está insatisfeito e o que priorizar para reter',
                time: '4 a 8 semanas'
              },
              {
                label: 'Para quem quer usar IA sem se perder no hype',
                icon: '🤖',
                name: 'IA no Atendimento com Governança',
                tagline: '"Ajudo a implementar IA onde ela realmente ajuda — sem prometer milagre."',
                desc: 'Identifico onde a automação gera resultado real (e onde atrapalha), monto a arquitetura da solução, supervisiono a implantação e defino como medir se está funcionando. IA com memória, limites e responsabilidade.',
                result: 'Menos tarefas repetitivas, mais agilidade, custo menor — e o time focado no que importa',
                time: '8 a 16 semanas'
              },
              {
                label: 'Para líderes que querem evoluir mais rápido',
                icon: '🎓',
                name: 'Mentoria para Líderes de Operação',
                tagline: '"Trabalho ao seu lado para resolver o que está travado — com método e sem enrolação."',
                desc: 'Encontros quinzenais com agenda definida por você, material exclusivo e suporte entre sessões. Individual (gerentes/diretores) ou em grupo (time de liderança). Ideal para quem quer avançar sem precisar de um projeto completo agora.',
                result: 'Decisões melhores, time mais alinhado, menos tempo apagando incêndio',
                time: '3 a 6 meses'
              }
            ].map((prod, idx) => (
              <div key={idx} className={`product-card-gradient p-8 rounded-lg border flex flex-col transition-all hover:-translate-y-1.5 hover:shadow-2xl hover:border-orange/30 group ${prod.featured ? 'bg-white border-navy border-2' : 'bg-white border-black/5'}`}>
                <div className="text-[10px] font-bold uppercase tracking-widest mb-3.5 text-orange">{prod.label}</div>
                <div className="text-2xl mb-4">{prod.icon}</div>
                <h3 className="font-display font-bold text-xl leading-snug mb-2 tracking-normal text-navy">{prod.name}</h3>
                <p className="text-sm font-medium leading-normal mb-4 text-navy-text">{prod.tagline}</p>
                <p className="text-sm leading-relaxed mb-5 flex-grow font-light text-[#3D4F63]">{prod.desc}</p>
                <div className="product-result-gradient p-3.5 rounded-sm text-sm font-bold flex items-start gap-2 leading-normal text-[#155A35]">
                  <span className="shrink-0">✓</span>
                  {prod.result}
                </div>
                <div className="mt-4 text-sm font-light flex items-center gap-1.5 text-[#6B7A8D]">
                  Período de execução: <strong className="font-semibold text-navy-text">{prod.time}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="bg-navy-light py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="results-cta-gradient absolute -top-[200px] -right-[200px] w-[600px] h-[600px] pointer-events-none" />
        <div className="max-w-[1100px] mx-auto relative z-10">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange mb-3.5 block">Resultados reais</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-4.5">Números que existem<br/>fora das apresentações</h2>
            <p className="text-lg text-white/70 max-w-[560px] leading-relaxed mb-14 font-light">Esses resultados foram alcançados em operações reais, em setores de alta criticidade, com times e processos — não em projetos-piloto controlados.</p>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { val: '3x', lbl: 'redução no volume de reclamações junto ao órgão regulador', src: 'MetrôRio · AGETRANSP' },
              { val: '9+', lbl: 'NPS consistente após reestruturação do atendimento', src: 'GRU Airport · ANAC' },
              { val: '↓', lbl: 'redução significativa de backlog com melhoria de fluxo e priorização', src: "Rede D'Or · Salesforce + NICE" },
              { val: '1°', lbl: 'aeroporto a disponibilizar informações de voos por URA automatizada', src: 'GRU Airport · inovação operacional' }
            ].map((res, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-7 rounded-sm hover:bg-white/10 transition-colors">
                <div className="font-display font-extrabold text-5xl text-orange leading-none mb-2.5 tracking-tight">{res.val}</div>
                <div className="text-white/90 text-sm leading-normal mb-2.5 font-light">{res.lbl}</div>
                <div className="text-white/45 text-xs italic font-light">{res.src}</div>
              </div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 bg-orange/10 border border-orange/20 p-10 rounded-lg flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left">
                <h3 className="font-display font-bold text-2xl text-white mb-2 tracking-normal">Quer saber o que é possível na sua operação?</h3>
                <p className="text-white/75 leading-relaxed font-light">Uma conversa estratégica já mostra onde estão os maiores gargalos — e o impacto deles no seu negócio.</p>
              </div>
              <a href="https://wa.me/5521988551085?text=Olá! Gostaria de agendar uma Conversa Estratégica para uma Análise de Gargalos na minha operação." className="bg-orange text-white px-8 py-4 rounded-sm font-bold whitespace-nowrap hover:bg-orange-light transition-all active:scale-95">
                Agendar Conversa →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-20 items-center">
          <Reveal direction="left">
            <div className="flex flex-col gap-8">
              <div className="relative group">
                <div className="absolute -inset-4 bg-navy/5 rounded-2xl -z-10 group-hover:bg-orange/5 transition-colors" />
                <div className="aspect-square w-full max-w-[320px] rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                  <img 
                    src="https://media.licdn.com/dms/image/v2/D4D03AQFp_UbUrwcM0w/profile-displayphoto-shrink_400_400/B4DZT1mXMKG4Ag-/0/1739287264702?e=1773878400&v=beta&t=R9Cp-GVGxvq690HaOQog1vU3SQuH1F8FMmGrkvYYY7M" 
                    alt="Jadson Campos" 
                    className="w-full h-full object-cover"
                    loading="lazy"
                    width={320}
                    height={320}
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-navy p-6 rounded-lg shadow-xl hidden lg:block">
                  <div className="font-display font-extrabold text-3xl text-orange leading-none">+20</div>
                  <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest mt-1">Anos de Experiência</div>
                </div>
              </div>

              <div className="bg-navy p-8 rounded-lg relative overflow-hidden">
                <div className="absolute -bottom-[60px] -right-[60px] w-[240px] h-[240px] bg-radial-gradient(circle,rgba(244,123,32,0.15),transparent 70%) pointer-events-none" />
                <h2 className="font-display font-extrabold text-3xl text-white mb-1 tracking-tight">Jadson Campos</h2>
                <div className="text-orange text-xs font-bold tracking-widest uppercase mb-6">Fundador da PlusOps · Consultor de CX & Operações</div>
                <p className="text-white/85 text-sm leading-relaxed mb-6 font-light">
                  +20 anos liderando operações de alta criticidade em setores onde a falha não é uma opção. 
                  Especialista em transformar ambientes complexos — de infraestrutura a redes hospitalares — 
                  em operações fluidas e previsíveis. Minha entrega foca em blindar a experiência do cliente 
                  através de processos robustos que garantem eficiência operacional e resultados sólidos no P&L.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Rede D'Or", "GRU Airport", "MetrôRio", "INVEPAR", "Oi/Telemar"].map(c => (
                    <span key={c} className="bg-white/5 border border-white/10 text-white/70 text-[10px] font-medium px-2.5 py-1 rounded-sm">{c}</span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col">
            <Reveal direction="right">
              <span className="text-xs font-bold uppercase tracking-widest text-orange mb-3.5 block">Por que a PlusOps</span>
              <h2 className="font-display font-extrabold text-4xl text-navy leading-tight tracking-tight mb-8">Expertise Executiva.<br/>Práticas de Mercado.</h2>
              <p className="text-lg text-[#3D4F63] leading-relaxed mb-8 font-light">Unindo anos de expertise em operações críticas às práticas atuais de mercado para entregar soluções eficientes e resultados mensuráveis.</p>
              
              <div className="space-y-4">
                {[
                  { icon: '🚀', ttl: 'Inteligência de Dados com DNA Operacional', dsc: 'MBA em Dados e Gestão de Negócios unido à realidade crua de como o mercado realmente funciona. É a estratégia servindo à operação, e não o contrário.' },
                  { icon: '🤖', ttl: 'IA que Resolve, Não que Encanta', dsc: 'Agentes de IA focados em eficiência, não em inovação por vaidade. Engenharia de prompts aplicada a problemas reais de P&L e margem.' },
                  { icon: '🛡️', ttl: 'A Visão de quem já foi Cobrado', dsc: 'Fui gerente operacional em empresas reguladas. Eu sei onde o processo quebra, onde o time desmotiva e onde o dinheiro é desperdiçado.' },
                  { icon: '🎯', ttl: 'O Número é o Único Relatório que Importa', dsc: 'Compromisso com o ponteiro que move o lucro. ROI e eficiência mensurável. Se não puder ser medido, não é PlusOps.' },
                  { icon: '🤝', ttl: 'Senioridade Máxima, Entrega Direta', dsc: 'Consultoria boutique: você lida diretamente com o especialista de duas décadas. Sem intermediários, sem estagiários, apenas senioridade.' }
                ].map((pt, idx) => (
                  <div key={idx} className="flex gap-4 p-4.5 bg-lgray border-l-[3px] border-orange rounded-r-lg">
                    <span className="text-lg shrink-0 mt-0.5">{pt.icon}</span>
                    <div>
                      <h4 className="font-bold text-navy mb-1">{pt.ttl}</h4>
                      <p className="text-[#3D4F63] text-sm leading-normal font-light">{pt.dsc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="bg-navy py-24 md:py-32 px-6 md:px-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-gradient(ellipse 50% 60% at 50% 50%,rgba(244,123,32,0.1),transparent 70%) pointer-events-none" />
        <div className="max-w-[700px] mx-auto relative z-10">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-orange mb-4 block">Pronto para dar o próximo passo?</span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white leading-tight tracking-tight mb-5">
              Seu cliente merece uma operação<br/>
              que funciona. <span className="text-orange">Sua empresa também.</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-10 font-light">
              Vamos agendar uma conversa estratégica. Sem compromisso, sem apresentação genérica.
              Uma análise honesta sobre o que está travando na sua operação e o caminho para a eficiência.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://wa.me/5521988551085?text=Olá! Gostaria de agendar uma Conversa Estratégica para uma Análise de Gargalos na minha operação." className="bg-orange text-white px-8 py-4 rounded-sm font-bold flex items-center gap-2 hover:bg-orange-light transition-all active:scale-95">
                <MessageCircle size={20} /> Falar no WhatsApp
              </a>
              <a href="mailto:contato@plusopsconsult.com" className="border border-white/20 text-white/70 px-8 py-4 rounded-sm font-medium hover:border-white/40 hover:text-white transition-all">
                ✉️ Enviar e-mail
              </a>
            </div>
            <div className="mt-8 text-sm text-white/50 font-light flex flex-col gap-1">
              <div>Jadson Campos · contato@plusopsconsult.com · (21) 98855-1085</div>
              <div>Rio de Janeiro – RJ – Brasil</div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#080F1A] py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/5">
        <div className="flex flex-col gap-2 items-center md:items-start">
          <div className="font-display font-extrabold text-xl text-white tracking-tighter">
            Plus<span className="text-orange">Ops</span>
          </div>
          <div className="text-white/40 text-xs font-light">© 2026 PlusOps Consultoria · Todos os direitos reservados</div>
          <div className="text-white/40 text-xs font-light">CNPJ: 65.086.428/0001-44</div>
        </div>
        
        <div className="text-white/40 text-sm font-light text-center md:text-right flex flex-col gap-1">
          <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
            <a href="https://www.linkedin.com/in/jadsoncampos" target="_blank" rel="noopener noreferrer" className="text-white/65 hover:text-orange transition-colors">LinkedIn</a>
          </div>
          <div>Rio de Janeiro – RJ – Brasil</div>
          <a href="mailto:contato@plusopsconsult.com" className="text-white/65 hover:text-orange transition-colors">contato@plusopsconsult.com</a>
          <a href="tel:+5521988551085" className="text-white/65 hover:text-orange transition-colors">(21) 98855-1085</a>
        </div>
      </footer>
    </div>
  );
}
