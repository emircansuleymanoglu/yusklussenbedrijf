"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useEffect, useRef } from "react";

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

const INSTAGRAM_URL = "https://www.instagram.com/yus.klussenbedrijf/";
const HANDLE = "@yus.klussenbedrijf";

/*
  ─────────────────────────────────────────────────────────────────
  HOE INSTAGRAM-POSTS OP DEZE PAGINA LADEN (gratis, 5 min. werk)
  ─────────────────────────────────────────────────────────────────
  1. Ga naar https://behold.so en maak een gratis account aan.
  2. Verbind je Instagram Business-account (@yus.klussenbedrijf).
  3. Kopieer je "Feed ID" (b.v. "abc123XYZ") uit het Behold-dashboard.
  4. Vervang de waarde van BEHOLD_FEED_ID hieronder door jouw Feed ID.
  ─────────────────────────────────────────────────────────────────
*/
const BEHOLD_FEED_ID = "WemjYi2rgmEWiMXnbiEi";

function BeholdWidget() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!BEHOLD_FEED_ID || !containerRef.current) return;

    // Inject the Behold script once
    if (!document.getElementById("behold-script")) {
      const s = document.createElement("script");
      s.id = "behold-script";
      s.src = "https://w.behold.so/widget.js";
      s.type = "module";
      document.head.appendChild(s);
    }

    // Inject the custom element
    containerRef.current.innerHTML = `<behold-widget feed-id="${BEHOLD_FEED_ID}"></behold-widget>`;
  }, []);

  if (!BEHOLD_FEED_ID) return null;

  return <div ref={containerRef} className="ig-feed-wrapper" />;
}

function Placeholder() {
  return (
    <motion.div
      className="ig-placeholder"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="ig-placeholder-icon">
        <InstagramIcon size={40} />
      </div>
      <h3>Volg onze projecten live</h3>
      <p>
        Stucwerk, schilderwerk, timmerwerk en vloerverwarming — alles direct
        zichtbaar op ons Instagram-profiel.
      </p>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="button instagram ig-open-btn"
      >
        <InstagramIcon size={18} /> Bekijk {HANDLE} op Instagram{" "}
        <ExternalLink size={15} />
      </a>
    </motion.div>
  );
}

export default function InstagramPage() {
  return (
    <>
      {/* ── Header ── */}
      <header className="site-header">
        <a className="brand" href="/" aria-label="YUS Klussenbedrijf">
          <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        </a>
        <nav aria-label="Hoofdnavigatie">
          <a href="/#diensten">Diensten</a>
          <a href="/#kwaliteit">Kwaliteit</a>
          <a href="/#proces">Proces</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="nav-button" href="/#offerte">
          Offerte aanvragen
        </a>
      </header>

      <main className="ig-main">
        {/* ── Back link ── */}
        <motion.a
          href="/"
          className="ig-back"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45 }}
        >
          <ArrowLeft size={16} /> Terug naar home
        </motion.a>

        {/* ── Profile hero ── */}
        <motion.div
          className="ig-profile"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="ig-avatar">
            <InstagramIcon size={36} />
          </div>
          <div className="ig-profile-info">
            <h1 className="ig-handle">{HANDLE}</h1>
            <p className="ig-bio">
              Stucwerk &middot; Schilderwerk &middot; Timmerwerk &middot;
              Vloerverwarming
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="button instagram"
          >
            <InstagramIcon size={16} /> Volgen op Instagram
          </a>
        </motion.div>

        {/* ── Feed ── */}
        <div className="ig-feed-wrapper">
          {BEHOLD_FEED_ID ? <BeholdWidget /> : <Placeholder />}
        </div>
      </main>

      <footer className="site-footer" style={{ marginTop: "60px" }}>
        <img src="/yus-logo-cropped.png" alt="YUS Klussenbedrijf" />
        <span>Stucwerk - Schilderwerk - Timmerwerk - Vloerverwarming</span>
        <span>Copyright 2026</span>
      </footer>
    </>
  );
}
