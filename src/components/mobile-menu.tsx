"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Selected work", href: "#work" },
  { label: "Ways to work together", href: "#ways" },
  { label: "Kind words", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function MobileMenu({ onDetailPage = false }: { onDetailPage?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const hrefFor = (href: string) => onDetailPage ? `/${href}` : href;

  return (
    <div className="mobile-menu">
      <button className="mobile-menu-toggle" type="button" aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>
        <span className={`menu-icon${isOpen ? " is-open" : ""}`} aria-hidden="true"><i /><i /></span>
        <span>{isOpen ? "Close" : "Menu"}</span>
      </button>
      {isOpen && <nav className="mobile-menu-panel" id="mobile-navigation" aria-label="Mobile navigation">
        {links.map((link, index) => <Link href={hrefFor(link.href)} key={link.href} onClick={() => setIsOpen(false)}><span>{String(index + 1).padStart(2, "0")}</span>{link.label}<b aria-hidden="true">↗</b></Link>)}
      </nav>}
    </div>
  );
}
