import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Yus Klussenbedrijf | Premium Stucwerk, Schilderwerk en Renovatie",
  description:
    "Professioneel klusbedrijf voor stucwerk, schilderwerk, timmerwerk, vloerverwarming en elektrotechniek in Nederland. Vraag snel een vrijblijvende offerte aan.",
  keywords: [
    "klusbedrijf",
    "renovatie",
    "stucwerk",
    "timmerwerk",
    "elektrotechniek",
    "schilderwerk",
    "vloerverwarming",
    "badkamer renovatie",
  ],
  openGraph: {
    title: "Yus Klussenbedrijf",
    description:
      "Vakmanschap, duidelijke afspraken en nette oplevering voor woningen, verhuurpanden en bedrijven.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>
        <header className="site-header">
          <Link className="brand" href="/" aria-label="YUS Klussenbedrijf">
            <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
          </Link>

          <nav aria-label="Hoofdnavigatie">
            <Link href="/over-ons">Over Ons</Link>
            <Link href="/#diensten">Diensten</Link>
            <Link href="/#werk">Werk</Link>
            <Link href="/#contact">Contact</Link>
          </nav>

          <Link className="nav-button" href="/#offerte">
            Offerte aanvragen
          </Link>
        </header>

        {children}

        <footer className="site-footer">
          <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
          <span>Stucwerk, schilderwerk, timmerwerk, vloerverwarming en elektra</span>
          <span>Copyright 2026 YUS Klussenbedrijf</span>
        </footer>

        <div className="mobile-cta">
          <a href="https://wa.me/31621547256">WhatsApp</a>
          <Link href="/#offerte">Offerte</Link>
        </div>
      </body>
    </html>
  );
}
