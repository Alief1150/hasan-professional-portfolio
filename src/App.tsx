import { SpeedInsights } from "@vercel/speed-insights/react";
import { useState, useEffect, type CSSProperties, type PointerEvent } from "react";
import "./index.css";

// ─── Asset imports ────────────────────────────────────────────────────────────
import hasanPhoto from "./assets/hasan-photo.jpg";
import cvPage1 from "./assets/cv/cv_hal1.jpg";
import cvPage2 from "./assets/cv/cv_hal2.png";
import fullCvPdf from "./assets/cv/full_cv.pdf";
import footstep1 from "./assets/footstep_generator.jpg";
import footstep2 from "./assets/footstep_generator_2.jpg";
import footstep3 from "./assets/footstep_generator_3.jpg";
import footstep4 from "./assets/footstep_generator_4.jpg";
import juara2ipa from "./assets/juara2ipa.jpg";
import hakiDoc from "./assets/surat-pencatatan-ciptaan-haki.jpeg";
import mtcnaCert from "./assets/certificates/mtcna.jpg";
import bnspCert from "./assets/certificates/bnsp.jpg";
import ukbiCert from "./assets/certificates/ukbi.jpg";
import sfhCert from "./assets/certificates/sfh.jpg";
import workshopCert from "./assets/certificates/workshop.jpg";
import unicefCert from "./assets/certificates/unicef.jpg";

const ri = (i: number): CSSProperties => ({ "--reveal-i": i }) as CSSProperties;

function createKineticRipple(event: PointerEvent<HTMLElement>) {
  const button = event.currentTarget;
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const ripple = document.createElement("span");

  ripple.className = "kinetic-ripple";
  ripple.style.width = `${size}px`;
  ripple.style.height = `${size}px`;
  ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

  button.appendChild(ripple);
  window.setTimeout(() => ripple.remove(), 650);
}

async function copyToClipboard(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.opacity = "0";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  textarea.remove();
}

// ─── Topbar ──────────────────────────────────────────────────────────────────
function Topbar() {
  return (
    <div className="topbar" aria-hidden="true">
      <span className="topbar__text">
        Hasan Ibnu Ali&nbsp;&nbsp;/&nbsp;&nbsp;2026 · Computer and Network
        Engineering · Jakarta, Indonesia · Available for internships and
        scholarships
      </span>
    </div>
  );
}

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <nav className="nav" id="nav" aria-label="Main navigation">
      <div className="container nav__inner">
        <a href="#hero" className="nav__logo" onClick={close}>
          Hasan<span className="nav__logo-dot">.</span>
        </a>
        <ul
          className={`nav__links${open ? " nav__links--open" : ""}`}
          role="list"
        >
          <li>
            <a href="#about" onClick={close}>
              About
            </a>
          </li>
          <li>
            <a href="#capabilities" onClick={close}>
              Skills
            </a>
          </li>
          <li>
            <a href="#experience" onClick={close}>
              Experience
            </a>
          </li>
          <li>
            <a href="#achievements" onClick={close}>
              Work
            </a>
          </li>
          <li>
            <a href="#certificates" onClick={close}>
              Certificates
            </a>
          </li>
          <li>
            <a href="#education" onClick={close}>
              Education
            </a>
          </li>
        </ul>
        <div className="nav__actions">
          <a href="#contact" className="btn primary magnetic-cta" onClick={close}>
            Hire Me
          </a>
          <button
            className={`nav__hamburger${open ? " is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="hero" id="hero" aria-label="Introduction">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow">
            Computer &amp; Network Engineering Student · Environmental Tech
            Innovator
          </p>
          <h1 className="display hero__h1" data-reveal style={ri(0)}>
            Hasan
            <br />
            Ibnu Ali
          </h1>
          <p className="hero__lead" data-reveal style={ri(1)}>
            SMK student with hands-on experience in data processing, statistical
            validation, networking, automation, and environmental technology
            innovation.
          </p>
          <div className="hero__ctas" data-reveal style={ri(2)}>
            <a href="#capabilities" className="btn primary magnetic-cta">
              Explore
            </a>
            <a href="#resume" className="btn ghost magnetic-cta">
              View CV
            </a>
            <a
              href="https://www.linkedin.com/in/hasan-ibnu-ali-3487992a1/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost magnetic-cta"
              aria-label="LinkedIn profile of Hasan Ibnu Ali"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hero__visual" data-reveal style={ri(1)}>
          <div className="photo-frame">
            <div
              className="photo-frame__corner photo-frame__corner--tl"
              aria-hidden="true"
            />
            <div
              className="photo-frame__corner photo-frame__corner--tr"
              aria-hidden="true"
            />
            <div
              className="photo-frame__corner photo-frame__corner--bl"
              aria-hidden="true"
            />
            <div
              className="photo-frame__corner photo-frame__corner--br"
              aria-hidden="true"
            />
            <div className="photo-frame__img" aria-label="Hasan Ibnu Ali">
              <img
                src={hasanPhoto}
                alt="Hasan Ibnu Ali profile photo"
                className="photo-frame__photo"
                loading="eager"
              />
            </div>
            <div className="photo-frame__label" aria-hidden="true">
              Jakarta · SMKN 54
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Strip ──────────────────────────────────────────────────────────────
const STATS = [
  {
    value: "700+",
    label: "Publications Processed",
    sub: "BPS Pusat Internship",
  },
  {
    value: "150+",
    label: "National Pubs Validated",
    sub: "Metadata and Quality Control",
  },
  {
    value: "HKI",
    label: "Intellectual Property",
    sub: "Footstep Generator — 2025",
  },
];

function StatsStrip() {
  return (
    <div className="stats-strip" id="stats">
      <div className="container stats-strip__inner">
        {STATS.map((s, i) => (
          <div className="stats-strip__item" key={i} data-reveal style={ri(i)}>
            <span className="display stats-strip__value">{s.value}</span>
            <span className="stats-strip__label">{s.label}</span>
            <span className="stats-strip__sub">{s.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Wire / Marquee ───────────────────────────────────────────────────────────
const SKILLS = [
  "Computer and Network Engineering",
  "MikroTik RouterOS",
  "Arduino",
  "Mechatronics Automation",
  "Data Management",
  "Excel",
  "Hardware Troubleshooting",
  "Basic Programming",
  "Graphic Design",
  "Waste-to-Energy Technology",
  "Pyrolysis Systems",
  "Renewable Energy",
];
const CREDENTIALS = [
  "BPS Pusat",
  "UNICEF Generasi Terampil",
  "Footstep Generator",
  "HKI 2025",
  "MTCNA",
  "BNSP Network Certification",
  "Coral Reef Conservation",
  "United Tractors Innovation",
  "ASEAN AIPA Delegate",
  "World Scout Jamboree",
  "Duta Inspirasi Indonesia",
];

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`marquee-row${reverse ? " marquee-row--reverse" : ""}`}>
      <div className="marquee-track" aria-hidden="true">
        {doubled.map((item, i) => (
          <span className="marquee-item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function Wire() {
  return (
    <div className="wire-section" aria-hidden="true">
      <MarqueeRow items={SKILLS} />
      <MarqueeRow items={CREDENTIALS} reverse />
    </div>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section className="about" id="about" aria-label="About">
      <div className="container about__inner">
        <div className="about__text" data-reveal style={ri(0)}>
          <h2 className="display about__h2">
            Technical discipline
            <br />
            with environmental intent.
          </h2>
          <p className="about__body">
            Computer and Network Engineering student at SMKN 54 Jakarta (July
            2023 – July 2026), based in Jakarta Pusat. Working across networks,
            hardware, data systems, automation, and sustainability innovation.
          </p>
          <p className="about__body">
            During an internship at BPS Pusat, processed over 700 statistical
            publications and validated 150+ national publications with full
            metadata management and quality control. The Footstep Generator — a
            patented device converting kinetic energy from footsteps into
            electricity — earned HKI intellectual property recognition in 2025.
            Active in national and international youth programs including ASEAN
            AIPA and World Scout Jamboree.
          </p>
          <div className="about__meta">
            <span className="about__meta-item">SMKN 54 Jakarta</span>
            <span className="about__meta-sep">·</span>
            <span className="about__meta-item">Jakarta Pusat</span>
            <span className="about__meta-sep">·</span>
            <span className="about__meta-item">2023 – 2026</span>
          </div>
        </div>
        <div className="about__side" data-reveal style={ri(1)}>
          <div className="about__tags">
            {SKILLS.map((s, i) => (
              <span className="about__tag" key={i}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Capabilities ─────────────────────────────────────────────────────────────
const CAPS = [
  {
    title: "Networking & Infrastructure",
    body: "MikroTik RouterOS, network configuration, hardware troubleshooting, and MTCNA and BNSP network certification focus.",
    icon: "◈",
    accent: true,
  },
  {
    title: "Automation & Hardware",
    body: "Arduino, mechatronics automation, and practical technical prototyping through hands-on innovation work.",
    icon: "◎",
    accent: false,
  },
  {
    title: "Data & Analytics",
    body: "Advanced Excel, data validation, metadata management, publication processing, and quality control.",
    icon: "◆",
    accent: false,
  },
  {
    title: "Environmental Technology",
    body: "Waste-to-energy systems, pyrolysis devices, renewable energy innovation, and coral reef conservation engagement.",
    icon: "◉",
    accent: true,
  },
];

function CapCard({
  title,
  body,
  icon,
  accent,
  index,
}: {
  title: string;
  body: string;
  icon: string;
  accent: boolean;
  index: number;
}) {
  return (
    <div
      className={`caps__card${accent ? " caps__card--accent" : ""}`}
      data-reveal
      style={ri(index + 1)}
    >
      <span className="caps__icon" aria-hidden="true">
        {icon}
      </span>
      <h3 className="caps__title">{title}</h3>
      <p className="caps__body">{body}</p>
    </div>
  );
}

function Capabilities() {
  return (
    <section className="caps" id="capabilities" aria-label="Core capabilities">
      <div className="container">
        <p className="section-label" data-reveal style={ri(0)}>
          Core Capabilities
        </p>
        <div className="caps__grid">
          {CAPS.map((c, i) => (
            <CapCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Experience ───────────────────────────────────────────────────────────────
const EXP = [
  {
    num: "01",
    title: "Data Processing Intern",
    org: "Badan Pusat Statistik (BPS) Pusat",
    meta: "July 2025 – December 2025",
    body: "Processed and validated 700+ statistical publications. Managed data matching and metadata for 150+ national publications, improving retrieval efficiency. Automated publication progress tracking using Excel macros.",
  },
  {
    num: "02",
    title: "Footstep Generator — Innovation Work",
    org: "National Innovation / HKI",
    meta: "2023 – 2025",
    body: "Designed and developed a device converting kinetic energy from human footsteps into usable electricity. Earned HKI intellectual property registration in 2025. Won 3rd Place at the National SMK Innovation Competition (United Tractors) and 3rd Place at the National Youth Pioneers Competition (Environment & Tourism).",
  },
  {
    num: "03",
    title: "Coral Reef Conservation",
    org: "Kepulauan Seribu",
    meta: "April 2025",
    body: "Transplanted coral reefs and educated 50+ local students on waste management and environmental awareness.",
  },
  {
    num: "04",
    title: "UNICEF Generasi Terampil",
    org: "UNICEF Indonesia",
    meta: "July 2024 – October 2024",
    body: "Regional Finalist. Developed a pyrolysis device for waste-to-energy conversion as part of environmental innovation programming.",
  },
];

function Experience() {
  return (
    <section className="exp" id="experience" aria-label="Experience">
      <div className="container">
        <div className="exp__grid">
          {EXP.map((e, i) => (
            <div className="exp__item" key={i} data-reveal style={ri(i)}>
              <span className="exp__num display">{e.num}</span>
              <div className="exp__content">
                <h3 className="exp__title">{e.title}</h3>
                <p className="exp__org">{e.org}</p>
                <time className="exp__meta">{e.meta}</time>
                <p className="exp__body">{e.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Project Slideshow ───────────────────────────────────────────────────────
const PROJECT_IMAGES = [
  { src: footstep1, alt: "Footstep Generator project documentation 1" },
  { src: footstep2, alt: "Footstep Generator project documentation 2" },
  { src: footstep3, alt: "Footstep Generator project documentation 3" },
  { src: footstep4, alt: "Footstep Generator project documentation 4" },
  { src: juara2ipa, alt: "Youth Scientific Paper Competition documentation" },
];

function ProjectSlideshow() {
  const [active, setActive] = useState(0);
  const prev = () =>
    setActive((v) => (v === 0 ? PROJECT_IMAGES.length - 1 : v - 1));
  const next = () =>
    setActive((v) => (v === PROJECT_IMAGES.length - 1 ? 0 : v + 1));

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="slideshow">
      <div className="slideshow__viewport">
        <div
          className="slideshow__track"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {PROJECT_IMAGES.map((image, i) => (
            <img
              key={image.src}
              src={image.src}
              alt={image.alt}
              className="slideshow__img"
              loading={i === 0 ? "eager" : "lazy"}
            />
          ))}
        </div>
        <button
          className="slideshow__btn slideshow__btn--prev"
          onClick={prev}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          className="slideshow__btn slideshow__btn--next"
          onClick={next}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
      <div
        className="slideshow__dots"
        role="tablist"
        aria-label="Slideshow navigation"
      >
        {PROJECT_IMAGES.map((_, i) => (
          <button
            key={i}
            className={`slideshow__dot${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            role="tab"
            aria-selected={i === active}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Achievements ─────────────────────────────────────────────────────────────
const ACHIEVEMENTS = [
  {
    year: "2025",
    tag: "Intellectual Property — HKI",
    title: "Footstep Generator",
    body: "Patented device converting kinetic energy from human footsteps into usable electricity.",
    main: true,
  },
  {
    year: "2025",
    tag: "National Competition",
    title: "3rd Place — National SMK Innovation",
    body: "United Tractors national innovation competition.",
    main: false,
  },
  {
    year: "2025",
    tag: "National Competition",
    title: "3rd Place — National Youth Pioneers",
    body: "Environment & Tourism category.",
    main: false,
  },
  {
    year: "2025",
    tag: "Academic Competition",
    title: "2nd Place — Youth Scientific Paper",
    body: "Natural Science category.",
    main: false,
  },
  {
    year: "2025",
    tag: "National Program",
    title: "Duta Inspirasi Indonesia",
    body: "National Delegate — Batch 18.",
    main: false,
  },
  {
    year: "2024",
    tag: "International Program",
    title: "ASEAN AIPA Youth Meeting",
    body: "Delegate — ASEAN Inter-Parliamentary Assembly Youth Meeting.",
    main: false,
  },
];

const MEDIA_MENTIONS = [
  {
    source: "Kompasiana",
    title: "Juara Nasional Sobat UT Competition",
    description: "Media mention covering Hasan's United Tractors competition record.",
    url: "https://www.kompasiana.com/gheeputri6029/69fa80eaed641569cf4ec3f5/satu-satunya-wakil-dki-jakarta-hasan-ibnu-ali-siswa-smkn-54-jakarta-juara-nasional-sobat-ut-competition-pt-united-tractors",
    image: footstep1,
    alt: "Footstep Generator media documentation",
  },
  {
    source: "Siaran Berita",
    title: "Footstep Generator Coverage",
    description: "External coverage about the Footstep Generator innovation project.",
    url: "https://siaran-berita.com/anak-smk-dikagumi-kampus-besar-karya-footstep-generator-siswa-smkn-54-jakarta-dijadikan-bahan-skripsi-mahasiswa-ugm/",
    image: footstep2,
    alt: "Footstep Generator device media documentation",
  },
  {
    source: "Netral News",
    title: "Hasan Ibnu Ali Ciptakan Footstep Generator",
    description: "Media mention focused on Hasan's clean-energy device work.",
    url: "https://www.netralnews.com/hasan-ibnu-ali-siswa-smkn-54-jakarta-ciptakan-footstep-generator/ZkxNYkxiekNyUVFNbzM5U29nY0E1QT09",
    image: footstep3,
    alt: "Hasan Footstep Generator media documentation",
  },
];

function MaterialIcon({ name }: { name: string }) {
  return (
    <span className="material-symbols-rounded" aria-hidden="true">
      {name}
    </span>
  );
}

function MediaMentionActions({
  title,
  url,
  copied,
  onCopied,
}: {
  title: string;
  url: string;
  copied: boolean;
  onCopied: (url: string) => void;
}) {
  const copyUrl = async () => {
    await copyToClipboard(url);
    onCopied(url);
  };

  const shareUrl = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
      } catch (error) {
        if ((error as DOMException).name !== "AbortError") {
          await copyUrl();
        }
      }
      return;
    }
    await copyUrl();
  };

  return (
    <div className="ach__media-actions">
      <a
        href={url}
        target="_blank"
        rel="noreferrer noopener"
        className="media-action-btn"
        aria-label={`Open media mention: ${title}`}
        onPointerDown={createKineticRipple}
      >
        <MaterialIcon name="open_in_new" />
      </a>
      <button
        type="button"
        className="media-action-btn"
        onClick={shareUrl}
        onPointerDown={createKineticRipple}
        aria-label={`Share media mention: ${title}`}
      >
        <MaterialIcon name="share" />
      </button>
      <button
        type="button"
        className="media-action-btn"
        onClick={copyUrl}
        onPointerDown={createKineticRipple}
        aria-label={`Copy media mention URL: ${title}`}
      >
        <MaterialIcon name="content_copy" />
      </button>
      <span
        className={`media-action-status${copied ? " is-visible" : ""}`}
        aria-live="polite"
      >
        {copied ? "Copied" : ""}
      </span>
    </div>
  );
}

function Achievements() {
  const [copiedUrl, setCopiedUrl] = useState("");

  const markCopied = (url: string) => {
    setCopiedUrl(url);
    window.setTimeout(() => setCopiedUrl(""), 1500);
  };

  return (
    <section className="ach" id="achievements" aria-label="Achievements">
      <div className="container">
        <div className="ach__hero" data-reveal style={ri(0)}>
          <div className="ach__copy">
            <p className="section-label">Project Documentation</p>
            <h2 className="display ach__h2">
              Footstep Generator
              <br />
              in practice.
            </h2>
            <p className="ach__lead">
              Documentation from Hasan's environmental technology project and
              competition records, presented as one lightweight slideshow.
            </p>
          </div>
          <ProjectSlideshow />
        </div>
        <div className="ach__cards">
          <div className="ach__card ach__card--main" data-reveal style={ri(1)}>
            <span className="ach__card-tag">{ACHIEVEMENTS[0].tag}</span>
            <h3 className="ach__card-title">{ACHIEVEMENTS[0].title}</h3>
            <p className="ach__card-body">{ACHIEVEMENTS[0].body}</p>
          </div>
          <div className="ach__sec-row">
            {ACHIEVEMENTS.slice(1).map((a, i) => (
              <div
                className="ach__card ach__card--sec"
                key={i}
                data-reveal
                style={ri(i + 2)}
              >
                <span className="ach__card-tag">{a.tag}</span>
                <p className="ach__card-year">{a.year}</p>
                <h3 className="ach__card-title">{a.title}</h3>
                <p className="ach__card-body">{a.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ach__media" data-reveal style={ri(9)}>
          <p className="section-label">Media Mentions</p>
          <div className="ach__media-grid">
            {MEDIA_MENTIONS.map((mention) => (
              <article className="ach__media-card" key={mention.url}>
                <img
                  src={mention.image}
                  alt={mention.alt}
                  className="ach__media-img"
                  loading="lazy"
                />
                <div className="ach__media-body">
                  <p className="ach__media-source">{mention.source}</p>
                  <h3 className="ach__media-title">{mention.title}</h3>
                  <p className="ach__media-desc">{mention.description}</p>
                  <MediaMentionActions
                    title={mention.title}
                    url={mention.url}
                    copied={copiedUrl === mention.url}
                    onCopied={markCopied}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Certificates ─────────────────────────────────────────────────────────────
const CERTS = [
  {
    title: "MikroTik Certified Network Associate (MTCNA)",
    body: "Networking credential focused on MikroTik RouterOS and network administration fundamentals.",
    image: mtcnaCert,
    alt: "MikroTik Certified Network Associate certificate",
  },
  {
    title: "BNSP Junior Network Administrator",
    body: "Professional competency record for junior network administration.",
    image: bnspCert,
    alt: "BNSP Junior Network Administrator certificate",
  },
  {
    title: "Uji Kemahiran Berbahasa Indonesia (UKBI)",
    body: "Indonesian language proficiency record.",
    image: ukbiCert,
    alt: "UKBI certificate",
  },
  {
    title: "Safe from Harm (SFH 1): Essential Learning",
    body: "Essential learning record for safe youth and community engagement.",
    image: sfhCert,
    alt: "Safe from Harm Essential Learning certificate",
  },
  {
    title: "Workshop Pepelingasih DKI Jakarta 2025",
    body: "Environmental youth workshop record in DKI Jakarta.",
    image: workshopCert,
    alt: "Workshop Pepelingasih DKI Jakarta certificate",
  },
  {
    title: "Bootcamp Innovation Challenge 2024: Generasi Terampil",
    body: "Innovation bootcamp record connected to the Generasi Terampil program.",
    image: unicefCert,
    alt: "Bootcamp Innovation Challenge Generasi Terampil certificate",
  },
  {
    title: "HKI / Intellectual Property Rights — Footstep Generator",
    body: "Surat Pencatatan Ciptaan for Hasan's Footstep Generator project.",
    image: hakiDoc,
    alt: "Surat Pencatatan Ciptaan HKI Footstep Generator",
  },
];

function Certificates() {
  return (
    <section className="certs" id="certificates" aria-label="Certificates">
      <div className="container">
        <p className="section-label" data-reveal style={ri(0)}>
          Credentials and Certificates
        </p>
        <div className="certs__grid">
          {CERTS.map((c, i) => (
            <div
              className="certs__card"
              key={c.title}
              data-reveal
              style={ri(i)}
            >
              <div className="certs__visual">
                <img src={c.image} alt={c.alt} className="certs__img" loading="lazy" />
              </div>
              <div className="certs__card-body">
                <h3 className="certs__title">{c.title}</h3>
                <p className="certs__desc">{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Education ────────────────────────────────────────────────────────────────
const EDU = [
  {
    school: "SMKN 54 Jakarta",
    program: "Computer and Network Engineering",
    period: "July 2023 – July 2026",
  },
  {
    school: "SMPN 183 Jakarta",
    program: "Junior Secondary Education",
    period: "July 2020 – July 2023",
  },
];

function Education() {
  return (
    <section className="edu" id="education" aria-label="Education">
      <div className="container">
        <p className="section-label" data-reveal style={ri(0)}>
          Education
        </p>
        <div className="edu__list">
          {EDU.map((e, i) => (
            <div className="edu__row" key={i} data-reveal style={ri(i + 1)}>
              <div className="edu__left">
                <h3 className="edu__school">{e.school}</h3>
                <p className="edu__program">{e.program}</p>
              </div>
              <time className="edu__period">{e.period}</time>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Resume ───────────────────────────────────────────────────────────────────
const CV_PAGES = [
  { src: cvPage1, alt: "Hasan Ibnu Ali CV page 1", filename: "hasan-ibnu-ali-cv-page-1.jpg" },
  { src: cvPage2, alt: "Hasan Ibnu Ali CV page 2", filename: "hasan-ibnu-ali-cv-page-2.png" },
];

function Resume() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section className="resume-sec" id="resume" aria-label="Resume">
      <div className="container resume-sec__inner">
        <div className="resume-sec__artifact" data-reveal style={ri(0)}>
          <div className="resume-cv-preview">
            <img
              src={CV_PAGES[activePage].src}
              alt={CV_PAGES[activePage].alt}
              className="resume-cv-preview__page"
              loading="lazy"
            />
            <div className="resume-cv-preview__controls" role="tablist" aria-label="CV pages">
              {CV_PAGES.map((page, i) => (
                <button
                  key={page.filename}
                  className={`resume-cv-preview__tab${activePage === i ? " is-active" : ""}`}
                  onClick={() => setActivePage(i)}
                  role="tab"
                  aria-selected={activePage === i}
                >
                  Page {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="resume-sec__copy" data-reveal style={ri(1)}>
          <h2 className="display resume-sec__h2">
            Full CV,
            <br />
            available now.
          </h2>
          <p className="resume-sec__body">
            A complete record of experience, certifications, education, and
            project work. Ready for internship applications, scholarship
            submissions, and professional review.
          </p>
          <div className="resume-sec__ctas">
            <a href={fullCvPdf} className="btn primary magnetic-cta" download>
              Download CV
            </a>
            <a
              href="https://wa.me/6287874407390"
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost magnetic-cta"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  return (
    <section className="contact" id="contact" aria-label="Contact">
      <div className="container contact__inner">
        <h2 className="display contact__h2" data-reveal style={ri(0)}>
          Hire Me.
        </h2>
        <p className="contact__lead" data-reveal style={ri(1)}>
          Open to internships, scholarships, and collaborative projects. Reach
          out directly for the fastest response.
        </p>
        <div className="contact__ctas" data-reveal style={ri(2)}>
          <a
            href="https://wa.me/6287874407390"
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary magnetic-cta"
          >
            WhatsApp
          </a>
          <a href="mailto:luckm6082@gmail.com" className="btn ghost magnetic-cta">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-ibnu-ali-3487992a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost magnetic-cta"
            aria-label="LinkedIn profile of Hasan Ibnu Ali"
          >
            LinkedIn
          </a>
          <a
            href="https://sites.google.com/view/hasan-ibnu-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="btn ghost magnetic-cta"
          >
            Website
          </a>
        </div>
        <div className="contact__links" data-reveal style={ri(3)}>
          <a
            href="https://wa.me/6287874407390"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span>+62 878-7440-7390</span>
          </a>
          <a href="mailto:luckm6082@gmail.com" className="contact__link">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>luckm6082@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/hasan-ibnu-ali-3487992a1/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
            aria-label="LinkedIn profile of Hasan Ibnu Ali"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span>linkedin.com/in/hasan-ibnu-ali-3487992a1</span>
          </a>
          <a
            href="https://sites.google.com/view/hasan-ibnu-ali"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__link"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              <line x1="2" y1="12" x2="22" y2="12" />
            </svg>
            <span>sites.google.com/view/hasan-ibnu-ali</span>
          </a>
          <span className="contact__link contact__link--static">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>Serdang Kemayoran, Jakarta Pusat</span>
          </span>
          <span className="contact__link contact__link--static">
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
            <span>SMKN 54 Jakarta</span>
          </span>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__col footer__col--brand">
          <div className="footer__brand">
            Hasan<span className="footer__brand-dot">.</span>
          </div>
          <p className="footer__tagline">
            Computer and Network Engineering
            <br />
            SMKN 54 Jakarta
          </p>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Navigation</span>
          <ul className="footer__list" role="list">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#capabilities">Skills</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#achievements">Work</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Resources</span>
          <ul className="footer__list" role="list">
            <li>
              <a href="#certificates">Certificates</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#resume">CV</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <span className="footer__col-label">Get in Touch</span>
          <ul className="footer__list" role="list">
            <li>
              <a
                href="https://wa.me/6287874407390"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href="mailto:luckm6082@gmail.com">luckm6082@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/hasan-ibnu-ali-3487992a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile of Hasan Ibnu Ali"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://sites.google.com/view/hasan-ibnu-ali"
                target="_blank"
                rel="noopener noreferrer"
              >
                Portfolio Site
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <span className="footer__copy">
            2026 — Hasan Ibnu Ali — Jakarta, Indonesia
          </span>
          <div className="footer__socials">
            <a
              href="https://wa.me/6287874407390"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              onPointerDown={createKineticRipple}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a
              href="mailto:luckm6082@gmail.com"
              className="footer__social"
              aria-label="Email"
              onPointerDown={createKineticRipple}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/hasan-ibnu-ali-3487992a1/"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Hasan Ibnu Ali"
              onPointerDown={createKineticRipple}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://sites.google.com/view/hasan-ibnu-ali"
              className="footer__social"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio Website"
              onPointerDown={createKineticRipple}
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <line x1="2" y1="12" x2="22" y2="12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="footer__mega" aria-hidden="true">
        <span className="footer__mega-text">
          Hasan Ibnu Ali<span className="footer__mega-dot">.</span>
        </span>
      </div>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll("[data-reveal]");
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduced) {
      elements.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const mobile = window.matchMedia("(max-width: 768px)").matches;
    if (reduced || coarse || mobile) return;

    const buttons = Array.from(
      document.querySelectorAll<HTMLElement>(".magnetic-cta"),
    );
    const cleanups = buttons.map((button) => {
      let frame = 0;
      const onMove = (event: MouseEvent) => {
        window.cancelAnimationFrame(frame);
        frame = window.requestAnimationFrame(() => {
          const rect = button.getBoundingClientRect();
          const x = event.clientX - rect.left - rect.width / 2;
          const y = event.clientY - rect.top - rect.height / 2;
          const strength = 0.18;
          button.style.setProperty("--magnetic-x", `${Math.max(-8, Math.min(8, x * strength))}px`);
          button.style.setProperty("--magnetic-y", `${Math.max(-8, Math.min(8, y * strength))}px`);
        });
      };
      const onLeave = () => {
        window.cancelAnimationFrame(frame);
        button.style.setProperty("--magnetic-x", "0px");
        button.style.setProperty("--magnetic-y", "0px");
      };

      button.addEventListener("mousemove", onMove);
      button.addEventListener("mouseleave", onLeave);
      button.addEventListener("blur", onLeave);

      return () => {
        window.cancelAnimationFrame(frame);
        button.removeEventListener("mousemove", onMove);
        button.removeEventListener("mouseleave", onLeave);
        button.removeEventListener("blur", onLeave);
      };
    });

    return () => cleanups.forEach((cleanup) => cleanup());
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    const nav = document.getElementById("nav");
    const onScroll = () => {
      const y = window.scrollY;
      if (y > lastY && y > 80) {
        nav?.classList.add("nav--hidden");
      } else {
        nav?.classList.remove("nav--hidden");
      }
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="side-rail side-rail--left" aria-hidden="true" />
      <div className="side-rail side-rail--right" aria-hidden="true" />
      <Topbar />
      <NavBar />
      <main>
        <Hero />
        <StatsStrip />
        <Wire />
        <About />
        <Capabilities />
        <Experience />
        <Achievements />
        <Certificates />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
    </>
  );
}
