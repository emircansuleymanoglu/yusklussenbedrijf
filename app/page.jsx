"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
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

const phone = "+31 6 21547256";
const whatsapp = "https://wa.me/31621547256";
const email = "info@yusklussenbedrijf.nl";

const services = [
  {
    title: "Stucwerk",
    text: "Wanden en plafonds strak, rustig en klaar voor de volgende laag.",
    icon: Sparkles,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Schilderwerk",
    text: "Binnen en buiten schilderwerk met scherpe lijnen en duurzame voorbereiding.",
    icon: Paintbrush,
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Timmerwerk",
    text: "Aftimmering, deuren, kozijnen en maatwerk dat voelt alsof het er altijd hoorde.",
    icon: Ruler,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=86",
  },
  {
    title: "Vloerverwarming",
    text: "Comfort onder de vloer, netjes voorbereid en afgewerkt voor renovatie.",
    icon: Heater,
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=86",
  },
];

const values = [
  "Duidelijke prijsafspraak",
  "Strakke afwerking",
  "Schoon opgeleverd",
  "Snelle communicatie",
  "Planning zonder ruis",
  "Een vast aanspreekpunt",
];

const steps = [
  ["01", "Vertel wat nodig is", "U deelt de klus, locatie en eventueel foto's."],
  ["02", "We maken het concreet", "Materiaal, timing en aanpak worden helder besproken."],
  ["03", "U krijgt een offerte", "Duidelijke prijs en planning voordat we starten."],
  ["04", "Netjes opgeleverd", "We werken rustig, schoon en met aandacht voor detail."],
];

const faqs = [
  ["Hoe snel reageren jullie?", "Meestal binnen 24 uur. Bij spoed kunt u direct via WhatsApp sturen."],
  ["Doen jullie kleine klussen?", "Ja. Kleine herstel-, schilder-, stuc- en timmerklussen zijn welkom."],
  ["Is de offerte vrijblijvend?", "Ja, u ontvangt eerst een duidelijke vrijblijvende offerte."],
  ["Waar werken jullie?", "Wij werken in Nederland, met focus op de Randstad en omliggende regio's."],
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
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
  useEffect(() => {
    const s = document.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    document.head.appendChild(s);
    return () => {
      if (document.head.contains(s)) document.head.removeChild(s);
    };
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#" aria-label="YUS Klussenbedrijf">
          <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a href="#diensten">Diensten</a>
          <a href="#kwaliteit">Kwaliteit</a>
          <a href="#proces">Proces</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="nav-button" href="#offerte">Offerte aanvragen</a>
      </header>

      <main>
        <section className="hero">
          <motion.p className="announcement" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            Premium afwerking voor woningen, verhuurpanden en bedrijfsruimtes.
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            Van klus naar klasse.
          </motion.h1>
          <motion.p className="hero-lead" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            YUS Klussenbedrijf maakt ruimtes zichtbaar beter met strak stucwerk, schilderwerk, timmerwerk en vloerverwarming. Rustig geregeld, scherp uitgevoerd.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <a className="button dark" href="#offerte">Vraag offerte aan <ArrowRight size={17} /></a>
            <a className="button light" href={whatsapp}><MessageCircle size={17} /> WhatsApp</a>
          </motion.div>

          <motion.div className="showcase" initial={{ opacity: 0, y: 26, scale: 0.987 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.28, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=88" alt="Luxe afgewerkte woonruimte" />
            <div className="showcase-panel left">
              <span>Reactie</span>
              <strong>Binnen 24 uur</strong>
            </div>
            <div className="showcase-panel right">
              <span>Specialisaties</span>
              <strong>Stuc / Schilder / Timmer / Vloer</strong>
            </div>
          </motion.div>
        </section>

        <section className="metrics" aria-label="Kerncijfers">
          {[
            ["01", "Een aanspreekpunt"],
            ["24u", "Snelle reactie"],
            ["4", "Heldere specialisaties"],
          ].map(([value, label], index) => (
            <Reveal key={label} delay={index * 0.05}>
              <div>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="section services" id="diensten">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">Diensten</p>
              <h2>Alles wat een ruimte afmaakt.</h2>
              <p>Vier diensten, een standaard: strak, schoon en duidelijk opgeleverd.</p>
            </div>
          </Reveal>
          <div className="service-bento">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className={`service-card service-${index + 1}`}>
                    <img src={service.image} alt={service.title} />
                    <div>
                      <Icon size={22} />
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="quality" id="kwaliteit">
          <Reveal>
            <div className="quality-copy">
              <p className="kicker">Kwaliteit</p>
              <h2>De uitstraling van nieuwbouw, zonder het gedoe eromheen.</h2>
              <p>Een goede klus voelt niet chaotisch. U weet wie komt, wat er gebeurt en hoe het wordt opgeleverd.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="quality-grid">
              {values.map((value) => (
                <span key={value}><Check size={17} /> {value}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="story">
          <Reveal>
            <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1800&q=86" alt="Modern afgewerkte badkamer" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="story-card">
              <p className="kicker">Projectaanpak</p>
              <h2>Geen losse klusjes. Een afwerking die klopt als geheel.</h2>
              <p>Van voorbereiding tot laatste rand: YUS denkt mee over volgorde, materiaal en oplevering. Zo blijft het proces rustig en het resultaat professioneel.</p>
              <a href="#offerte">Bespreek uw project <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </section>

        <section className="section process" id="proces">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Proces</p>
              <h2>Helder van eerste bericht tot oplevering.</h2>
            </div>
          </Reveal>
          <div className="process-grid">
            {steps.map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
                <article>
                  <strong>{number}</strong>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="testimonial">
          <Reveal>
            <div>
              <div className="stars">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={17} fill="currentColor" />)}</div>
              <blockquote>"Duidelijk, netjes en precies afgewerkt. Je merkt dat er aandacht is voor het hele proces."</blockquote>
              <p>Particuliere klant — Utrecht</p>
            </div>
          </Reveal>
        </section>

        <section className="section instagram" id="instagram">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">Instagram</p>
              <h2>Ons werk in beeld.</h2>
              <p>Volg ons op Instagram voor de nieuwste projecten en afwerkingen.</p>
            </div>
          </Reveal>
          <behold-widget feed-id="WemjYi2rgmEWiMXnbiEi"></behold-widget>
        </section>

        <section className="section quote-layout" id="offerte">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Offerte</p>
              <h2>Vertel wat er moet gebeuren. Wij maken het concreet.</h2>
              <p>Beschrijf de klus kort. Voeg later foto's toe via WhatsApp als dat handig is.</p>
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
              <button className="button dark" type="submit">Verstuur aanvraag <ArrowRight size={17} /></button>
            </form>
          </Reveal>
        </section>

        <section className="section faq">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">FAQ</p>
              <h2>Goed om te weten.</h2>
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

        <section className="contact" id="contact">
          <div>
            <p className="kicker">Contact</p>
            <h2>Klaar om uw ruimte beter te maken?</h2>
          </div>
          <div className="contact-links">
            <a href={`tel:${phone.replaceAll(" ", "")}`}><Phone size={17} /> {phone}</a>
            <a href={whatsapp}><MessageCircle size={17} /> WhatsApp</a>
            <a href={`mailto:${email}`}><Mail size={17} /> {email}</a>
            <span><MapPin size={17} /> Nederland</span>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        <span>Stucwerk · Schilderwerk · Timmerwerk · Vloerverwarming</span>
        <span>© 2026 YUS Klussenbedrijf</span>
      </footer>

      <div className="mobile-cta">
        <a href={whatsapp}><MessageCircle size={17} /> WhatsApp</a>
        <a href="#offerte">Offerte</a>
      </div>
    </>
  );
}
