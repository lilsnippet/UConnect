import Image from "next/image";

const pathwaySteps = [
  {
    label: "Tier 1",
    title: "Choose your direction",
    description:
      "Understand degree options, possible majors, and how your goals connect to a U.S. study plan.",
    access: "Free",
  },
  {
    label: "Tier 2",
    title: "Plan your budget",
    description:
      "Learn what to consider before comparing tuition, living costs, scholarships, and family support.",
    access: "Free",
  },
  {
    label: "Tier 3",
    title: "Start your shortlist",
    description:
      "Build a practical college list based on fit, affordability, location, and admissions requirements.",
    access: "Free",
  },
  {
    label: "Tiers 4-10",
    title: "Complete the pathway",
    description:
      "Get deeper admissions guidance, templates, downloads, and community access as UConnect grows.",
    access: "Paid later",
  },
];

const supportItems = [
  "Admissions roadmap",
  "Major and college planning",
  "Budget preparation",
  "Templates and PDFs",
  "Community connections",
  "Step-by-step guidance",
];

const journeySteps = [
  {
    number: "01",
    title: "Find your goal",
    text: "Start with the degree, field, and outcome you are actually aiming for.",
  },
  {
    number: "02",
    title: "Build your plan",
    text: "Compare budget, timeline, college fit, and the documents you will need.",
  },
  {
    number: "03",
    title: "Move with clarity",
    text: "Follow the pathway with guides, templates, and community support as it grows.",
  },
];

const audienceCards = [
  {
    title: "Bachelor's applicants",
    text: "For students finishing high school and trying to choose a major, understand costs, and start a practical U.S. college shortlist.",
  },
  {
    title: "Master's applicants",
    text: "For students planning graduate study and looking for a clearer way to compare programs, requirements, timelines, and funding options.",
  },
];

const resourcePreviews = [
  "College shortlist worksheet",
  "Budget planning template",
  "Major decision guide",
  "Admissions document checklist",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="text-xl font-bold tracking-tight">
            U<span className="text-[#00aeb3]">Connect</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a className="transition hover:text-[#007f86]" href="#about">
              About
            </a>
            <a className="transition hover:text-[#007f86]" href="#pathway">
              Getting Started
            </a>
            <a className="transition hover:text-[#007f86]" href="#interest">
              Contact
            </a>
          </div>
          <a href="#pathway" className="minimal-button minimal-button-dark h-10 px-5">
            Get Started
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate flex min-h-[82svh] items-center overflow-hidden bg-slate-950 px-5 py-16 sm:px-8"
      >
        <Image
          src="/uconnect-hero.png"
          alt="International students planning their U.S. study pathway"
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/88 via-slate-950/58 to-slate-950/12" />
        <div className="mx-auto w-full max-w-7xl">
          <div className="max-w-2xl pt-8 text-white">
            <p className="mb-5 inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-cyan-50 backdrop-blur">
              A clearer path to studying in the U.S.
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-normal sm:text-6xl lg:text-7xl">
              UConnect
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-cyan-50 sm:text-xl">
              Step-by-step guidance for international students applying to U.S.
              bachelor&apos;s and master&apos;s programs, starting with the
              decisions that matter most.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#pathway" className="minimal-button minimal-button-light h-12 px-6">
                Start the pathway
              </a>
              <a
                href="#about"
                className="minimal-button h-12 border-white/45 px-6 text-white hover:border-white hover:bg-white/10"
              >
                Learn what we offer
              </a>
            </div>
          </div>
        </div>
        <a
          aria-label="Scroll to about UConnect"
          className="scroll-cue absolute bottom-8 left-1/2 hidden -translate-x-1/2 text-white/80 sm:block"
          href="#about"
        >
          <span />
        </a>
      </section>

      <section id="about" className="fade-section bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#008c92]">
              Why UConnect exists
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Guidance that makes the U.S. admissions process less confusing.
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-slate-700">
            <p>
              Many students feel they have to hire expensive consultants just to
              understand admissions, paperwork, budgets, and college choices.
              UConnect is being built to make that pathway easier to follow.
            </p>
            <p>
              The first version will focus on clear free guidance, then grow
              into deeper paid content with downloads, templates, and community
              support.
            </p>
          </div>
        </div>
      </section>

      <section className="fade-section bg-slate-950 px-5 py-20 text-white sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67f3f3]">
              How the path unfolds
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
              From confused to ready, one decision at a time.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {journeySteps.map((step) => (
              <article
                className="lift-card rounded-lg border border-white/12 bg-white/[0.04] p-7"
                key={step.number}
              >
                <p className="text-sm font-bold text-[#67f3f3]">{step.number}</p>
                <h3 className="mt-8 text-2xl font-bold">{step.title}</h3>
                <p className="mt-4 text-base leading-7 text-cyan-50/80">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pathway" className="fade-section bg-[#effefe] px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#008c92]">
              Getting Started
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              A connected pathway, not random advice.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Students will move through clear tiers, beginning with free
              basics and later unlocking full guidance, templates, and community
              access.
            </p>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {pathwaySteps.map((step) => (
              <article
                className="lift-card rounded-lg border border-cyan-900/10 bg-white p-6 shadow-sm"
                key={step.label}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-bold text-[#007f86]">
                    {step.label}
                  </span>
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold text-white">
                    {step.access}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-section bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#008c92]">
              What students can expect
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Practical support for the decisions before the application.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {supportItems.map((item) => (
              <div
                className="lift-card flex min-h-16 items-center rounded-lg border border-slate-200 bg-slate-50 px-5 text-base font-semibold text-slate-800"
                key={item}
              >
                <span className="mr-3 h-2.5 w-2.5 rounded-full bg-[#00aeb3]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fade-section bg-[#f8fbff] px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {audienceCards.map((card) => (
            <article
              className="lift-card rounded-lg border border-slate-200 bg-white p-8"
              key={card.title}
            >
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#008c92]">
                Built for
              </p>
              <h2 className="mt-5 text-3xl font-bold tracking-normal text-slate-950">
                {card.title}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-700">{card.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="fade-section bg-white px-5 py-20 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#008c92]">
              Resource previews
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal text-slate-950 sm:text-5xl">
              Simple tools students can actually use.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              As the content is created, UConnect can turn confusing steps into
              practical worksheets, checklists, and guides.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {resourcePreviews.map((resource) => (
              <div
                className="lift-card group rounded-lg border border-slate-200 bg-slate-50 p-6"
                key={resource}
              >
                <div className="mb-10 h-1 w-12 rounded-full bg-[#00aeb3] transition-all duration-300 group-hover:w-20" />
                <h3 className="text-xl font-bold text-slate-950">{resource}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Planned for the first content library.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="interest"
        className="fade-section bg-slate-950 px-5 py-20 text-white sm:px-8"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#67f3f3]">
              Join early
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-normal sm:text-5xl">
              Help shape the first version of UConnect.
            </h2>
            <p className="mt-5 text-lg leading-8 text-cyan-50/85">
              The first students who join the interest list can tell us what
              guidance they need most, from choosing a major to understanding
              budgets and admissions steps.
            </p>
          </div>

          <form className="lift-card rounded-lg border border-white/12 bg-white p-6 text-slate-950 shadow-2xl shadow-cyan-950/25">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Name
                </span>
                <input
                  className="mt-2 h-12 w-full rounded-md border border-slate-300 px-4 text-base outline-none transition focus:border-[#00aeb3] focus:ring-4 focus:ring-cyan-100"
                  name="name"
                  placeholder="Your name"
                  type="text"
                />
              </label>
              <label className="block">
                <span className="text-sm font-semibold text-slate-700">
                  Email
                </span>
                <input
                  className="mt-2 h-12 w-full rounded-md border border-slate-300 px-4 text-base outline-none transition focus:border-[#00aeb3] focus:ring-4 focus:ring-cyan-100"
                  name="email"
                  placeholder="you@example.com"
                  type="email"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="text-sm font-semibold text-slate-700">
                What are you planning?
              </span>
              <select
                className="mt-2 h-12 w-full rounded-md border border-slate-300 px-4 text-base outline-none transition focus:border-[#00aeb3] focus:ring-4 focus:ring-cyan-100"
                name="goal"
              >
                <option>Bachelor&apos;s degree in the U.S.</option>
                <option>Master&apos;s degree in the U.S.</option>
                <option>Still exploring my options</option>
              </select>
            </label>
            <label className="mt-4 block">
              <span className="text-sm font-semibold text-slate-700">
                Question or goal
              </span>
              <textarea
                className="mt-2 min-h-32 w-full resize-y rounded-md border border-slate-300 px-4 py-3 text-base outline-none transition focus:border-[#00aeb3] focus:ring-4 focus:ring-cyan-100"
                name="message"
                placeholder="Tell us what you need help with first."
              />
            </label>
            <button
              className="minimal-button minimal-button-dark mt-5 h-12 w-full px-6 text-base"
              type="button"
            >
              Send interest
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
