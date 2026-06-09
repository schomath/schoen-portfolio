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

const curriculumClasses = [
  {
    title: 'Class 01',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
    description:
      'Use this space for a short summary of the class, its goals, major assignments, and the teaching approach you used.',
  },
  {
    title: 'Class 02',
    image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=1200&q=80',
    description:
      'Add a concise explanation of the curriculum structure, assessment design, or any important revisions for this class.',
  },
  {
    title: 'Class 03',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    description:
      'Reserve this section for a class narrative, evidence of student work, or notes about the learning outcomes.',
  },
  {
    title: 'Class 04',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    description:
      'Describe the instructional design choices you made and include supporting images or artifacts underneath.',
  },
  {
    title: 'Class 05',
    image: 'https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=1200&q=80',
    description:
      'Use this panel for a class-by-class reflection, including what changed, why it changed, and what improved.',
  },
  {
    title: 'Class 06',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    description:
      'Add curriculum notes, assessment samples, handouts, or any other material that supports the class overview.',
  },
  {
    title: 'Class 07',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    description:
      'Keep room here for a narrative about sequencing, lesson planning, collaboration, or student engagement.',
  },
  {
    title: 'Class 08',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80',
    description:
      'Use the lower part of the card for additional images, screenshots, or curriculum evidence connected to this class.',
  },
  {
    title: 'Class 09',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80',
    description:
      'Add the final class summary here, along with any supporting visuals and documentation you want to highlight.',
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
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-8xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12">
      <section
        className="overflow-hidden rounded-[2rem] border border-black/5 bg-[#f8f5ef] shadow-[0_24px_80px_rgba(38,27,18,0.08)]"
      >
        <div className="grid gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-[1.3fr_0.9fr] lg:px-14 lg:py-16">
          <div className="flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-black/45">Teaching Portfolio</p>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.04em] text-[#1f1a17] sm:text-6xl lg:text-7xl">
                  Mathias A. Schoen Tenure Track Teaching Portfolio
                </h1>
                <p className="max-w-3xl text-base leading-7 text-black/65 sm:text-lg">
                  Hello and welcome! My name is Mathias Schoen, a <strong>mechatronics</strong>, <strong>robotics</strong>, and <strong>AI</strong> teacher with a passion for demonstrating the dances of technology and mathematics. This portfolio serves as a reflection of a longstanding dream of mine to not just learn fascinating engineering concepts, but to find clever and inspiring ways to teach these topics to those who would come after me.
                </p>
                <p className="max-w-3x1 text-base leading-7 text-black/65 sm:text-lg">
                  Below, you will find a link to my <strong>curriculum vitae</strong>, giving a broad overview of my professional background and achievements, followed by four categories highlighting my various contributions to teaching and learning at Edmonds College, including <strong>curriculum development, mentoring, outreach, and more</strong>. Each section is designed to provide a comprehensive view of my teaching philosophy, practices, and impact.
                </p>
                <a
                  href="#/cv"
                  className="inline-flex rounded-full border border-black/15 bg-white/65 px-5 py-2.5 text-sm font-medium text-[#1f1a17] transition-all hover:-translate-y-0.5 hover:border-black/30 hover:bg-white"
                >
                  Open CV
                </a>
              </div>
            </div>
          </div>

          <div className="grid gap-4 rounded-[1.75rem] bg-[#ebe4db] p-4 sm:grid-cols-2 lg:grid-cols-1">
            <article className="rounded-[1.5rem] bg-[#1f1a17] p-6 text-white">
              <p className="text-xs uppercase tracking-[0.3em] text-white/55">Focus</p>
              <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">Mechatronics, Robotics, AI, and Automation</h2>
              <p className="mt-4 text-sm leading-6 text-white/70">
                Modern industry demands not only a variety of skills, but the ability to learn new knowledge from the ground up. My teaching centers not only around the core concepts within these disciplines, but around the methodology of learning new topics as they emerge.
              </p>
            </article>
            <article className="rounded-[1.5rem] bg-white/75 p-6 backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.3em] text-black/70">Teaching Philosophy</p>
              <p className="mt-4 text-sm leading-6 text-black/70">As the mechatronics and engineering fields continue to evolve, it is essential that my students are not the only ones actively learning - my teaching philosophy emphasizes continuous and joint learning by providing students with a strong foundation in the basics of engineering and technology, then guiding them to explore advanced topics and real-world applications alongside their teacher.</p>
              <p className="mt-4 text-sm leading-6 text-black/70">By learning alongside their teacher, students often feel more comfortable taking risks, asking questions, and engaging deeply with the material,. Not to mention, teamwork, communication, and problem-solving skills are naturally developed in this collaborative environment.</p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="portfolio-links"
        className="px-2 py-2 sm:px-4 sm:py-4"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
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

  if (page === 'curriculum-development') {
    return <CurriculumDevelopmentPage details={details} />;
  }

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

function CurriculumDevelopmentPage({ details }: { details: PageDetails }) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-6 py-10 sm:px-10 lg:px-12">
      <section className="overflow-hidden rounded-[2rem] bg-[#f8f5ef] shadow-[0_24px_80px_rgba(38,27,18,0.08)]">
        <div className="grid gap-8 px-6 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.3fr_0.7fr] lg:items-end lg:px-12 lg:py-12">
          <div className="space-y-5">
            <p className="text-sm uppercase tracking-[0.35em] text-black/45">{details.eyebrow}</p>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold tracking-[-0.04em] text-[#1f1a17] sm:text-5xl lg:text-6xl">
                {details.title}
              </h1>
              <p className="max-w-3xl text-base leading-7 text-black/65 sm:text-lg">
                {details.description}
              </p>
            </div>
          </div>

          <div className="flex lg:justify-end">
            <a
              href="#/"
              className="inline-flex w-fit items-center rounded-full border border-black/10 bg-white/75 px-5 py-2.5 text-sm font-medium text-[#1f1a17] hover:-translate-y-0.5 hover:border-black/25 hover:bg-white"
            >
              ← Back to home
            </a>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-6">
        {curriculumClasses.map((classCard) => (
          <article
            key={classCard.title}
            className="overflow-hidden rounded-[1.75rem] bg-white/80 shadow-[0_18px_50px_rgba(31,26,23,0.1)] backdrop-blur-sm"
          >
            <img
              src={classCard.image}
              alt={`${classCard.title} preview`}
              className="block h-36 w-full object-cover sm:h-40 lg:h-44"
              loading="lazy"
            />

            <div className="space-y-4 px-5 py-5 sm:px-6 sm:py-6">
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-black/40">{classCard.title}</p>
                <h2 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#1f1a17]">Class title goes here</h2>
              </div>

              <p className="text-sm leading-6 text-black/65">{classCard.description}</p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <div className="min-h-24 rounded-[1.1rem] bg-[#f4eee6] px-3 py-3 text-xs leading-5 text-black/45">
                  Add a short description, standards, or lesson notes here.
                </div>
                <div className="min-h-24 rounded-[1.1rem] bg-[#f4eee6] px-3 py-3 text-xs leading-5 text-black/45">
                  Reserve this space for supporting images, handouts, or examples.
                </div>
              </div>
            </div>
          </article>
        ))}
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
        {page === 'home' ? <HomePage /> : <DetailPage page={page} />}
      </div>
    </div>
  );
}
