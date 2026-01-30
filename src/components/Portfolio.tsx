import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

// --- Types ---
interface Project {
  title: string;
  description: string;
  url: string;
  tags: string[];
  image: string;
  aspectRatio: string;
}

// --- Components ---

const PortfolioCard = ({ project }: { project: Project }) => {
  const [error, setError] = useState(false);

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col h-full">
      <div
        className={`relative overflow-hidden bg-slate-100 ${
          project.aspectRatio === "mobile"
            ? "aspect-[9/16] max-w-[280px] mx-auto my-4 rounded-xl shadow-lg"
            : "aspect-video"
        }`}
      >
        <img
          src={
            error
              ? `https://via.placeholder.com/800x450/4f46e5/ffffff?text=${project.title}`
              : project.image
          }
          alt={project.title}
          className={`${
            project.aspectRatio === "desktop"
              ? "object-contain"
              : "object-cover"
          } w-full h-full transition-transform duration-500 group-hover:scale-105`}
          onError={() => setError(true)}
          loading="lazy"
          decoding="async"
          width={project.aspectRatio === "desktop" ? 320 : 280}
          height={project.aspectRatio === "desktop" ? 180 : 498}
        />
        <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl"
          >
            Ver Projeto <ExternalLink size={18} />
          </a>
        </div>
      </div>

      <div className="p-8 flex-grow text-center md:text-left">
        <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
          {project.tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <h4 className="text-2xl font-bold text-slate-900 mb-3">
          {project.title}
        </h4>
        <p className="text-slate-600 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const projects: Project[] = [
    {
      title: "BRO.est",
      description:
        "Plataforma de governança operacional e controle de CMV, com foco em dados, rotina e resultado.",
      url: "https://broai-saas.vercel.app/",
      tags: ["Arquitetura", "SaaS", "Hospitalidade"],
      image: "/images/broai.svg",
      aspectRatio: "desktop",
    },
    {
      title: "DUUS",
      description:
        "Produto autoral de clareza emocional e escrita guiada, com IA aplicada de forma consciente.",
      url: "https://duus.vercel.app/",
      tags: ["IA", "UX Editorial", "Wellness"],
      image:
        "https://api.microlink.io?url=https://duus.vercel.app/&screenshot=true&embed=screenshot.url",
      aspectRatio: "mobile",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">
            Soluções desenvolvidas
          </h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900">
            Laboratórios de arquitetura e IA
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {projects.map((p, idx) => (
            <PortfolioCard key={idx} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
