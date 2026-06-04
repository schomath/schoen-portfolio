import React, { useEffect, useState } from 'react';

type PageKey = 'home' | 'cv' | 'curriculum-development' | 'beyond-the-classroom' | 'letters-of-support';

type PageDetails = {
  eyebrow: string;
  title: string;
  description: string;
};

const pageDetails: Record<Exclude<PageKey, 'home'>, PageDetails> = {
  cv: {
    eyebrow: 'Professional Record',
    title: 'Curriculum Vitae',
    description: 'A dedicated space for your academic appointments, publications, teaching record, and service history.',
  },
  'curriculum-development': {
    eyebrow: 'Course Design',
    title: 'Curriculum Development',
    description: 'A future page for syllabi, course revisions, assessment design, and evidence of pedagogical planning.',
  },
  'beyond-the-classroom': {
    eyebrow: 'Community Impact',
    title: 'Beyond the Classroom',
    description: 'A placeholder for mentoring, outreach, leadership, collaboration, and work that extends past formal instruction.',
  },
  'letters-of-support': {
    eyebrow: 'Endorsements',
    title: 'Letters of Support',
    description: 'A reserved page for colleague, student, and community letters that speak to teaching and professional impact.',
  },
};

const linkCards = [
  {
    key: 'cv',
    label: 'CV',
    summary: 'Academic appointments, publications, teaching history, and service in one place.',
    image:
      'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'curriculum-development',
    label: 'Curriculum Development',
    summary: 'Course design, assessment planning, and evidence of reflective iteration.',
    image:
      'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'beyond-the-classroom',
    label: 'Beyond the Classroom',
    summary: 'Mentoring, leadership, outreach, and the broader impact of your work.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80',
  },
  {
    key: 'letters-of-support',
    label: 'Letters of Support',
    summary: 'Testimonials and letters that affirm teaching excellence and collaboration.',
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
] as const;

const equationParticles = [
  { text: 'f(x)=x^2', x: '7%', duration: '26s', delay: '-7s', drift: '-60px', size: '0.95rem' },
  { text: 'e^(i*pi)+1=0', x: '17%', duration: '31s', delay: '-18s', drift: '45px', size: '1rem' },
  { text: 'int_0^1 x dx', x: '28%', duration: '29s', delay: '-2s', drift: '-40px', size: '0.88rem' },
  { text: 'lim_{h->0}', x: '39%', duration: '34s', delay: '-14s', drift: '62px', size: '0.9rem' },
  { text: 'sin(theta)', x: '51%', duration: '28s', delay: '-5s', drift: '-55px', size: '1.06rem' },
  { text: 'sum_{n=1}^inf', x: '63%', duration: '35s', delay: '-21s', drift: '40px', size: '0.9rem' },
  { text: 'P(A|B)', x: '73%', duration: '30s', delay: '-11s', drift: '-30px', size: '0.92rem' },
  { text: 'grad f', x: '84%', duration: '27s', delay: '-15s', drift: '50px', size: '0.96rem' },
  { text: 'x(t)=Acos(omega t)', x: '92%', duration: '33s', delay: '-9s', drift: '-48px', size: '0.9rem' },
] as const;

const waveParticles = [
  { top: '16%', duration: '24s', delay: '-8s', opacity: 0.22, stroke: 1.9 },
  { top: '42%', duration: '31s', delay: '-15s', opacity: 0.16, stroke: 2.5 },
  { top: '68%', duration: '27s', delay: '-3s', opacity: 0.2, stroke: 1.6 },
  { top: '83%', duration: '34s', delay: '-22s', opacity: 0.14, stroke: 2.2 },
] as const;

const floatingImageParticles = [
  // Add image paths here to enable floating image particles.
  // Example: `${import.meta.env.BASE_URL}img/my-photo.jpg`
] as const;

function getCurrentPage(): PageKey {
  const rawHash = window.location.hash.replace(/^#\/?/, '');
  if (!rawHash) {
    return 'home';
  }

  if (rawHash in pageDetails) {
    return rawHash as Exclude<PageKey, 'home'>;
  }

  return 'home';
}

function scrollToLinks() {
  document.getElementById('portfolio-links')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(255,255,255,0.08),transparent_36%),radial-gradient(circle_at_80%_9%,rgba(99,146,178,0.12),transparent_34%),radial-gradient(circle_at_77%_82%,rgba(250,245,228,0.07),transparent_32%)]" />

      {waveParticles.map((wave, index) => (
        <svg
          key={`${wave.top}-${index}`}
          className="sine-wave"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          style={{
            top: wave.top,
            animationDuration: wave.duration,
            animationDelay: wave.delay,
            opacity: wave.opacity,
          }}
        >
          <path
            className="sine-wave-path"
            d="M0 60 C 100 15, 200 105, 300 60 C 400 15, 500 105, 600 60 C 700 15, 800 105, 900 60 C 1000 15, 1100 105, 1200 60"
            style={{ strokeWidth: wave.stroke }}
          />
        </svg>
      ))}

      {equationParticles.map((equation) => (
        <span
          key={`${equation.text}-${equation.x}`}
          className="floating-equation"
          style={{
            left: equation.x,
            animationDuration: equation.duration,
            animationDelay: equation.delay,
            ['--drift' as string]: equation.drift,
            ['--size' as string]: equation.size,
          }}
        >
          {equation.text}
        </span>
      ))}

      {floatingImageParticles.map((imageSrc, index) => (
        <img
          key={`${imageSrc}-${index}`}
          src={imageSrc}
          alt=""
          className="floating-image"
          style={{
            left: `${12 + (index % 5) * 17}%`,
            animationDuration: `${22 + (index % 4) * 4}s`,
            animationDelay: `${-index * 3}s`,
          }}
          loading="lazy"
        />
      ))}
    </div>
  );
}

function HomePage() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const maxDistance = Math.max(window.innerHeight * 0.18, 90);
      const progress = Math.min(window.scrollY / maxDistance, 1);
      setScrollProgress(progress);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const dramaticProgress = 1 - Math.pow(1 - scrollProgress, 3.2);

  const heroScale = 1 - dramaticProgress * 0.34;
  const heroBlur = dramaticProgress * 18;
  const heroOpacity = 1 - dramaticProgress * 0.9;

  const cardsTranslateY = (1 - dramaticProgress) * 140;
  const cardsScale = 0.74 + dramaticProgress * 0.26;
  const cardsBlur = Math.max(0, (1 - dramaticProgress) * 16);
  const cardsOpacity = 0.04 + dramaticProgress * 0.96;

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12">
      <section
        className="hero-scroll-card sticky top-24 z-[1] overflow-hidden rounded-[2rem] border border-black/5 bg-[#f8f5ef] shadow-[0_24px_80px_rgba(38,27,18,0.08)]"
        style={{
          transform: `scale(${heroScale})`,
          filter: `blur(${heroBlur}px) saturate(${1 - dramaticProgress * 0.32})`,
          opacity: heroOpacity,
        }}
      >
        <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.3fr_0.9fr] lg:px-14 lg:py-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Teaching Portfolio</p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[#1f1a17] sm:text-6xl lg:text-7xl">
                  Mathias A. Schoen Tenure Track Teaching Portfolio
                </h1>
                <p className="max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
                  Hello and welcome! My name is Mathias, a mechatronics and engineering teacher with a passion for demonstrating the beautiful dances of technology and mathematics. This portfolio serves as a reflection of a longstanding dream I have had to create to share 
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToLinks}
                className="rounded-full bg-[#1f1a17] px-6 py-3 text-sm font-medium text-white hover:-translate-y-0.5 hover:bg-black"
              >
                Explore portfolio sections
              </button>
              <a
                href="#/cv"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-medium text-[#1f1a17] hover:-translate-y-0.5 hover:border-black/25 hover:bg-white/70"
              >
                Open CV page
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] bg-[#ebe4db] p-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-[1.5rem] bg-[#1f1a17] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Focus</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Student-centered, evidence-based teaching</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Use this space to foreground a clear philosophy and show how reflection shapes course design, classroom culture,
                and assessment.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white/75 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-black/40">Structure</p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-black/65">
                <li>Selected highlights and guiding themes</li>
                <li>Curated supporting documents and portfolio pages</li>
                <li>Room to expand the narrative over time</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <button
        type="button"
        onClick={scrollToLinks}
        className="mx-auto -mt-2 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/8 px-4 py-2 text-xs uppercase tracking-[0.28em] text-white/80 hover:-translate-y-0.5 hover:border-white/55 hover:bg-white/14"
      >
        <span>Scroll for more</span>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-4 w-4 animate-[bounce_1.2s_ease-in-out_infinite]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="rounded-[2rem] border border-black/5 bg-white/70 p-8 shadow-[0_20px_60px_rgba(38,27,18,0.06)]">
          <p className="text-sm uppercase tracking-[0.32em] text-black/45">Overview</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#1f1a17]">A homepage built like a curated studio profile.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-black/65">
            The composition mirrors a contemporary Framer portfolio: oversized typography, softened neutral tones, asymmetric
            cards, and a measured rhythm between narrative content and navigation. It is ready to become a tenure or teaching dossier.
          </p>
        </article>

        <article className="rounded-[2rem] border border-black/5 bg-[#e7ddd2] p-8 shadow-[0_20px_60px_rgba(38,27,18,0.06)]">
          <p className="text-sm uppercase tracking-[0.32em] text-black/45">Intent</p>
          <p className="mt-4 text-lg leading-8 text-[#1f1a17]">
            Clear hierarchy, tactile cards, and restrained motion keep the experience polished while leaving the focus on your work.
          </p>
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {homepageHighlights.map((highlight) => (
          <article
            key={highlight.title}
            className="rounded-[1.75rem] border border-black/5 bg-white/80 p-6 shadow-[0_16px_40px_rgba(38,27,18,0.05)]"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-black/40">Highlight</p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1f1a17]">{highlight.title}</h3>
            <p className="mt-3 text-sm leading-6 text-black/65">{highlight.text}</p>
          </article>
        ))}
      </section>

      */}

      <section
        id="portfolio-links"
        className="cards-pop-zone px-2 py-2 sm:px-4 sm:py-4"
        style={{
          transform: `translate3d(0, ${cardsTranslateY}px, 0) scale(${cardsScale})`,
          filter: `blur(${cardsBlur}px)`,
          opacity: cardsOpacity,
        }}
      >
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {linkCards.map((card) => (
            <a
              key={card.key}
              href={`#/${card.key}`}
              className={`group flex h-full flex-col overflow-hidden rounded-[1.5rem] bg-white/35 p-3 shadow-[0_20px_50px_rgba(31,26,23,0.12)] backdrop-blur-xl transition-all hover:-translate-y-1 hover:border-white/75 hover:bg-white/45 ${
                card.key === 'cv'
                  ? '-rotate-2'
                  : card.key === 'curriculum-development'
                    ? 'rotate-1'
                    : card.key === 'beyond-the-classroom'
                      ? '-rotate-1'
                      : 'rotate-2'
              }`}
            >
              <img
                src={card.image}
                alt={`${card.label} preview`}
                className="h-36 w-full rounded-[1.15rem] object-cover"
                loading="lazy"
              />
              <div className="mt-4 flex flex-1 flex-col px-3 pb-3">
                <p className="text-xs uppercase tracking-[0.3em] text-black/40">Open page</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#1f1a17]">{card.label}</h3>
                <p className="mt-3 text-sm leading-6 text-black/65">{card.summary}</p>
                <span className="mt-8 text-sm font-medium text-black/70 group-hover:text-black">View section →</span>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function DetailPage({ page }: { page: Exclude<PageKey, 'home'> }) {
  const details = pageDetails[page];

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-6 py-10 sm:px-10 lg:px-12">
      <section className="rounded-[2rem] border border-black/5 bg-[#f8f5ef] p-8 shadow-[0_24px_80px_rgba(38,27,18,0.08)] sm:p-12">
        <a
          href="#/"
          className="inline-flex rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#1f1a17] hover:-translate-y-0.5 hover:border-black/25 hover:bg-white/70"
        >
          ← Back to homepage
        </a>
        <p className="mt-8 text-sm uppercase tracking-[0.32em] text-black/45">{details.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#1f1a17] sm:text-5xl">{details.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-black/65 sm:text-lg">{details.description}</p>

        <div className="mt-10 rounded-[1.5rem] border border-dashed border-black/10 bg-white/70 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-black/40">Placeholder</p>
          <p className="mt-4 text-base leading-7 text-black/65">
            This page is intentionally ready for future content. Add your materials, narrative, and supporting documentation when
            you are ready.
          </p>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  const [page, setPage] = useState<PageKey>(() => getCurrentPage());

  useEffect(() => {
    const syncPage = () => setPage(getCurrentPage());

    window.addEventListener('hashchange', syncPage);
    syncPage();

    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  return (
    <div className="portfolio-page-bg relative min-h-screen text-[#1f1a17]">
      <AnimatedBackground />

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-2 pt-6 sm:px-10 lg:px-12">
          <a href="#/" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/70 hover:text-white">
            Portfolio
          </a>
          <a
            href={page === 'home' ? '#/cv' : '#/'}
            className="rounded-full border border-white/25 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 hover:-translate-y-0.5 hover:border-white/45 hover:bg-white/12"
          >
            {page === 'home' ? 'Open CV' : 'Return home'}
          </a>
        </header>

        {page === 'home' ? <HomePage /> : <DetailPage page={page} />}
      </div>
    </div>
  );
}
