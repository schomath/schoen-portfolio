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
  },
  {
    key: 'curriculum-development',
    label: 'Curriculum Development',
    summary: 'Course design, assessment planning, and evidence of reflective iteration.',
  },
  {
    key: 'beyond-the-classroom',
    label: 'Beyond the Classroom',
    summary: 'Mentoring, leadership, outreach, and the broader impact of your work.',
  },
  {
    key: 'letters-of-support',
    label: 'Letters of Support',
    summary: 'Testimonials and letters that affirm teaching excellence and collaboration.',
  },
] as const;

const homepageHighlights = [
  {
    title: 'Thoughtful pedagogy',
    text: 'A calm, editorial layout centers teaching philosophy, classroom practice, and the long arc of student growth.',
  },
  {
    title: 'Evidence-driven reflection',
    text: 'Structured content blocks create space for course design, feedback, outcomes, and continuous refinement.',
  },
  {
    title: 'Professional narrative',
    text: 'The page balances warmth with rigor so portfolio materials feel both personal and institutionally polished.',
  },
];

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

function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12">
      <section className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f8f5ef] shadow-[0_24px_80px_rgba(38,27,18,0.08)]">
        <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.3fr_0.9fr] lg:px-14 lg:py-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Teaching Portfolio</p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[#1f1a17] sm:text-6xl lg:text-7xl">
                  A warm, editorial portfolio for reflective teaching practice.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-black/65 sm:text-lg">
                  Inspired by the understated pacing and layered card layout of the reference page, this homepage introduces
                  your teaching story through soft contrast, generous spacing, and curated sections that feel both modern and human.
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

      <section className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
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

      <section
        id="portfolio-links"
        className="rounded-[2rem] border border-black/5 bg-[#1f1a17] px-6 py-8 text-white shadow-[0_24px_80px_rgba(38,27,18,0.18)] sm:px-10 sm:py-10"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-white/45">Portfolio Pages</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em]">Explore the supporting materials.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65">
            Replacing the original bottom cards, these links now open four dedicated pages that you can fill in later.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {linkCards.map((card) => (
            <a
              key={card.key}
              href={`#/${card.key}`}
              className="group flex h-full flex-col justify-between rounded-[1.5rem] border border-white/10 bg-white/6 p-6 hover:-translate-y-1 hover:border-white/25 hover:bg-white/10"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">Open page</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white">{card.label}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{card.summary}</p>
              </div>
              <span className="mt-8 text-sm font-medium text-white/80 group-hover:text-white">View section →</span>
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
    <div className="min-h-screen bg-[#efe7dc] text-[#1f1a17]">
      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 pb-2 pt-6 sm:px-10 lg:px-12">
        <a href="#/" className="text-sm font-semibold uppercase tracking-[0.35em] text-black/55 hover:text-black">
          Schoen Portfolio
        </a>
        <a
          href={page === 'home' ? '#/cv' : '#/'}
          className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-[#1f1a17] hover:-translate-y-0.5 hover:border-black/25 hover:bg-white/70"
        >
          {page === 'home' ? 'Open CV' : 'Return home'}
        </a>
      </header>

      {page === 'home' ? <HomePage /> : <DetailPage page={page} />}
    </div>
  );
}
