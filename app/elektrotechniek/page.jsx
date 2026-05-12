export const metadata = {
  title: "Elektrotechniek & Verlichting | Yus Klussenbedrijf",
  description: "Veilige elektrische installaties conform NEN-1010. Groepenkasten vervangen, stopcontacten frezen en moderne lichtplannen.",
  keywords: ["elektrotechniek", "elektricien", "groepenkast", "stopcontacten", "lichtplan"],
};

export default function Elektrotechniek() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Onze Expertise</p>
          <h1>Elektrotechniek</h1>
          <p>Veilige installaties, groepenkasten vervangen en modern schakelmateriaal monteren.</p>
        </div>
        <div className="intro-card" style={{ marginTop: '40px' }}>
          <div>
            <h2>Veiligheid en modern wooncomfort</h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.8' }}>
              Betrouwbare elektrotechniek is cruciaal voor de veiligheid en het comfort in uw woning. Tijdens een renovatie is het upgraden van uw elektra vaak een logische en noodzakelijke stap.
              <br/><br/>
              Wij vervangen oude groepenkasten (conform NEN-1010 normen), frezen onzichtbaar nieuwe leidingen en stopcontacten in de muur, en installeren strak en modern schakelmateriaal. Ook denken we graag mee over sfeervolle lichtplannen en inbouwspots die de ruimte perfect uitlichten.
            </p>
          </div>
          <img src="/work/real-elektra-1.webp" alt="Professionele elektrotechniek" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }} />
        </div>
      </section>
    </main>
  );
}
