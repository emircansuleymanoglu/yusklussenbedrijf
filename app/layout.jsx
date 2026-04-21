import "./globals.css";

export const metadata = {
  title: "Yus Klussenbedrijf | Stucwerk, schilderwerk en renovatie",
  description:
    "Professioneel klusbedrijf voor stucwerk, schilderwerk, timmerwerk, vloerverwarming en renovatie in Nederland. Vraag snel een vrijblijvende offerte aan.",
  keywords: [
    "klusbedrijf",
    "renovatie",
    "stucwerk",
    "timmerwerk",
    "onderhoud",
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
      <body>{children}</body>
    </html>
  );
}
