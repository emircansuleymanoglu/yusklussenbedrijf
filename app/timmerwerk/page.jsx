export const metadata = {
  title: "Timmerwerk op Maat | Yus Klussenbedrijf",
  description: "Vakkundig maatwerk timmerwerk. Van deuren en kozijnen tot op maat gemaakte inbouwkasten en plinten.",
  keywords: ["timmerwerk", "maatwerk", "kozijnen", "deuren", "inbouwkasten", "plinten"],
};

export default function Timmerwerk() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Onze Expertise</p>
          <h1>Timmerwerk op Maat</h1>
          <p>Aftimmering, kozijnen en detailwerk dat precies aansluit op de rest van het interieur.</p>
        </div>
        <div className="intro-card" style={{ marginTop: '40px' }}>
          <div>
            <h2>Oog voor detail in hout</h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.8' }}>
              Maatwerk timmerwerk brengt een woning tot leven en zorgt ervoor dat ruimtes optimaal benut worden. Of u nu droomt van kamerhoge inbouwkasten, nieuwe kozijnen, of elegante kamer-en-suite deuren, wij maken het werkelijkheid.
              <br/><br/>
              Onze timmermannen combineren traditioneel vakmanschap met moderne technieken. We hangen deuren af, plaatsen naadloze plinten en zorgen voor de complete aftimmering na een grote renovatie. Alles wordt precies ingemeten en strak afgewerkt.
            </p>
          </div>
          <img src="/work/real-timmer-1.webp" alt="Maatwerk timmerwerk" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }} />
        </div>
      </section>
    </main>
  );
}
