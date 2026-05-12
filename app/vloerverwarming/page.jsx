export const metadata = {
  title: "Vloerverwarming Installatie | Yus Klussenbedrijf",
  description: "Comfortabel, onzichtbaar en energiezuinig verwarmen. Vakkundige installatie van vloerverwarming, infrezen of op netten.",
  keywords: ["vloerverwarming", "verwarming infrezen", "energiezuinig verwarmen", "installatie"],
};

export default function Vloerverwarming() {
  return (
    <main style={{ paddingTop: '120px' }}>
      <section className="section">
        <div className="section-head centered">
          <p className="kicker">Onze Expertise</p>
          <h1>Vloerverwarming</h1>
          <p>Comfort en afwerking in een traject, zorgvuldig meegenomen in renovatie en oplevering.</p>
        </div>
        <div className="intro-card" style={{ marginTop: '40px' }}>
          <div>
            <h2>Optimaal comfort en energiebesparing</h2>
            <p style={{ marginTop: '20px', color: 'var(--muted)', fontSize: '18px', lineHeight: '1.8' }}>
              Vloerverwarming is de standaard voor moderne, comfortabele woningen. Het biedt een gelijkmatige warmteverdeling, is volledig onzichtbaar (geen storende radiatoren meer), en is uiterst energiezuinig—vooral in combinatie met een warmtepomp.
              <br/><br/>
              YUS Klussenbedrijf verzorgt het hele traject: we frezen de sleuven stofarm in bestaande dekvloeren, of binden de buizen op krimpnetten. Daarna dichten we de sleuven af zodat de vloer legklaar is voor uw PVC, tegels of gietvloer. Eén vast aanspreekpunt voor een warme, strakke vloer.
            </p>
          </div>
          <img src="/work/stock-livingroom.jpg" alt="Comfortabel interieur met vloerverwarming" style={{ borderRadius: '24px', boxShadow: 'var(--shadow-soft)' }} />
        </div>
      </section>
    </main>
  );
}
