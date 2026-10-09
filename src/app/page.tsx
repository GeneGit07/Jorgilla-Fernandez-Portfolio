import Link from "next/link";
import { projects, questions, services, steps, supportOptions } from "@/data/portfolio";

function DraftPrompt({ label = "What to add later", copy }: { label?: string; copy: string }) {
  return <details className="draft-prompt"><summary>{label}<span aria-hidden="true">＋</span></summary><p>{copy}</p></details>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Elaina Madrid, home"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a><a href="#services">Services</a><a href="#work">Selected work</a><a href="#ways">Ways to work</a><a href="#testimonials">Kind words</a><a href="#process">Process</a>
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
          <DraftPrompt label="Personalize the introduction" copy="Send the tagline you want to use, the type of clients you want to attract, and an optional portrait photo. A portrait is optional; the abstract artwork can stay." />
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
          <div className="about-copy"><p className="about-intro">Hello, I’m Elaina Julia Madrid.</p><p>I’m a virtual assistant offering thoughtful support for the work that happens behind the scenes. My approach is simple: listen closely, care about the details, and make the day feel more manageable.</p><p>Whether you need help keeping things organized or a steady hand with the follow-through, we can shape support around your priorities.</p><a className="text-link" href="#contact">Tell me what you need <span aria-hidden="true">↗</span></a><DraftPrompt copy="Send a short bio in your own words: your background, strengths, relevant experience, and the tone you want. If you want a photo here, attach a portrait you have permission to publish." /></div>
        </div>
        <div className="about-signature"><span className="signature-line" /> Thoughtfully, <em>Elaina</em></div>
      </section>

      <section className="services" id="services">
        <div className="section-shell services-shell">
          <div className="section-label"><span>02</span> THE SUPPORT</div>
          <div className="services-heading"><h2>Space for your<br /><em>best work.</em></h2><p>Practical, flexible support for the moving parts of your business. These are example service areas to tailor to Elaina’s actual offerings.</p></div>
          <div className="service-list">{services.map((service) => <Link className="service-row" href={`/services/${service.slug}`} key={service.number}><div className="service-number">{service.number}</div><div className="service-main"><h3>{service.title}</h3><p>{service.text}</p></div><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div>
          <p className="fine-print">EXAMPLE OFFERINGS · SERVICES CAN BE REFINED TO MATCH YOUR EXPERIENCE AND CLIENT NEEDS</p>
        </div>
      </section>

      <section className="work section-shell" id="work">
        <div className="section-label"><span>03</span> SELECTED WORK</div>
        <div className="work-heading"><h2>Care in the<br /><em>little things.</em></h2><p>Good support is often felt in the details. Here are sample project directions; replace these with real work when ready.</p></div>
        <div className="work-grid">{projects.map((item) => <Link className="work-card" href={`/work/${item.slug}`} key={item.number} aria-label={`View case study draft: ${item.title}`}><div className={`work-art ${item.tone}`}><span className="work-art-number">{item.mark}</span><span className="work-art-orbit" /><span className="work-art-shape" /><span className="work-art-caption">SAMPLE<br />PROJECT</span></div><div className="work-meta"><div><span className="work-category">{item.category}</span><h3>{item.title}</h3></div><span className="work-arrow" aria-hidden="true">↗</span></div><p className="work-note">{item.note}</p></Link>)}</div>
      </section>

      <section className="process" id="process"><div className="section-shell process-shell">
        <div className="section-label"><span>04</span> A SIMPLE PROCESS</div>
        <div className="process-heading"><h2>Easy to begin.<br /><em>Clear as we go.</em></h2><p>A good working relationship starts with a clear conversation and grows from there.</p></div>
        <div className="steps">{steps.map((step) => <article className="step" key={step.number}><span className="step-number">{step.number}</span><div className="step-line" /><h3>{step.title}</h3><p>{step.text}</p><DraftPrompt label="Personalize this step" copy="Tell me how you actually onboard, communicate, and deliver support so this process describes your real workflow." /></article>)}</div>
      </div></section>

      <section className="fit section-shell" id="fit">
        <div className="section-label"><span>05</span> THE RIGHT FIT</div>
        <div className="fit-grid"><h2>Good work,<br /><em>good people.</em></h2><div className="fit-copy"><p>Who do you most enjoy supporting? Add your preferred clients, industries, or business types here.</p><div className="placeholder-box"><span>YOUR IDEAL CLIENTS</span><strong>Add your client types here</strong><small>PLACEHOLDER · REPLACE WITH YOUR FOCUS</small></div><DraftPrompt copy="Share the kinds of people, businesses, industries, or team sizes you want to work with. Also mention any clients you do not want to target." /></div></div>
      </section>

      <section className="tools" id="tools"><div className="section-shell tools-shell">
        <div className="section-label"><span>06</span> MY TOOLKIT</div><div className="tools-content"><h2>Tools I use<br /><em>with care.</em></h2><div><p>Add the platforms and software you genuinely use and feel confident supporting.</p><div className="tool-chips"><details><summary>ADD A TOOL</summary><small>Send the tool name and what you use it for.</small></details><details><summary>ADD A TOOL</summary><small>Send the tool name and what you use it for.</small></details><details><summary>ADD A TOOL</summary><small>Send the tool name and what you use it for.</small></details><details><summary>ADD A TOOL</summary><small>Send the tool name and what you use it for.</small></details></div><small className="tools-note">PLACEHOLDERS · ONLY LIST TOOLS YOU KNOW</small></div></div>
      </div></section>

      <section className="ways section-shell" id="ways">
        <div className="section-label"><span>07</span> WAYS TO WORK TOGETHER</div><div className="ways-heading"><h2>Support that<br /><em>fits your needs.</em></h2><p>Choose the structure that matches how you want to work. Add your confirmed details and pricing when ready.</p></div>
        <div className="ways-grid">{supportOptions.map((option) => <Link className="way-card" href={`/ways/${option.slug}`} key={option.label}><span>{option.label}</span><h3>{option.title}</h3><p>{option.detail}</p><i>VIEW DETAILS <b aria-hidden="true">↗</b></i></Link>)}</div>
        <p className="fine-print">EXAMPLE ENGAGEMENT TYPES · CONFIRM YOUR OFFERINGS AND RATES BEFORE PUBLISHING</p>
      </section>

      <section className="testimonials" id="testimonials"><div className="section-shell testimonial-shell">
        <div className="section-label"><span>08</span> KIND WORDS</div><div className="testimonial-content"><span className="quote-mark" aria-hidden="true">“</span><p>Your approved client testimonial will go here.</p><div className="testimonial-credit">CLIENT NAME <span>·</span> ROLE OR BUSINESS</div><small>PLACEHOLDER · REPLACE WITH A REAL QUOTE AFTER RECEIVING PERMISSION</small><DraftPrompt label="Add a testimonial" copy="Send the exact client quote, the client’s preferred name and role, and confirmation that they approved publication. A headshot or logo is optional—attach it only if you have permission to use it." /></div>
      </div></section>

      <section className="faq section-shell" id="faq">
        <div className="section-label"><span>09</span> GOOD TO KNOW</div>
        <div className="faq-grid"><h2>A few things<br /><em>you may wonder.</em></h2><div className="faq-list">{questions.map((question) => <details key={question.q}><summary>{question.q}<span aria-hidden="true">＋</span></summary><p>{question.a}</p></details>)}<DraftPrompt label="Add or change FAQs" copy="Send the questions clients actually ask and your accurate answers. We can add, remove, or reorder the FAQ items." /></div></div>
      </section>

      <section className="contact" id="contact"><div className="contact-inner">
        <div className="section-label"><span>10</span> THE NEXT STEP</div><div className="contact-content"><h2>Let’s make room<br />for <em>what matters.</em></h2><div className="contact-copy"><p>Have a few things you’d love to hand over? Tell me a little about them. We can start with a conversation.</p><a className="button button-cream" href="mailto:hello@example.com?subject=Virtual%20assistant%20inquiry">Start a conversation <span aria-hidden="true">↗</span></a><span className="contact-placeholder">PLACEHOLDER EMAIL · UPDATE BEFORE PUBLISHING</span></div></div><span className="contact-decoration" aria-hidden="true">E.</span>
        <form className="inquiry-form" action="mailto:hello@example.com" method="post" encType="text/plain">
          <div className="form-heading"><h3>Send a little note</h3><p>Share a few details so I know how best to help.</p></div>
          <div className="form-grid"><label>Your name<input name="name" autoComplete="name" placeholder="Name" required /></label><label>Your email<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required /></label><label className="form-wide">What would you like support with?<textarea name="message" rows={4} placeholder="A little about your business and what’s on your plate…" required /></label></div>
          <div className="form-submit"><button className="button button-cream" type="submit">Prepare inquiry <span aria-hidden="true">↗</span></button><small>STARTER FORM · REPLACE THE PLACEHOLDER EMAIL BEFORE PUBLISHING</small></div>
          <DraftPrompt label="Customize this form later" copy="Tell me which questions you want to ask, the email address that should receive inquiries, and whether you want a hosted form service instead of opening the visitor’s email app." />
        </form>
      </div></section>

      <footer className="footer"><a className="brand footer-brand" href="#home" aria-label="Elaina Madrid, back to top"><span className="brand-monogram">E<span>.</span></span><span className="brand-name">ELAINA MADRID<span>VIRTUAL ASSISTANT</span></span></a><p>Thoughtful support, with care.</p><a className="footer-top" href="#home">BACK TO TOP ↑</a><div className="footer-legal"><span>© {new Date().getFullYear()} ELAINA JULIA MADRID</span><span>MADE WITH CARE</span></div></footer>
    </main>
  );
}
