"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Heater,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const phone = "+31 6 12345678";
const whatsapp = "https://wa.me/31612345678";
const email = "info@yusklussenbedrijf.nl";

const services = [
  ["Stucwerk", "Strakke wanden en plafonds, sausklaar of behangklaar opgeleverd.", Sparkles],
  ["Schilderwerk", "Binnen en buiten schilderwerk met nette voorbereiding en duurzame afwerking.", Paintbrush],
  ["Timmerwerk", "Aftimmering, deuren, kozijnen en maatwerk voor renovatie en afbouw.", Ruler],
  ["Vloerverwarming", "Voorbereiding, aanleg en afwerking voor comfortabele woonruimtes.", Heater],
];

const values = [
  "Heldere offerte vooraf",
  "Net en schoon werkgebied",
  "Duidelijke planning",
  "Een vast aanspreekpunt",
  "Afwerking tot in detail",
  "Snel contact via WhatsApp",
];

const projects = [
  ["Stucwerk en schilderwerk", "Amsterdam", "Woning strak afgewerkt voor verhuur.", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=84"],
  ["Badkamer renovatie", "Utrecht", "Moderne afwerking met rustige materiaalkeuze.", "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=84"],
  ["Vloer en afbouw", "Rotterdam", "Nette oplevering van woonruimte en details.", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=84"],
];

const steps = [
  ["01", "Aanvraag", "U deelt de klus, wensen en eventueel foto's."],
  ["02", "Plan", "We bespreken materiaal, timing en aanpak."],
  ["03", "Offerte", "U krijgt een duidelijk voorstel zonder verrassingen."],
  ["04", "Oplevering", "We werken netjes en leveren strak op."],
];

const faqs = [
  ["Hoe snel reageren jullie?", "Meestal reageren we binnen 24 uur op aanvragen."],
  ["Doen jullie ook kleine klussen?", "Ja. Ook kleinere herstel-, schilder- en timmerklussen pakken we netjes op."],
  ["Is de offerte vrijblijvend?", "Ja, u ontvangt eerst een duidelijke vrijblijvende offerte."],
  ["Waar werken jullie?", "Wij werken in Nederland, met focus op de Randstad en omliggende regio's."],
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={reveal}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="YUS Klussenbedrijf">
          <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a href="#diensten">Diensten</a>
          <a href="#projecten">Werk</a>
          <a href="#proces">Proces</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-button" href="#offerte">Offerte aanvragen</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <motion.p className="label" initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
              Stucwerk / Schilderwerk / Timmerwerk / Vloerverwarming
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
              Kluswerk dat strak voelt voordat het klaar is.
            </motion.h1>
            <motion.p className="hero-lead" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
              YUS Klussenbedrijf werkt voor woningen, verhuurpanden en bedrijfsruimtes. Duidelijke afspraken, nette uitvoering en afwerking waar u op kunt vertrouwen.
            </motion.p>
            <motion.div className="hero-actions" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
              <a className="button primary" href="#offerte">Vraag offerte aan <ArrowRight size={18} /></a>
              <a className="button secondary" href={whatsapp}><MessageCircle size={18} /> WhatsApp</a>
            </motion.div>
            <motion.div className="proof" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.36 }}>
              <span><Clock3 size={16} /> Snelle reactie</span>
              <span><ShieldCheck size={16} /> Heldere afspraken</span>
              <span><Check size={16} /> Nette oplevering</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.18, duration: 0.75 }}>
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=86" alt="Strak afgewerkte woonruimte" />
            <div className="visual-note">
              <strong>Afwerking zonder ruis.</strong>
              <span>Van eerste afspraak tot oplevering netjes geregeld.</span>
            </div>
          </motion.div>
        </section>

        <section className="stats" aria-label="Kernwaarden">
          {[
            ["24u", "Reactie op aanvragen"],
            ["4", "Specialisaties"],
            ["NL", "Werkgebied"],
          ].map(([value, text]) => (
            <Reveal key={text}>
              <div>
                <strong>{value}</strong>
                <span>{text}</span>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="section" id="diensten">
          <Reveal>
            <div className="section-head">
              <p className="label">Diensten</p>
              <h2>Specialistisch genoeg voor detail, breed genoeg voor renovatie.</h2>
            </div>
          </Reveal>
          <div className="service-grid">
            {services.map(([title, text, Icon], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="service-card">
                  <Icon size={26} />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#offerte">Aanvragen <ArrowRight size={16} /></a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section split">
          <Reveal>
            <div className="section-head">
              <p className="label">Waarom YUS</p>
              <h2>Een rustige uitvoering begint bij duidelijke communicatie.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="value-grid">
              {values.map((value) => (
                <span key={value}><Check size={18} /> {value}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="work-section" id="projecten">
          <Reveal>
            <div className="section-head invert">
              <p className="label">Werk</p>
              <h2>Een sterke basis, strak zichtbaar resultaat.</h2>
            </div>
          </Reveal>
          <div className="project-grid">
            {projects.map(([title, place, text, image], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article className="project-card">
                  <img src={image} alt={`${title} in ${place}`} />
                  <div>
                    <span>{place}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section split" id="proces">
          <Reveal>
            <div className="section-head">
              <p className="label">Proces</p>
              <h2>Geen ingewikkeld traject. Gewoon goed geregeld.</h2>
            </div>
          </Reveal>
          <div className="steps">
            {steps.map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.04}>
                <article>
                  <strong>{number}</strong>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="quote-section">
          <Reveal>
            <div className="quote-card">
              <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} fill="currentColor" />)}</div>
              <blockquote>"Netjes gewerkt, duidelijk gecommuniceerd en alles schoon achtergelaten."</blockquote>
              <p>Particuliere klant - Utrecht</p>
            </div>
          </Reveal>
        </section>

        <section className="section form-section" id="offerte">
          <Reveal>
            <div className="section-head">
              <p className="label">Offerte</p>
              <h2>Vertel wat er moet gebeuren.</h2>
              <p>Stuur uw aanvraag. We reageren snel met een duidelijke vervolgstap.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <form className="quote-form" action={`mailto:${email}`} method="post" encType="text/plain">
              <input name="naam" placeholder="Naam" required />
              <input name="telefoon" placeholder="Telefoonnummer" required />
              <input name="email" type="email" placeholder="E-mail" />
              <input name="plaats" placeholder="Plaats / regio" />
              <select name="dienst" defaultValue="">
                <option value="" disabled>Dienst kiezen</option>
                <option>Stucwerk</option>
                <option>Schilderwerk</option>
                <option>Timmerwerk</option>
                <option>Vloerverwarming</option>
                <option>Renovatie</option>
              </select>
              <textarea name="bericht" rows="5" placeholder="Korte omschrijving van de klus" />
              <button className="button primary" type="submit">Verstuur aanvraag <ArrowRight size={18} /></button>
            </form>
          </Reveal>
        </section>

        <section className="section faq-section">
          <Reveal>
            <div className="section-head">
              <p className="label">FAQ</p>
              <h2>Veelgestelde vragen.</h2>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => (
              <Reveal key={question} delay={index * 0.04}>
                <details>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="contact-band" id="contact">
          <div>
            <p className="label">Contact</p>
            <h2>Klaar om uw klus te bespreken?</h2>
          </div>
          <div className="contact-links">
            <a href={`tel:${phone.replaceAll(" ", "")}`}><Phone size={18} /> {phone}</a>
            <a href={whatsapp}><MessageCircle size={18} /> WhatsApp</a>
            <a href={`mailto:${email}`}><Mail size={18} /> {email}</a>
            <span><MapPin size={18} /> Nederland</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        <span>Stucwerk - Schilderwerk - Timmerwerk - Vloerverwarming</span>
        <span>Copyright 2026</span>
      </footer>

      <div className="mobile-cta">
        <a href={whatsapp}><MessageCircle size={18} /> WhatsApp</a>
        <a href="#offerte">Offerte</a>
      </div>
    </>
  );
}
