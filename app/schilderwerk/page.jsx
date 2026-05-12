export const metadata = {
  title: "Schilderwerk Binnen & Buiten | Yus Klussenbedrijf",
  description: "Vakkundig schilderwerk voor binnen en buiten. Bescherm uw woning en geef het een compleet nieuwe, frisse uitstraling met premium verf.",
  keywords: ["schilderwerk", "binnenschilder", "buitenschilder", "verfwerk", "houtrot"],
};

export default function Schilderwerk() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Onze Expertise</p>
          <h1>Schilderwerk</h1>
          <p>Net lijnwerk, goede voorbereiding en een afwerking die niet goedkoop oogt maar verzorgd blijft.</p>
        </div>
        <div className="intro-card" style={{ marginTop: '40px' }}>
          <div>
            <h2>Kleur en bescherming in perfecte harmonie</h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.8' }}>
              Professioneel schilderwerk doet meer dan alleen uw woning verfraaien; het beschermt uw houtwerk en muren tegen weersinvloeden en slijtage. YUS Klussenbedrijf levert superstrak schilderwerk voor zowel binnen- als buitentoepassingen.
              <br/><br/>
              We werken uitsluitend met A-merk verven en hechten veel waarde aan een grondige voorbereiding: schuren, ontvetten en primeren. Het resultaat is strak lijnwerk zonder aanzetten en een duurzame beschermlaag waar u jarenlang van kunt genieten.
            </p>
          </div>
          <img src="/work/real-stucwerk-1.webp" alt="Schilderwerk en stucwerk" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }} />
        </div>
      </section>
    </main>
  );
}
