import { CheckCircle } from "lucide-react";

export const metadata = {
  title: "Over Ons | Yus Klussenbedrijf",
  description: "Lees het verhaal achter YUS Klussenbedrijf. Pure passie voor vakmanschap, eerlijke afspraken en premium afwerking in Nederland.",
  keywords: ["over ons", "klusbedrijf nederland", "vakmanschap", "bouwbedrijf"],
};

export default function OverOns() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Het Verhaal Achter</p>
          <h1>YUS Klussenbedrijf</h1>
          <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '20px' }}>
            Ontstaan vanuit een pure passie voor vakmanschap en perfectie. Wat begon als een eenmanszaak, is inmiddels uitgegroeid tot een gerespecteerd renovatiebedrijf in Nederland.
          </p>
        </div>

        <div className="process-grid" style={{ marginTop: '60px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          <div className="process-card">
            <CheckCircle size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Onze Missie</h3>
            <p>Kwaliteit leveren en verwachtingen overtreffen bij elke oplevering. Wij werken uitsluitend met premium materialen en gecertificeerde vakmensen zodat u altijd een resultaat krijgt dat de tand des tijds doorstaat.</p>
          </div>
          
          <div className="process-card">
            <CheckCircle size={32} color="var(--accent)" style={{ marginBottom: '16px' }} />
            <h3 style={{ fontSize: '22px', marginBottom: '12px' }}>Onze Visie</h3>
            <p>De standaard zetten voor duurzame en eerlijke renovaties. Transparante communicatie, heldere prijzen en één vast aanspreekpunt voor elk project — zodat u zorgeloos kunt genieten van uw verbouwing.</p>
          </div>
        </div>

        <div className="dark-quote-shell" style={{ marginTop: '60px' }}>
          <p className="kicker">Waarom YUS</p>
          <blockquote style={{ fontSize: '32px', marginTop: '16px' }}>
            "Een woning hoeft niet groter te zijn om meer indruk te maken. De afwerking doet dat werk al."
          </blockquote>
        </div>
      </section>
    </main>
  );
}
