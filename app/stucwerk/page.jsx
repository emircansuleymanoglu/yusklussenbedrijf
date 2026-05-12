export const metadata = {
  title: "Stucwerk & Pleisterwerk | Yus Klussenbedrijf",
  description: "Professioneel stucwerk voor een strak en naadloos interieur. Sausklaar, behangklaar en decoratief stucwerk door ervaren stukadoors.",
  keywords: ["stucwerk", "pleisterwerk", "stukadoor", "sausklaar", "behangklaar"],
};

export default function Stucwerk() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Onze Expertise</p>
          <h1>Stucwerk & Pleisterwerk</h1>
          <p>Strakke wanden en plafonds die de ruimte direct rustiger en waardevoller laten voelen.</p>
        </div>
        <div className="intro-card" style={{ marginTop: '40px' }}>
          <div>
            <h2>De basis van een premium interieur</h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.8' }}>
              Goed stucwerk is onzichtbaar, maar het effect is enorm. Het creëert rust, ruimte en een moderne uitstraling. Bij YUS Klussenbedrijf begrijpen we dat de voorbereiding net zo belangrijk is als de afwerking. 
              <br/><br/>
              Of het nu gaat om het <strong>sausklaar</strong> maken van wanden in een nieuwbouwwoning, het herstellen van oude muren met raapwerk, of het aanbrengen van decoratief pleisterwerk, wij leveren vakmanschap. Onze stukadoors werken schoon, geconcentreerd en met oog voor de kleinste details.
            </p>
          </div>
          <img src="/work/stock-walls.jpg" alt="Premium stucwerk afwerking" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }} />
        </div>
      </section>
    </main>
  );
}
