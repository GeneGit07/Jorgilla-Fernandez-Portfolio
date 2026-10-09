const services = [
  { number: "01", title: "Executive support", text: "A little more order around your day, from inbox and calendar organization to thoughtful meeting preparation.", items: ["Inbox organization", "Calendar coordination", "Meeting preparation"] },
  { number: "02", title: "Operations & projects", text: "Keep the details moving with clear coordination, careful follow-through, and useful systems.", items: ["Project tracking", "Research", "Process documentation"] },
  { number: "03", title: "Client experience", text: "Make every touchpoint feel considered with responsive communication and reliable admin support.", items: ["Client communications", "CRM updates", "Document preparation"] },
];

const examples = [
  { number: "01", category: "SAMPLE CONCEPT · OPERATIONS", title: "A calmer week,\nby design.", note: "Example project — replace with a real client story.", tone: "sand", mark: "01" },
  { number: "02", category: "SAMPLE CONCEPT · CLIENT CARE", title: "The details\nthat delight.", note: "Example project — replace with a real client story.", tone: "rose", mark: "02" },
  { number: "03", category: "SAMPLE CONCEPT · ADMIN SUPPORT", title: "Room for the\nbig picture.", note: "Example project — replace with a real client story.", tone: "lilac", mark: "03" },
];

const steps = [
  { number: "01", title: "Start with a conversation", text: "Share what is taking up your time and what kind of support would make a difference." },
  { number: "02", title: "Shape the support", text: "Together, clarify the priorities, tools, and working rhythm that suit your needs." },
  { number: "03", title: "Make room to focus", text: "Settle into a thoughtful routine, with clear communication and steady follow-through." },
];

const questions = [
  { q: "What can I delegate?", a: "The service areas above are starting points. We can discuss your recurring admin, coordination, and client support needs and decide what fits." },
  { q: "How do we get started?", a: "Send a note with a little context about your business and what you would like help with. We can take it from there." },
  { q: "Are these work samples real client projects?", a: "No. The portfolio cards are clearly marked sample concepts because no client work or case studies have been provided yet." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Elaina Madrid, home"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#work">Selected work</a><a href="#process">Process</a>
          <a className="nav-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="mobile-contact" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-rule" /> THOUGHTFUL VIRTUAL ASSISTANCE</div>
          <h1 id="hero-title">More ease<br />in the <em>everyday.</em></h1>
          <p className="hero-lede">Considered support for the details behind your business, so you can give your best attention to what matters most.</p>
          <div className="hero-links"><a className="button button-plum" href="#contact">Explore working together <span aria-hidden="true">↗</span></a><a className="underlined-link" href="#services">Discover the support <span aria-hidden="true">↓</span></a></div>
          <div className="hero-note"><span className="note-star" aria-hidden="true">✳</span> A CALM, CAPABLE PARTNER BEHIND THE SCENES</div>
        </div>
        <div className="hero-visual" aria-label="Abstract editorial illustration in warm rose and plum tones" role="img">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="visual-sun" /><div className="visual-arch"><div className="arch-inner" /></div>
          <div className="visual-vase"><i /><i /><i /><i /><b /></div>
          <div className="visual-stone stone-one" /><div className="visual-stone stone-two" />
          <div className="visual-caption"><span>THE ART OF</span><strong>making room</strong><i>✳</i></div>
          <span className="visual-index">EJ — 01</span>
        </div>
        <div className="hero-bottom"><span>INDEPENDENT VIRTUAL ASSISTANT</span><span>SCROLL TO EXPLORE <b aria-hidden="true">↓</b></span></div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label"><span>01</span> A LITTLE ABOUT ME</div>
        <div className="about-grid">
          <h2>Good work needs<br />a little <em>room.</em></h2>
          <div className="about-copy"><p className="about-intro">Hello, I’m Elaina Julia Madrid.</p><p>I’m a virtual assistant offering thoughtful support for the work that happens behind the scenes. My approach is simple: listen closely, care about the details, and make the day feel more manageable.</p><p>Whether you need help keeping things organized or a steady hand with the follow-through, we can shape support around your priorities.</p><a className="text-link" href="#contact">Tell me what you need <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="about-signature"><span className="signature-line" /> Thoughtfully, <em>Elaina</em></div>
      </section>

      <section className="services" id="services">
        <div className="section-shell services-shell">
          <div className="section-label"><span>02</span> THE SUPPORT</div>
          <div className="services-heading"><h2>Space for your<br /><em>best work.</em></h2><p>Practical, flexible support for the moving parts of your business. These are example service areas to tailor to Elaina’s actual offerings.</p></div>
          <div className="service-list">{services.map((service) => <article className="service-row" key={service.number}><div className="service-number">{service.number}</div><div className="service-main"><h3>{service.title}</h3><p>{service.text}</p></div><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><span className="service-arrow" aria-hidden="true">↗</span></article>)}</div>
          <p className="fine-print">EXAMPLE OFFERINGS · SERVICES CAN BE REFINED TO MATCH YOUR EXPERIENCE AND CLIENT NEEDS</p>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>03</span> SELECTED WORK</div>
        <div className="work-heading"><h2>Care in the<br /><em>little things.</em></h2><p>Good support is often felt in the details. Here are sample project directions; replace these with real work when ready.</p></div>
        <div className="work-grid">{examples.map((item) => <article className="work-card" key={item.number}><div className={`work-art ${item.tone}`}><span className="work-art-number">{item.mark}</span><span className="work-art-orbit" /><span className="work-art-shape" /><span className="work-art-caption">SAMPLE<br />PROJECT</span></div><div className="work-meta"><div><span className="work-category">{item.category}</span><h3>{item.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h3></div><span className="work-arrow" aria-hidden="true">↗</span></div><p className="work-note">{item.note}</p></article>)}</div>
      </section>

      <section className="process" id="process"><div className="section-shell process-shell">
        <div className="section-label"><span>04</span> A SIMPLE PROCESS</div>
        <div className="process-heading"><h2>Easy to begin.<br /><em>Clear as we go.</em></h2><p>A good working relationship starts with a clear conversation and grows from there.</p></div>
        <div className="steps">{steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div className="step-line" /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div></section>

      <section className="faq section-shell" id="faq">
        <div className="section-label"><span>05</span> GOOD TO KNOW</div>
        <div className="faq-grid"><h2>A few things<br /><em>you may wonder.</em></h2><div className="faq-list">{questions.map((question) => <details key={question.q}><summary>{question.q}<span aria-hidden="true">＋</span></summary><p>{question.a}</p></details>)}</div></div>
      </section>

      <section className="contact" id="contact"><div className="contact-inner">
        <div className="section-label"><span>06</span> THE NEXT STEP</div><div className="contact-content"><h2>Let’s make room<br />for <em>what matters.</em></h2><div className="contact-copy"><p>Have a few things you’d love to hand over? Tell me a little about them. We can start with a conversation.</p><a className="button button-cream" href="mailto:hello@example.com?subject=Virtual%20assistant%20inquiry">Start a conversation <span aria-hidden="true">↗</span></a><span className="contact-placeholder">PLACEHOLDER EMAIL · UPDATE BEFORE PUBLISHING</span></div></div><span className="contact-decoration" aria-hidden="true">E.</span>
      </div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home" aria-label="Elaina Madrid, back to top"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></a><p>Thoughtful support, with care.</p><a className="footer-top" href="#home">BACK TO TOP ↑</a><div className="footer-legal"><span>© {new Date().getFullYear()} ELAINA JULIA MADRID</span><span>MADE WITH CARE</span></div></footer>
    </main>
  );
}
