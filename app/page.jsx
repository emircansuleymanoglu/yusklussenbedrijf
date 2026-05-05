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
  Sparkles,
  Star,
} from "lucide-react";

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const phone = "+31 6 21547256";
const whatsapp = "https://wa.me/31621547256";
const email = "info@yusklussenbedrijf.nl";
const instagramPage = "/instagram";

const services = [
  {
    title: "Stucwerk",
    text: "Strakke wanden en plafonds die de ruimte direct rustiger en waardevoller laten voelen.",
    image: "/work/image00032.png",
    icon: Sparkles,
  },
  {
    title: "Schilderwerk",
    text: "Net lijnwerk, goede voorbereiding en een afwerking die niet goedkoop oogt maar verzorgd blijft.",
    image: "/work/image00029.png",
    icon: Paintbrush,
  },
  {
    title: "Timmerwerk",
    text: "Aftimmering, kozijnen en detailwerk dat precies aansluit op de rest van het interieur.",
    image: "/work/image00006.png",
    icon: Ruler,
  },
  {
    title: "Vloerverwarming",
    text: "Comfort en afwerking in een traject, zorgvuldig meegenomen in renovatie en oplevering.",
    image: "/work/image00009.png",
    icon: Heater,
  },
];

const principles = [
  "Duidelijke offerte vooraf",
  "Rustige communicatie tijdens het werk",
  "Nette planning en vaste afspraken",
  "Oplevering waar direct vertrouwen uit spreekt",
];

const steps = [
  {
    number: "01",
    title: "Intake",
    text: "U stuurt de klus door met fotos, wensen en locatie. Wij reageren snel en scherp.",
  },
  {
    number: "02",
    title: "Afstemming",
    text: "We bepalen materiaal, planning en aanpak zodat het resultaat vooraf al helder is.",
  },
  {
    number: "03",
    title: "Uitvoering",
    text: "YUS werkt schoon, geconcentreerd en met aandacht voor details die het verschil maken.",
  },
  {
    number: "04",
    title: "Oplevering",
    text: "Alles wordt netjes afgerond zodat de ruimte direct goed voelt wanneer u binnenkomt.",
  },
];

const showcases = [
  {
    eyebrow: "Badkamer",
    title: "Van ruw naar verzorgd.",
    text: "Een complete upgrade in uitstraling door strakkere afwerking, betere lijnen en een schoner eindbeeld.",
    image: "/work/image00041.jpeg",
  },
  {
    eyebrow: "Wanden en plafond",
    title: "Rust in elke hoek van de ruimte.",
    text: "Precies dat verschil waardoor een kamer niet alleen nieuw oogt, maar ook beter aanvoelt.",
    image: "/work/image00042.jpeg",
  },
  {
    eyebrow: "Woonruimte",
    title: "Meer licht, meer klasse.",
    text: "Goede afwerking maakt een ruimte groter, schoner en duidelijk waardevoller in beleving.",
    image: "/work/image00043.jpeg",
  },
];

const faqs = [
  [
    "Hoe snel reageren jullie op een aanvraag?",
    "Meestal binnen 24 uur. Via WhatsApp gaat het vaak nog sneller.",
  ],
  [
    "Doen jullie ook kleinere projecten?",
    "Ja. Ook kleinere afwerkingsklussen pakken we serieus en professioneel op.",
  ],
  [
    "Kunnen jullie meerdere werkzaamheden combineren?",
    "Ja. Juist die combinatie van stucwerk, schilderwerk, timmerwerk en vloerverwarming maakt het traject rustiger.",
  ],
  [
    "In welke regio werken jullie?",
    "YUS werkt in Nederland, met focus op de Randstad en omliggende regio's.",
  ],
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function Reveal({ children, delay = 0 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      variants={reveal}
      transition={{
        duration: reduceMotion ? 0 : 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://w.behold.so/widget.js";
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
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
          <a href="#werk">Werk</a>
          <a href="#werkwijze">Werkwijze</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-button" href="#offerte">
          Offerte aanvragen
        </a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-shell">
            <div className="hero-copy">
              <motion.p
                className="announcement"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Premium afwerking voor woningen, verhuurpanden en renovaties.
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 }}
              >
                Vakwerk dat direct meer klasse aan een ruimte geeft.
              </motion.h1>

              <motion.p
                className="hero-lead"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.16 }}
              >
                YUS Klussenbedrijf combineert stucwerk, schilderwerk, timmerwerk en
                vloerverwarming in een rustige, strakke en professionele oplevering.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.24 }}
              >
                <a className="button dark" href="#offerte">
                  Vraag offerte aan <ArrowRight size={17} />
                </a>
                <a className="button light" href={whatsapp}>
                  <MessageCircle size={17} /> WhatsApp
                </a>
                <a className="button instagram" href={instagramPage}>
                  <InstagramIcon size={17} /> Instagram
                </a>
              </motion.div>

              <motion.div
                className="hero-proof"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div>
                  <strong>24u</strong>
                  <span>reactie op nieuwe aanvragen</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>sterke specialisaties onder een naam</span>
                </div>
                <div>
                  <strong>01</strong>
                  <span>vast aanspreekpunt voor het traject</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, y: 24, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.26, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hero-panel main">
                <img
                  src="/work/image00043.jpeg"
                  alt="Before en after project van YUS Klussenbedrijf"
                />
                <div className="panel-copy">
                  <span>Voor en na</span>
                  <strong>Echt werk. Echt verschil.</strong>
                </div>
              </div>

              <div className="hero-panel secondary top">
                <img
                  src="/work/image00041.jpeg"
                  alt="Badkamer renovatie door YUS Klussenbedrijf"
                />
              </div>

              <div className="hero-panel secondary bottom">
                <img
                  src="/work/image00042.jpeg"
                  alt="Strakke wand en plafond afwerking door YUS Klussenbedrijf"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="section intro-band">
          <Reveal>
            <div className="intro-card">
              <div>
                <p className="kicker">Geen standaard kluswebsite</p>
                <h2>Hier draait alles om vertrouwen in de afwerking.</h2>
              </div>
              <p>
                De uitstraling van een woning verandert niet door veel tekst, maar door
                zichtbaar goed werk. Daarom staat deze site niet vol loze claims, maar
                met echte resultaten, rustige compositie en een heldere route naar contact.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="section services" id="diensten">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Diensten</p>
              <h2>Vier disciplines. Een hoog afwerkingsniveau.</h2>
              <p>
                Alles is erop gericht dat de ruimte niet half af voelt, maar compleet,
                verzorgd en waardevoller oogt wanneer het werk klaar is.
              </p>
            </div>
          </Reveal>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.05}>
                  <article className="service-card">
                    <img src={service.image} alt={service.title} />
                    <div className="service-tint" />
                    <div className="service-copy">
                      <Icon size={20} />
                      <h3>{service.title}</h3>
                      <p>{service.text}</p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section signature">
          <div className="signature-grid">
            <Reveal>
              <div className="signature-copy">
                <p className="kicker">Waarom YUS</p>
                <h2>Goed werk voelt niet gehaast. Het voelt beheerst.</h2>
                <p>
                  Een sterke afwerking begint met duidelijke keuzes, een nette werkwijze
                  en iemand die ook op details let wanneer de klus bijna klaar is.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="principles-card">
                {principles.map((item) => (
                  <div key={item}>
                    <Check size={18} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="section showcases" id="werk">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">Werk</p>
              <h2>Resultaten die de prijs beter uitleggen dan tekst ooit kan.</h2>
              <p>
                Wie een premium afwerking zoekt, wil bewijs zien. Daarom staat het echte
                werk hier centraal, niet alleen de belofte.
              </p>
            </div>
          </Reveal>

          <div className="showcase-list">
            {showcases.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="showcase-row">
                  <div className="showcase-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="showcase-copy">
                    <p className="showcase-eyebrow">{item.eyebrow}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section dark-quote">
          <Reveal>
            <div className="dark-quote-shell">
              <p className="kicker">Kwaliteit</p>
              <blockquote>
                Een woning hoeft niet groter te zijn om meer indruk te maken.
                De afwerking doet dat werk al.
              </blockquote>
            </div>
          </Reveal>
        </section>

        <section className="section process" id="werkwijze">
          <Reveal>
            <div className="section-head">
              <p className="kicker">Werkwijze</p>
              <h2>Een traject dat rustig voelt van aanvraag tot oplevering.</h2>
              <p>
                Premium werk gaat niet alleen over het eindresultaat. Ook het proces moet
                overzichtelijk, netjes en professioneel aanvoelen.
              </p>
            </div>
          </Reveal>

          <div className="process-grid">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.05}>
                <article className="process-card">
                  <strong>{step.number}</strong>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section testimonial">
          <Reveal>
            <div className="testimonial-card">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote>
                Duidelijk in communicatie, netjes in uitvoering en zichtbaar sterk in het
                eindresultaat. Precies hoe je wilt dat een klusbedrijf werkt.
              </blockquote>
              <p>Particuliere klant - Utrecht</p>
            </div>
          </Reveal>
        </section>

        <section className="section instagram-section">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">Instagram</p>
              <h2>Meer werk zien, direct uit de praktijk.</h2>
              <p>
                Voor wie nog meer opleveringen, tussenstappen en echte projecten wil zien,
                staat hier de dagelijkse stroom uit het werkveld.
              </p>
            </div>
          </Reveal>
          <behold-widget feed-id="WemjYi2rgmEWiMXnbiEi"></behold-widget>
        </section>

        <section className="section quote-section" id="offerte">
          <div className="quote-grid">
            <Reveal>
              <div className="quote-copy">
                <p className="kicker">Offerte aanvragen</p>
                <h2>Vertel kort wat er moet gebeuren. Wij maken het concreet.</h2>
                <p>
                  Een paar duidelijke regels zijn genoeg om te starten. Fotos kunnen daarna
                  eenvoudig via WhatsApp worden doorgestuurd.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <form
                className="quote-form"
                action={`mailto:${email}`}
                method="post"
                encType="text/plain"
              >
                <input name="naam" placeholder="Naam" required />
                <input name="telefoon" placeholder="Telefoonnummer" required />
                <input name="email" type="email" placeholder="E-mail" />
                <input name="plaats" placeholder="Plaats of regio" />
                <select name="dienst" defaultValue="">
                  <option value="" disabled>
                    Dienst kiezen
                  </option>
                  <option>Stucwerk</option>
                  <option>Schilderwerk</option>
                  <option>Timmerwerk</option>
                  <option>Vloerverwarming</option>
                  <option>Renovatie</option>
                </select>
                <textarea
                  name="bericht"
                  rows="5"
                  placeholder="Omschrijf de klus kort"
                />
                <button className="button dark" type="submit">
                  Verstuur aanvraag <ArrowRight size={17} />
                </button>
              </form>
            </Reveal>
          </div>
        </section>

        <section className="section faq-section">
          <Reveal>
            <div className="section-head centered">
              <p className="kicker">FAQ</p>
              <h2>Goed om te weten voordat we starten.</h2>
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

        <section className="section contact-strip" id="contact">
          <div className="contact-shell">
            <div>
              <p className="kicker">Contact</p>
              <h2>Klaar om de ruimte zichtbaar beter af te werken?</h2>
            </div>

            <div className="contact-links">
              <a href={`tel:${phone.replaceAll(" ", "")}`}>
                <Phone size={17} /> {phone}
              </a>
              <a href={whatsapp}>
                <MessageCircle size={17} /> WhatsApp
              </a>
              <a href={`mailto:${email}`}>
                <Mail size={17} /> {email}
              </a>
              <span>
                <MapPin size={17} /> Nederland
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        <span>Stucwerk, schilderwerk, timmerwerk en vloerverwarming</span>
        <span>Copyright 2026 YUS Klussenbedrijf</span>
      </footer>

      <div className="mobile-cta">
        <a href={whatsapp}>
          <MessageCircle size={17} /> WhatsApp
        </a>
        <a href="#offerte">Offerte</a>
      </div>
    </>
  );
}
