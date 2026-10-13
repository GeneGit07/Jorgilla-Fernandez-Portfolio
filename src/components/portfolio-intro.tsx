"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";

export function PortfolioIntro({ children }: { children: ReactNode }) {
  const [isIntroVisible, setIsIntroVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    if (!isIntroVisible) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isIntroVisible]);

  function enterPortfolio() {
    if (isLeaving) return;

    setIsLeaving(true);
    setHasEntered(true);
    const transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 720;
    window.setTimeout(() => setIsIntroVisible(false), transitionDuration);
  }

  return (
    <>
      {isIntroVisible && (
        <section
          className={`portfolio-intro${isLeaving ? " is-leaving" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="intro-title"
        >
          <div className="portfolio-intro-copy">
            <div className="intro-brand">
              <span className="intro-monogram">JF</span>
              <span>TOURISM &amp; HOSPITALITY</span>
            </div>

            <div className="intro-main">
              <p className="intro-eyebrow"><span /> A WELCOME TO MY PORTFOLIO</p>
              <h1 id="intro-title">
                Jorgilla
                <br />
                Fernandez<span>.</span>
              </h1>
              <p className="intro-description">
                Tourism Management graduate with hands-on experience in front office operations and guest services.
              </p>
              <button className="intro-enter" type="button" onClick={enterPortfolio}>
                Enter portfolio <span aria-hidden="true">↗</span>
              </button>
            </div>

            <div className="intro-meta">
              <span>STI COLLEGE TANAUAN</span>
              <span>JET HOTEL LIPA</span>
            </div>
          </div>

          <div className="portfolio-intro-photo">
            <Image
              src="/images/jorgilla-fernandez.jpeg"
              alt="Portrait of Jorgilla Fernandez in graduation attire."
              fill
              priority
              sizes="(max-width: 650px) 100vw, 58vw"
            />
            <span className="intro-photo-index">01 <i /> HOSPITALITY &amp; GUEST CARE</span>
          </div>
        </section>
      )}

      <div
        className={`portfolio-content${hasEntered ? " is-entered" : ""}`}
        aria-hidden={!hasEntered}
        inert={!hasEntered}
      >
        {children}
      </div>
    </>
  );
}