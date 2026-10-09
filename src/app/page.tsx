const services = [
  {
    number: "01",
    title: "The day-to-day",
    description: "Inbox and calendar care, travel details, and the little logistics that keep your week moving.",
    tags: ["Inbox support", "Calendar care", "Travel planning"],
    icon: "✳",
  },
  {
    number: "02",
    title: "The moving parts",
    description: "Thoughtful coordination for projects, launches, and all the follow-ups in between.",
    tags: ["Project coordination", "Research", "Client care"],
    icon: "↗",
  },
  {
    number: "03",
    title: "The details",
    description: "Clean, considered support for the behind-the-scenes work your business depends on.",
    tags: ["Document formatting", "Data entry", "Process support"],
    icon: "⌘",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Elaina Madrid home">
          <span className="wordmark-mark">E</span>
          <span>Elaina Madrid<span className="wordmark-dot">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#about">A little about me</a>
          <a href="#services">What I can take off your plate</a>
          <a className="nav-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
        </nav>
        <a className="mobile-cta" href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> YOUR THOUGHTFUL RIGHT HAND</div>
          <h1 id="hero-title">A little more<br />space to do your<br /><em>best work.</em></h1>
          <p className="hero-description">I’m Elaina, a virtual assistant who brings a calm head, a thoughtful eye, and a little more breathing room to your busy workday.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Let’s make room <span aria-hidden="true">↗</span></a>
            <a className="text-link" href="#services">See how I can help <span aria-hidden="true">↓</span></a>
          </div>
          <div className="availability"><span className="availability-dot" /> TAKING ON NEW CLIENTS <span className="availability-divider">·</span> REMOTE, WORLDWIDE</div>
        </div>

        <div className="hero-art" aria-label="Editorial-style illustration of a calm, organized workspace" role="img">
          <div className="art-halo" />
          <div className="art-sun" />
          <div className="art-plant plant-one"><i /><i /><i /><i /><b /></div>
          <div className="art-plant plant-two"><i /><i /><i /><b /></div>
          <div className="art-vase"><span /></div>
          <div className="art-table"><div className="art-book book-one" /><div className="art-book book-two" /><div className="art-mug"><span /></div></div>
          <div className="art-note"><span>room to</span><strong>focus</strong><i>✳</i></div>
          <div className="art-caption"><span className="caption-star">✳</span><span>GOOD WORK<br />STARTS HERE</span></div>
          <div className="art-frame" />
        </div>
        <div className="hero-bottom"><span>01 — THE INTRODUCTION</span><span>SCROLL A LITTLE</span><span>↓</span></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="section-kicker">A NOTE FROM ME <span>✳</span></div>
        <div className="intro-content">
          <h2>Good work deserves<br />a <em>clear head.</em></h2>
          <div className="intro-text">
            <p className="intro-lead">You don’t have to hold every little thing on your own.</p>
            <p>I’m Elaina Julia Madrid, a virtual assistant here to make the behind-the-scenes feel a little lighter. I bring care to the details, steadiness to the busy days, and room for you to focus on what you do best.</p>
            <p>Think of me as the person who remembers the follow-up, finds the open hour, and makes the moving parts feel manageable again.</p>
            <a className="text-link intro-link" href="#contact">A little more about working together <span aria-hidden="true">↗</span></a>
          </div>
        </div>
        <div className="intro-signoff">Here for the details, <span>Elaina</span> <b>♡</b></div>
      </section>

      <section className="services" id="services">
        <div className="services-inner">
          <div className="services-heading">
            <div><div className="section-kicker">THE PRACTICAL MAGIC <span>✳</span></div><h2>Consider it<br /><em>taken care of.</em></h2></div>
            <p>Considered support for the work that keeps your work moving. We’ll shape the details around what you need most.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top"><span>{service.number} / SUPPORT</span><span className="service-icon" aria-hidden="true">{service.icon}</span></div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              </article>
            ))}
          </div>
          <p className="service-footnote">The examples above are a starting point, not a fixed menu. We can make a plan around your priorities.</p>
        </div>
      </section>

      <section className="approach section-wrap">
        <div className="approach-decoration" aria-hidden="true">✳</div>
        <div className="section-kicker">HOW IT FEELS <span>✳</span></div>
        <h2>Steady support.<br /><em>More room to think.</em></h2>
        <p className="approach-copy">A thoughtful working relationship starts with listening. We’ll get clear on what’s taking up your time, find the right rhythm, and build a way of working that feels easy to come back to.</p>
        <a className="button button-outline" href="#contact">Start with a hello <span aria-hidden="true">↗</span></a>
        <div className="approach-aside">GOOD THINGS, WITH A<br />LITTLE MORE EASE <span>✳</span></div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-kicker">THE NEXT STEP <span>✳</span></div>
          <h2>Let’s make room<br />for <em>what’s next.</em></h2>
          <p>Tell me what’s on your plate. We can start with a simple conversation and see what would feel helpful.</p>
          <a className="button button-light" href="mailto:hello@example.com?subject=Let%E2%80%99s%20make%20room">Say hello <span aria-hidden="true">↗</span></a>
          <div className="contact-email-note">EMAIL ADDRESS SHOWN IS A PLACEHOLDER — UPDATE BEFORE PUBLISHING</div>
          <div className="contact-spark" aria-hidden="true">✳</div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">E</span><span>Elaina Madrid<span className="wordmark-dot">.</span></span></a>
        <span>VIRTUAL ASSISTANCE, WITH CARE.</span>
        <a href="#home" className="back-top">BACK TO TOP ↑</a>
        <span className="copyright">© 2025 ELaina Madrid <span>·</span> MADE WITH CARE</span>
      </footer>
    </main>
  );
}
