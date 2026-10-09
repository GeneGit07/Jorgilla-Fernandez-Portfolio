import Link from "next/link";
import { MobileMenu } from "@/components/mobile-menu";
import { projects, questions, services, steps, supportOptions } from "@/data/portfolio";

function DraftPrompt({ label = "What to add later", copy }: { label?: string; copy: string }) {
  return (
    <details className="draft-prompt">
      <summary>
        {label}
        <span aria-hidden="true">＋</span>
      </summary>
      <p>{copy}</p>
    </details>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jorgilla Fernandez, home">
          <span className="brand-monogram">
            J<span>.</span>
          </span>
          <span className="brand-name">
            JORGILLA FERNANDEZ
            <span>VIRTUAL ASSISTANT</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#work">Selected work</a>
          <a href="#ways">Ways to work</a>
          <a href="#testimonials">Kind words</a>
          <a href="#process">Process</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <MobileMenu />
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-rule" /> THOUGHTFUL VIRTUAL ASSISTANCE
          </div>
          <h1 id="hero-title">
            More ease
            <br />
            in the <em>everyday.</em>
          </h1>
          <p className="hero-lede">
            Considered support for the details behind your business, so you can give your best attention to what matters most.
          </p>
          <div className="hero-links">
            <a className="button button-plum" href="#contact">
              Explore working together <span aria-hidden="true">↗</span>
            </a>
            <a className="underlined-link" href="#services">
              Discover the support <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-star" aria-hidden="true">
              ✳
            </span>{" "}
            A CALM, CAPABLE PARTNER BEHIND THE SCENES
          </div>
          <DraftPrompt
            label="Personalize the introduction"
            copy="Send the tagline you want to use, the type of clients you want to attract, and an optional portrait photo. A portrait is optional; the abstract artwork can stay."
          />
        </div>

        <div className="hero-visual" aria-label="Abstract editorial illustration in warm rose and plum tones" role="img">
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />
          <div className="visual-sun" />
          <div className="visual-arch">
            <div className="arch-inner" />
          </div>
          <div className="visual-vase">
            <i />
            <i />
            <i />
            <i />
            <b />
          </div>
          <div className="visual-stone stone-one" />
          <div className="visual-stone stone-two" />
          <div className="visual-caption">
            <span>THE ART OF</span>
            <strong>making room</strong>
            <i>✳</i>
          </div>
          <span className="visual-index">JF — 01</span>
        </div>

        <div className="hero-bottom">
          <span>INDEPENDENT VIRTUAL ASSISTANT</span>
          <span>
            SCROLL TO EXPLORE <b aria-hidden="true">↓</b>
          </span>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="section-label">
          <span>01</span> A LITTLE ABOUT ME
        </div>
        <div className="about-grid">
          <h2>
            Good work needs
            <br />
            a little <em>room.</em>
          </h2>
          <div className="about-copy">
            <p className="about-intro">Hello, I’m Jorgilla Fernandez.</p>
            <p>
              I’m a virtual assistant offering thoughtful support for the work that happens behind the scenes. My approach is simple: listen closely, care about the details, and make the day feel more manageable.
            </p>
            <p>
              Whether you need help keeping things organized or a steady hand with the follow-through, we can shape support around your priorities.
            </p>
            <a className="text-link" href="#contact">
              Tell me what you need <span aria-hidden="true">↗</span>
            </a>
            <DraftPrompt
              copy="Send a short bio in your own words: your background, strengths, relevant experience, and the tone you want. If you want a photo here, attach a portrait you have permission to publish."
            />
          </div>
        </div>
        <div className="about-signature">
          <span className="signature-line" /> Thoughtfully, <em>Jorgilla</em>
        </div>
      </section>

      <section className="services" id="services">
        <div className="section-shell services-shell">
          <div className="section-label">
            <span>02</span> THE SUPPORT
          </div>
          <div className="services-heading">
            <h2>
              Space for your
              <br />
              <em>best work.</em>
            </h2>
            <p>
              Practical, flexible support for the moving parts of your business. These are example service areas to tailor to Jorgilla Fernandez’s actual offerings.
            </p>
          </div>

          <div className="service-list">
            {services.map((service) => (
              <Link className="service-row" href={`/services/${service.slug}`} key={service.number}>
                <div className="service-number">{service.number}</div>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <span className="service-arrow" aria-hidden="true">
                  ↗
                </span>
              </Link>
            ))}
          </div>

          <p className="fine-print">Tailored support for the details behind your business.</p>
        </div>
      </section>

      <section className="work" id="work">
        <div className="section-shell">
          <div className="section-label">
            <span>03</span> SELECTED WORK
          </div>
          <div className="work-heading">
            <h2>
              Calm systems,
              <br />
              <em>clear outcomes.</em>
            </h2>
            <p>Sample concepts that show the type of work and communication you might present in the future.</p>
          </div>

          <div className="work-grid">
            {projects.map((project) => (
              <Link className="work-card" href={`/work/${project.slug}`} key={project.slug}>
                <div className={`work-art ${project.tone}`} aria-hidden="true">
                  <span className="work-art-number">{project.mark}</span>
                  <span className="work-art-orbit" />
                  <span className="work-art-shape" />
                  <span className="work-art-caption">PROJECT / {project.mark}</span>
                </div>
                <div className="work-meta">
                  <div>
                    <span className="work-category">{project.category}</span>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="work-arrow" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <p className="work-note">{project.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ways" id="ways">
        <div className="section-shell">
          <div className="section-label">
            <span>04</span> WAYS TO WORK
          </div>
          <div className="ways-heading">
            <h2>
              Flexible support,
              <br />
              <em>chosen around you.</em>
            </h2>
            <p>Choose the rhythm that best fits your workflow and the kind of help you need.</p>
          </div>

          <div className="ways-grid">
            {supportOptions.map((option) => (
              <Link className="way-card" href={`/ways/${option.slug}`} key={option.slug}>
                <span>{option.label}</span>
                <h3>{option.title}</h3>
                <p>{option.detail}</p>
                <i>
                  LEARN MORE <b aria-hidden="true">↗</b>
                </i>
              </Link>
            ))}
          </div>

          <p className="fine-print">Helpful arrangements for ongoing, flexible, or bespoke support.</p>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-shell testimonial-shell">
          <div className="section-label">
            <span>05</span> KIND WORDS
          </div>
          <div className="testimonial-content">
            <div className="quote-mark">“</div>
            <p>
              Jorgilla brings a thoughtful, steady presence to the work behind the scenes. The details feel cared for, the communication is easy, and the whole experience feels more spacious.
            </p>
            <div className="testimonial-credit">
              <strong>CLIENT TESTIMONIAL</strong>
              <span>—</span>
              SAMPLE NOTE
            </div>
            <small>Replace with a real quote, permissioned testimonial, or short client feedback.</small>
            <DraftPrompt label="Add a testimonial" copy="Add a real quote, the client role, and any context you can share with permission." />
          </div>
        </div>
      </section>

      <section className="process" id="process">
        <div className="section-shell">
          <div className="section-label">
            <span>06</span> PROCESS
          </div>
          <div className="process-heading">
            <h2>
              A simple rhythm,
              <br />
              <em>built for clarity.</em>
            </h2>
            <p>Thoughtful process steps that keep communication easy and the work moving with less friction.</p>
          </div>

          <div className="steps">
            {steps.map((step) => (
              <div className="step" key={step.number}>
                <div className="step-number">{step.number}</div>
                <div className="step-line" />
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq" id="faq">
        <div className="section-shell faq-grid">
          <div>
            <div className="section-label">
              <span>07</span> FAQ
            </div>
            <h2>
              A few answers,
              <br />
              <em>before we begin.</em>
            </h2>
          </div>

          <div className="faq-list">
            {questions.map((item) => (
              <details key={item.q}>
                <summary>
                  {item.q}
                  <span aria-hidden="true">＋</span>
                </summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-decoration" aria-hidden="true">
            hello
          </div>
          <div className="section-label">
            <span>08</span> LET’S TALK
          </div>
          <div className="contact-content">
            <div className="contact-copy">
              <h2>
                Need a little more
                <br />
                <em>room</em> to focus?
              </h2>
              <p>
                Share the type of support you need and what your week currently feels like. I’ll help you shape a thoughtful way forward.
              </p>
              <a className="button button-cream" href="mailto:hello@example.com">
                hello@example.com <span aria-hidden="true">↗</span>
              </a>
              <span className="contact-placeholder">Replace with your real email before publishing.</span>
            </div>

            <form className="inquiry-form">
              <div className="form-heading">
                <h3>Tell me a little about your needs</h3>
                <p>Short, friendly details are enough to begin.</p>
              </div>
              <div className="form-grid">
                <label>
                  Name
                  <input type="text" placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input type="email" placeholder="you@example.com" />
                </label>
                <label className="form-wide">
                  How can I help?
                  <textarea placeholder="Tell me what you need support with" />
                </label>
              </div>
              <div className="form-submit">
                <button className="button button-plum" type="submit">
                  Send inquiry <span aria-hidden="true">↗</span>
                </button>
                <small>Use a working contact form or direct email link before launch.</small>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Link className="brand footer-brand" href="#home" aria-label="Jorgilla Fernandez, home">
          <span className="brand-monogram">
            J<span>.</span>
          </span>
          <span className="brand-name">
            JORGILLA FERNANDEZ
            <span>VIRTUAL ASSISTANT</span>
          </span>
        </Link>
        <p>Thoughtful support, with care.</p>
        <Link className="footer-top" href="#top">
          BACK TO TOP ↑
        </Link>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} JORGILLA FERNANDEZ</span>
          <Link href="#contact">GET IN TOUCH</Link>
        </div>
      </footer>
    </main>
  );
}
