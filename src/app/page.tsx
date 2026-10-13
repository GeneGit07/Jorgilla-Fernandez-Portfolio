import Image from "next/image";
import Link from "next/link";
import portrait from "../../public/images/jorgilla-fernandez.jpeg";
import { MobileMenu } from "@/components/mobile-menu";
import { PortfolioIntro } from "@/components/portfolio-intro";
import { ThemeToggle } from "@/components/theme-toggle";
import { experiences, kindWordsImage } from "@/data/portfolio";

export default function Home() {
  return (
    <PortfolioIntro>
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Jorgilla Fernandez, home">
          <span className="brand-monogram">
            J<span>.</span>
          </span>
          <span className="brand-name">
            JORGILLA FERNANDEZ
            <span>TOURISM &amp; HOSPITALITY</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#experiences">Experiences</a>
          <a href="#testimonials">Kind words</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-rule" /> TOURISM &amp; HOSPITALITY
          </div>
          <h1 id="hero-title">
            Care for
            <br />
            <em>every guest.</em>
          </h1>
          <p className="hero-lede">
            Tourism Management graduate with hands-on experience in front office operations and guest services.
          </p>
          <div className="hero-facts" aria-label="Hospitality focus">
            <span>Tourism Management</span>
            <span>Front Office Operations</span>
            <span>Guest Services</span>
          </div>
          <div className="hero-links">
            <a className="button button-plum" href="#contact">
              Explore working together <span aria-hidden="true">↗</span>
            </a>
            <a className="underlined-link" href="#about">
              Get to know me <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="note-star" aria-hidden="true">
              ✳
            </span>{" "}
            GUEST SERVICE WITH CARE AND PROFESSIONALISM
          </div>
        </div>

        <div className="hero-visual">
          <Image
            src={portrait}
            alt="Portrait of Jorgilla Fernandez in graduation attire."
            sizes="(max-width: 650px) 86vw, (max-width: 900px) 44vw, 38vw"
          />
          <div className="hero-image-caption">
            <span>JORGILLA FERNANDEZ</span>
            <strong>TOURISM MANAGEMENT GRADUATE</strong>
          </div>
        </div>

        <div className="hero-bottom">
          <span>HOSPITALITY &amp; GUEST SERVICES</span>
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
          <div className="about-profile">
            <h2>
              Good work needs
              <br />
              a little <em>room.</em>
            </h2>
            <div className="about-portrait">
              <Image
                src={portrait}
                alt="Portrait of Jorgilla Fernandez in graduation attire."
                sizes="(max-width: 650px) 84vw, (max-width: 900px) 40vw, 34vw"
              />
              <span className="glass-image-label">STI COLLEGE TANAUAN</span>
            </div>
          </div>
          <div className="about-copy">
            <p>
              I am a graduate of Bachelor of Science in Tourism Management from STI College Tanauan, with hands-on experience in front office operations at JET Hotel Lipa. I have experience managing guest check-ins and check-outs, handling reservations, answering phone calls, and responding to guest inquiries and requests. I am also skilled in preparing reports, issuing key cards and food stubs, and assisting with hotel events and special celebrations. Through my experience, I developed strong communication, customer service, teamwork, and problem-solving skills while maintaining professionalism during regular and graveyard shifts. I am a dedicated, adaptable, and service-oriented individual committed to providing excellent guest experiences and continuously improving my skills in the hospitality industry.
            </p>
          </div>
        </div>
        <div className="about-signature">
          <span className="signature-line" /> Thoughtfully, <em>Jorgilla</em>
        </div>
      </section>

      <section className="experiences" id="experiences">
        <div className="section-shell">
          <div className="section-label">
            <span>02</span> EXPERIENCES
          </div>
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <article className="experience-entry" key={experience.title}>
                <span className="experience-number">0{index + 1}</span>
                <div className="experience-gallery">
                  {experience.images.map((image) => (
                    <figure className="experience-image" key={`${experience.title}-${image.label}`}>
                      <Image src={image.source} alt={image.alt} sizes="(max-width: 650px) 84vw, 20vw" />
                      <figcaption className="glass-image-label">{image.label}</figcaption>
                    </figure>
                  ))}
                </div>
                <div>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" id="testimonials">
        <div className="section-shell testimonial-shell">
          <div className="section-label">
            <span>03</span> KIND WORDS
          </div>
          <div className="testimonial-content">
            <div className="quote-mark">“</div>
            <p>
              Even as interns, a simple ‘thank you’ means so much to us as hotel staffs. These kind words make us feel appreciated and remind us that we have successfully fulfilled the guests&apos; wants and needs. It gives us a sense of fulfillment and reassurance that we are performing our duties well and providing the quality service that every guest deserves.
            </p>
            <figure className="kind-words-photo">
              <Image src={kindWordsImage.source} alt={kindWordsImage.alt} sizes="(max-width: 650px) 84vw, 32vw" />
              <figcaption className="glass-image-label">{kindWordsImage.label}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="contact-decoration" aria-hidden="true">
            hello
          </div>
          <div className="section-label">
            <span>04</span> LET’S TALK
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
            <span>TOURISM &amp; HOSPITALITY</span>
          </span>
        </Link>
        <p>Thoughtful support, with care.</p>
        <Link className="footer-top" href="#home">
          BACK TO TOP ↑
        </Link>
        <div className="footer-legal">
          <span>© {new Date().getFullYear()} JORGILLA FERNANDEZ</span>
          <div className="footer-socials" role="group" aria-label="Social media">
            <button type="button" aria-label="Facebook" title="Facebook">f</button>
            <button type="button" aria-label="Instagram" title="Instagram">◎</button>
            <button type="button" aria-label="TikTok" title="TikTok">♪</button>
            <button type="button" aria-label="Telegram" title="Telegram">➤</button>
          </div>
          <Link href="#contact">GET IN TOUCH</Link>
        </div>
      </footer>
    </main>
    </PortfolioIntro>
  );
}
