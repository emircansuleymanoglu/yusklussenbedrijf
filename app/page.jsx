"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Clock3,
  Hammer,
  Mail,
  MapPin,
  MessageCircle,
  Paintbrush,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  Wrench,
} from "lucide-react";

const phone = "+31 6 12345678";
const whatsapp = "https://wa.me/31612345678";
const email = "info@yusklussenbedrijf.nl";

const services = [
  {
    icon: Hammer,
    title: "Renovatie",
    text: "Badkamer, keuken en woningrenovatie met een duidelijke planning en nette oplevering.",
  },
  {
    icon: Ruler,
    title: "Montage",
    text: "Keukens, deuren, kozijnen, meubels en maatwerk zorgvuldig gemonteerd.",
  },
  {
    icon: Paintbrush,
    title: "Afwerking",
    text: "Schilderwerk, wanden, plafonds en vloeren strak afgewerkt tot in de details.",
  },
  {
    icon: Wrench,
    title: "Onderhoud",
    text: "Kleine reparaties, vastgoedonderhoud en snelle hulp voor woningen en bedrijven.",
  },
];

const benefits = [
  "Snelle reactie",
  "Heldere offerte",
  "Net werkgebied",
  "Betrouwbare planning",
  "Vakmanschap",
  "Een aanspreekpunt",
];

const projects = [
  {
    type: "Badkamer renovatie",
    place: "Utrecht",
    duration: "8 dagen",
    image:
      "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=82",
  },
  {
    type: "Keuken montage",
    place: "Rotterdam",
    duration: "3 dagen",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=82",
  },
  {
    type: "Interieur afwerking",
    place: "Amsterdam",
    duration: "5 dagen",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=82",
  },
];

const process = [
  ["01", "Contact", "U vertelt wat er nodig is en deelt eventueel foto's."],
  ["02", "Opname", "We bespreken de situatie, planning en materiaalkeuzes."],
  ["03", "Offerte", "U krijgt een duidelijke prijs en heldere afspraken."],
  ["04", "Uitvoering", "We werken netjes, communiceren goed en leveren strak op."],
];

const faqs = [
  ["Hoe snel kunnen jullie starten?", "Vaak kunnen we snel schakelen. De exacte startdatum hangt af van het type klus en de planning."],
  ["Maken jullie ook kleine klussen?", "Ja. Kleine reparaties, montagewerk en onderhoud zijn juist onderdeel van onze service."],
  ["Is de offerte vrijblijvend?", "Ja, u ontvangt eerst een heldere en vrijblijvende offerte."],
  ["In welke regio werken jullie?", "Wij werken in Nederland, met focus op grote steden en omliggende regio's."],
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a href="#" className="wordmark" aria-label="Yus Klussenbedrijf home">
          Yus Klussenbedrijf
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a href="#diensten">Diensten</a>
          <a href="#projecten">Projecten</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#offerte">
          Offerte aanvragen
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-content">
            <motion.p
              className="eyebrow"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Renovatie, montage en onderhoud
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.08 }}
            >
              Vakwerk voor woningen, verhuurpanden en bedrijven.
            </motion.h1>
            <motion.p
              className="hero-text"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18 }}
            >
              Van kleine reparaties tot complete renovaties. Yus Klussenbedrijf werkt netjes, communiceert duidelijk en levert op volgens afspraak.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
            >
              <a className="btn primary" href="#offerte">
                Vraag offerte aan <ArrowRight size={18} />
              </a>
              <a className="btn ghost" href={whatsapp}>
                <MessageCircle size={18} /> WhatsApp
              </a>
            </motion.div>
            <motion.div
              className="trust-row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.42 }}
            >
              <span><Clock3 size={16} /> Snel op locatie</span>
              <span><ShieldCheck size={16} /> Vrijblijvende offerte</span>
              <span><Sparkles size={16} /> Nette oplevering</span>
            </motion.div>
          </div>
        </section>

        <section className="section compact">
          <div className="metric-grid">
            {[
              ["24u", "Reactie op aanvragen"],
              ["10+", "Soorten klusdiensten"],
              ["100%", "Heldere afspraken"],
            ].map(([value, label]) => (
              <Reveal key={label}>
                <div className="metric">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="diensten">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Diensten</p>
              <h2>Een betrouwbare vakman voor elke fase van uw project.</h2>
            </div>
          </Reveal>
          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.06}>
                  <article className="service-card">
                    <Icon size={26} />
                    <h3>{service.title}</h3>
                    <p>{service.text}</p>
                    <a href="#offerte">Offerte aanvragen</a>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section split">
          <Reveal>
            <div>
              <p className="eyebrow">Waarom kiezen voor Yus</p>
              <h2>Duidelijke communicatie, schoon werk en een planning die klopt.</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="benefit-list">
              {benefits.map((benefit) => (
                <span key={benefit}><Check size={18} /> {benefit}</span>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="section dark" id="projecten">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Projecten</p>
              <h2>Strakke afwerking, zichtbaar verschil.</h2>
            </div>
          </Reveal>
          <div className="project-grid">
            {projects.map((project, index) => (
              <Reveal key={project.type} delay={index * 0.06}>
                <article className="project-card">
                  <img src={project.image} alt={`${project.type} in ${project.place}`} />
                  <div>
                    <span>{project.place} · {project.duration}</span>
                    <h3>{project.type}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section split" id="werkwijze">
          <Reveal>
            <div>
              <p className="eyebrow">Werkwijze</p>
              <h2>Van eerste bericht tot oplevering zonder gedoe.</h2>
            </div>
          </Reveal>
          <div className="timeline">
            {process.map(([number, title, text], index) => (
              <Reveal key={title} delay={index * 0.05}>
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

        <section className="section testimonials">
          <Reveal>
            <div className="quote-card">
              <div className="stars" aria-label="5 sterren">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
              </div>
              <blockquote>
                "Duidelijke afspraken, netjes gewerkt en alles schoon achtergelaten. Precies wat je zoekt bij een klusbedrijf."
              </blockquote>
              <p>Particuliere klant · Utrecht</p>
            </div>
          </Reveal>
        </section>

        <section className="section form-section" id="offerte">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">Offerte</p>
              <h2>Vertel kort wat er moet gebeuren.</h2>
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
                <option>Renovatie</option>
                <option>Montage</option>
                <option>Schilderwerk</option>
                <option>Onderhoud</option>
                <option>Andere klus</option>
              </select>
              <textarea name="bericht" placeholder="Korte omschrijving van de klus" rows="5" />
              <button className="btn primary" type="submit">
                Verstuur aanvraag <ArrowRight size={18} />
              </button>
            </form>
          </Reveal>
        </section>

        <section className="section faq">
          <Reveal>
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
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

        <section className="section contact-band" id="contact">
          <Reveal>
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Klaar om uw klus te bespreken?</h2>
              <p>Stuur een bericht of vraag direct een vrijblijvende offerte aan.</p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="contact-actions">
              <a href={`tel:${phone.replaceAll(" ", "")}`}><Phone size={18} /> {phone}</a>
              <a href={whatsapp}><MessageCircle size={18} /> WhatsApp</a>
              <a href={`mailto:${email}`}><Mail size={18} /> {email}</a>
              <span><MapPin size={18} /> Nederland</span>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="site-footer">
        <span>Yus Klussenbedrijf</span>
        <span>Renovatie · Montage · Onderhoud</span>
        <span>© 2026</span>
      </footer>

      <div className="mobile-cta">
        <a href={whatsapp}><MessageCircle size={18} /> WhatsApp</a>
        <a href="#offerte">Offerte</a>
      </div>
    </>
  );
}
