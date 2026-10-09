import Link from "next/link";
import type { ReactNode } from "react";
import { MobileMenu } from "@/components/mobile-menu";

export function DetailLayout({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return (
    <main className="detail-page">
      <header className="site-header detail-header">
        <Link className="brand" href="/" aria-label="Elaina Madrid, home"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></Link>
        <nav className="main-nav" aria-label="Main navigation"><Link href="/#about">About</Link><Link href="/#services">Services</Link><Link href="/#work">Selected work</Link><Link href="/#ways">Ways to work</Link><Link className="nav-contact" href="/#contact">Let’s talk <span aria-hidden="true">↗</span></Link></nav>
        <MobileMenu onDetailPage />
      </header>
      <section className="detail-hero">
        <div className="detail-hero-inner"><Link className="detail-back" href="/">← BACK TO PORTFOLIO</Link><p className="detail-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="detail-lede">{description}</p></div>
      </section>
      {children}
      <footer className="footer detail-footer"><Link className="brand footer-brand" href="/" aria-label="Elaina Madrid, back to portfolio"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></Link><p>Thoughtful support, with care.</p><Link className="footer-top" href="/#contact">GET IN TOUCH ↗</Link><div className="footer-legal"><span>© {new Date().getFullYear()} ELAINA JULIA MADRID</span><Link href="/">BACK TO PORTFOLIO ↑</Link></div></footer>
    </main>
  );
}

export function DraftBlock({ label, text }: { label: string; text: string }) {
  return <div className="detail-draft"><span className="detail-draft-label">{label}</span><p>{text}</p></div>;
}
