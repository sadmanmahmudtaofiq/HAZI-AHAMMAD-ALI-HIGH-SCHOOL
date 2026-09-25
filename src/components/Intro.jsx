import { useState, useEffect } from "react";
import "../styles/Intro.css";

// Real school campus photos preserved from assets
import bg1 from "../assets/dc8775ef-566f-4626-a161-b67f23e721d9.png";
import bg2 from "../assets/school_assembly_1672x941.png";
import bg3 from "../assets/498b0c97-74ec-4325-9260-899307a009b3.png";
import bg4 from "../assets/school_event_1672x941.png";

const slides = [
  {
    image: bg2,
    caption: "Morning Assembly & Campus Discipline",
  },
  {
    image: bg4,
    caption: "Annual Cultural & Academic Gatherings",
  },
  {
    image: bg3,
    caption: "Main Academic Building & Learning Grounds",
  },
  {
    image: bg1,
    caption: "Holistic Environment for Future Leaders",
  },
];

const FLOATING_ITEMS = [
  {
    id: "books",
    icon: "ri-book-open-line",
    iconClass: "icon-book",
    title: "Academic Books",
    sub: "Curriculum 2026",
  },
  {
    id: "stem",
    icon: "ri-atom-line",
    iconClass: "icon-atom",
    title: "Science & STEM",
    sub: "Modern Labs",
  },
  {
    id: "code",
    icon: "ri-code-s-slash-line",
    iconClass: "icon-code",
    title: "Digital Tech",
    sub: "Smart Skills",
  },
  {
    id: "ethics",
    icon: "ri-graduation-cap-line",
    iconClass: "icon-cap",
    title: "Knowledge & Ethics",
    sub: "Character First",
  },
  {
    id: "innovation",
    icon: "ri-cpu-line",
    iconClass: "icon-cpu",
    title: "Future Innovation",
    sub: "Tech Forward",
  },
  {
    id: "library",
    icon: "ri-book-2-line",
    iconClass: "icon-library",
    title: "Campus Library",
    sub: "Curated Reading",
  },
  {
    id: "wisdom",
    icon: "ri-lightbulb-line",
    iconClass: "icon-idea",
    title: "Creative Minds",
    sub: "Critical Thinking",
  },
];

// Individual floating badge slot with staggered 3D flip, glass sheen sweep, and vertical text rolling transition
const FloatingBadgeSlot = ({
  slotClass,
  items,
  initialIndex = 0,
  cycleTrigger,
  staggerDelay = 0,
}) => {
  const [index, setIndex] = useState(initialIndex);
  const [animPhase, setAnimPhase] = useState("idle"); // "idle" | "exiting" | "entering"
  const [hasSheen, setHasSheen] = useState(false);

  useEffect(() => {
    if (cycleTrigger === 0) return;

    let swapTimer;
    let idleTimer;

    const startTimer = setTimeout(() => {
      // Phase 1: 3D flip exit & text roll out
      setAnimPhase("exiting");

      // Phase 2: Swap content, trigger 3D bloom entrance & glass sheen sweep
      swapTimer = setTimeout(() => {
        setIndex((prev) => (prev + 1) % items.length);
        setAnimPhase("entering");
        setHasSheen(true);

        // Phase 3: Settle back to idle
        idleTimer = setTimeout(() => {
          setAnimPhase("idle");
          setHasSheen(false);
        }, 450);
      }, 280);
    }, staggerDelay);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(swapTimer);
      clearTimeout(idleTimer);
    };
  }, [cycleTrigger, staggerDelay, items.length]);

  const currentItem = items[index % items.length];

  return (
    <div className={`hero-float-slot ${slotClass}`}>
      <div className={`hero-float-badge ${hasSheen ? "has-sheen" : ""}`}>
        {/* Luminous glass sheen sweep */}
        <div className="badge-sheen-sweep" aria-hidden="true" />

        {/* 3D Flipping & Blooming Icon */}
        <div className={`float-badge-icon-wrap anim-${animPhase}`}>
          <div className={`float-badge-icon ${currentItem.iconClass}`}>
            <i className={currentItem.icon} />
          </div>
        </div>

        {/* Rolling & Dissolving Text Ticker */}
        <div className="float-badge-content-wrap">
          <div className={`float-badge-content anim-${animPhase}`}>
            <span className="float-badge-title">{currentItem.title}</span>
            <span className="float-badge-sub">{currentItem.sub}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Intro = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cycleTrigger, setCycleTrigger] = useState(0);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Periodic cycling for floating knowledge & tech badges every 30 seconds
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      setCycleTrigger((prev) => prev + 1);
    }, 30000);

    return () => clearInterval(cycleTimer);
  }, []);

  return (
    <section className="hero-section" id="hero" aria-label="Welcome and Introduction">
      {/* Background Slideshow with Slow Zoom */}
      <div className="hero-slides-wrapper" aria-hidden="true">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`hero-slide ${i === current ? "is-active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
      </div>

      {/* Modern Layered Dark Glass Overlay with Ambient Blur */}
      <div className="hero-glass-overlay" aria-hidden="true" />
      <div className="hero-mesh-glow" aria-hidden="true">
        <div className="ambient-blur-orb orb-primary hero-orb-1" />
        <div className="ambient-blur-orb orb-accent hero-orb-2" />
        <div className="ambient-blur-orb orb-cyan hero-orb-3" />
      </div>

      {/* Floating Books, Knowledge & Tech Stuff Elements (3 rotating items with smooth staggered 3D transitions) */}
      <div className="hero-floating-elements" aria-hidden="true">
        <FloatingBadgeSlot
          slotClass="float-pos-left float-anim-1"
          items={FLOATING_ITEMS}
          initialIndex={0}
          cycleTrigger={cycleTrigger}
          staggerDelay={0}
        />

        <FloatingBadgeSlot
          slotClass="float-pos-right float-anim-2"
          items={FLOATING_ITEMS}
          initialIndex={2}
          cycleTrigger={cycleTrigger}
          staggerDelay={320}
        />

        <FloatingBadgeSlot
          slotClass="float-pos-top float-anim-3"
          items={FLOATING_ITEMS}
          initialIndex={4}
          cycleTrigger={cycleTrigger}
          staggerDelay={640}
        />
      </div>

      {/* Main Content Area */}
      <div className="site-container hero-content-container">
        <div className="hero-text-card">
          {/* Institutional Badge */}
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-beacon" />
            <span className="hero-badge-text">HAZI AHAMMAD ALI HIGH SCHOOL</span>
            <span className="hero-badge-tag">EIIN: 112513 • RUPGANJ</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-title animate-fade-up">
            Education. Character. <span className="hero-highlight">Excellence.</span>
          </h1>

          {/* Subheading / Description */}
          <p className="hero-description animate-fade-up delay-1">
            Empowering curious minds and cultivating ethical leaders through rigorous
            academics, experienced mentorship, and a thriving school community in
            Birabo, Rupganj.
          </p>

          {/* Action CTAs */}
          <div className="hero-actions animate-fade-up delay-2">
            <a href="#schoolTimings" className="btn btn-primary hero-btn-main">
              <span>View Daily Schedule</span>
              <i className="ri-time-line" aria-hidden="true" />
            </a>
            <a href="#teachers" className="btn btn-secondary hero-btn-ghost">
              <span>Meet Our Faculty</span>
              <i className="ri-team-line" aria-hidden="true" />
            </a>
          </div>

          {/* Subtle Glass Feature Bar */}
          <div className="hero-glass-stats animate-fade-up delay-3">
            <div className="hero-stat-item">
              <i className="ri-graduation-cap-line hero-stat-icon" aria-hidden="true" />
              <div className="hero-stat-info">
                <span className="stat-value">100%</span>
                <span className="stat-label">Dedication to SSC Success</span>
              </div>
            </div>

            <div className="hero-stat-divider" aria-hidden="true" />

            <div className="hero-stat-item">
              <i className="ri-award-line hero-stat-icon" aria-hidden="true" />
              <div className="hero-stat-info">
                <span className="stat-value">GPA 5.0</span>
                <span className="stat-label">Consistent High Achievers</span>
              </div>
            </div>

            <div className="hero-stat-divider" aria-hidden="true" />

            <div className="hero-stat-item">
              <i className="ri-map-pin-line hero-stat-icon" aria-hidden="true" />
              <div className="hero-stat-info">
                <span className="stat-value">Birabo</span>
                <span className="stat-label">Rupganj, Narayanganj</span>
              </div>
            </div>
          </div>
        </div>

        {/* Slide Indicators & Navigation Dots */}
        <div className="hero-slide-controls" aria-label="Slideshow controls">
          <div className="hero-dots">
            {slides.map((_, idx) => (
              <button
                key={idx}
                type="button"
                className={`hero-dot ${idx === current ? "is-active" : ""}`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slides[idx].caption}`}
              >
                <span className="dot-inner" />
              </button>
            ))}
          </div>
          <span className="hero-slide-caption">
            {slides[current].caption}
          </span>
          <button
            type="button"
            className="hero-pause-btn"
            onClick={() => setIsPaused(!isPaused)}
            title={isPaused ? "Play slideshow" : "Pause slideshow"}
            aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          >
            <i className={isPaused ? "ri-play-fill" : "ri-pause-fill"} />
          </button>
        </div>
      </div>

      {/* Section Bottom Curve Transition */}
      <div className="hero-bottom-curve" aria-hidden="true">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          preserveAspectRatio="none"
          className="hero-curve-svg"
        >
          <path
            d="M0,0 C320,60 1120,60 1440,0 L1440,80 L0,80 Z"
            fill="var(--bg-main)"
          />
        </svg>
      </div>
    </section>
  );
};

export default Intro;
