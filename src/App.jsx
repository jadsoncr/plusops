import "./App.css";

function PortfolioCard({ title, subtitle, imageSrc }) {
  return (
    <div className="card">
      <div className="cardImageWrap">
        <img className="cardImage" src={imageSrc} alt={title} />
      </div>
      <div className="cardBody">
        <h3>{title}</h3>
        {subtitle ? <p>{subtitle}</p> : null}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>PlusOps</h1>
        <p>Portfólio</p>
      </header>

      <section className="section">
        <h2>Portfólio</h2>

        <div className="grid">
          <PortfolioCard
            title="BRO.ai"
            subtitle="Imagem local centralizada (SVG)"
            imageSrc="/images/broai.svg"
          />
        </div>
      </section>
    </main>
  );
}
