import "./globals.css";

export const metadata = {
  title: "Yus Klussenbedrijf | Renovatie, montage en onderhoud",
  description:
    "Professioneel klusbedrijf voor renovatie, montage, onderhoud en afwerking in Nederland. Vraag snel een vrijblijvende offerte aan.",
  keywords: [
    "klusbedrijf",
    "renovatie",
    "montage",
    "onderhoud",
    "schilderwerk",
    "badkamer renovatie",
    "keuken montage",
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
      <body>{children}</body>
    </html>
  );
}
