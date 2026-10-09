const services = [
  {
    number: "01",
    title: "Admin & operations",
    description: "Document formatting, data entry, file organization, online research, and everyday admin tasks.",
  },
  {
    number: "02",
    title: "Inbox & calendar",
    description: "Email organization, meeting scheduling, calendar updates, and appointment reminders.",
  },
  {
    number: "03",
    title: "Social media support",
    description: "Content scheduling, caption formatting, basic engagement, and content calendar upkeep.",
  },
];

const steps = [
  ["01 / HELLO", "We connect", "Tell me what’s taking up your time and where you need support."],
  ["02 / PLAN", "We make a plan", "We agree on priorities, tools, timing, and how we’ll communicate."],
  ["03 / BEGIN", "I get to work", "I take care of the agreed tasks and keep you updated along the way."],
  ["04 / REFINE", "We adjust", "As your needs change, we shape the support to fit your workflow."],
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Elaina Julia Madrid home">EJM<span>.</span></a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Sample work</a>
          <a className="nav-cta" href="#contact">Let’s connect <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <main>
        <section className="hero page-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow">Virtual assistant · Remote support</p>
            <h1>More room to do what you <em>do best.</em></h1>
            <p className="intro">Hello, I’m Elaina Julia Madrid. I help busy business owners stay organized, keep daily tasks moving, and make more room for their best work.</p>
            <div className="button-row">
              <a className="button button-primary" href="#contact">Work with me <span aria-hidden="true">↗</span></a>
              <a className="button button-secondary" href="#services">Explore services</a>
            </div>
            <p className="hero-note">A thoughtful extra set of hands for your business.</p>
          </div>
          <div className="portrait" aria-label="Decorative monogram illustration">
            <div className="portrait-orbit"><span>E</span></div>
            <div className="portrait-caption">Elaina Julia Madrid</div>
          </div>
        </section>

        <div className="service-strip"><div className="page-shell"><strong>HERE TO MAKE YOUR WORKDAY LIGHTER</strong><span>Inbox & calendar</span><span>Admin support</span><span>Social media assistance</span><span>Reliable follow-through</span></div></div>

        <section className="section page-shell about-grid" id="about">
          <aside className="quote-card"><p>“Good support gives great ideas room to grow.”</p><span>A little about my approach</span></aside>
          <div className="about-copy"><p className="eyebrow">Meet your virtual assistant</p><h2>Organized, dependable, and on your team.</h2><p>I’m a detail-oriented virtual assistant who enjoys bringing calm and clarity to a busy workday. From keeping calendars up to date to taking care of recurring admin tasks, I help make the behind-the-scenes run smoothly.</p><p>My goal is simple: understand how you work, communicate clearly, and make it easier to focus on the parts of your business that need you most.</p><ul className="check-list"><li>Clear communication</li><li>Careful attention to detail</li><li>Flexible remote support</li><li>Reliable task follow-through</li></ul></div>
        </section>

        <section className="section services-section" id="services"><div className="page-shell"><div className="section-heading"><p className="eyebrow">How I can help</p><h2>Practical support, right where you need it.</h2><p>Flexible virtual assistance for the everyday details that keep your business moving.</p></div><div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><span className="service-arrow" aria-hidden="true">↗</span><h3>{service.title}</h3><p>{service.description}</p></article>)}</div></div></section>

        <section className="section page-shell"><div className="section-heading"><p className="eyebrow">Simple from day one</p><h2>A smooth way to get started.</h2><p>Friendly, straightforward support shaped around your priorities.</p></div><div className="steps-grid">{steps.map(([number, title, description]) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div></section>

        <section className="section page-shell" id="work"><div className="sample-project"><div className="task-board" aria-label="Example weekly task tracker"><div className="board-heading"><strong>WEEKLY WORKFLOW</strong><span>EXAMPLE TASK BOARD</span></div><div className="task-row"><span>Organize client inbox</span><span className="status">Complete</span></div><div className="task-row"><span>Schedule team check-in</span><span className="status">Complete</span></div><div className="task-row"><span>Prepare content calendar</span><span className="status">In progress</span></div><div className="task-row"><span>Update project files</span><span className="status">Next up</span></div></div><div className="project-copy"><p className="eyebrow">A sample project</p><h2>A little structure goes a long way.</h2><p>Here’s an example of how I could organize recurring weekly tasks into a simple tracker, making priorities visible and handoffs easier to follow.</p><p className="fine-print">Illustrative portfolio example. Replace with a real project and results when available.</p></div></div></section>

        <section className="contact-section" id="contact"><div className="page-shell contact-grid"><div><p className="eyebrow">Ready for a lighter workday?</p><h2>Let’s make your to-do list feel doable.</h2><p>Share a little about what you need help with, and we can explore whether my virtual assistant services are a good fit.</p></div><div className="contact-details"><span>Email me</span><a href="mailto:hello@example.com">hello@example.com ↗</a><span>Availability</span><p>Open to new clients</p><a className="button button-light" href="mailto:hello@example.com?subject=Virtual%20Assistant%20Inquiry">Start a conversation <span aria-hidden="true">↗</span></a></div></div></section>
      </main>

      <footer className="site-footer"><span>© 2026 Elaina Julia Madrid</span><span>Virtual assistant portfolio · Sample content for editing</span></footer>
    </>
  );
}
