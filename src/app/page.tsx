// app/page.tsx  (or src/app/page.tsx if you use src/)
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="section">
        <div className="container">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                Align delivery. Ship faster. Lead better.
              </h1>
              <p className="mt-4 text-lg text-slate-600">
                I help teams align product, engineering, and delivery—so you
                can move quickly without breaking trust or quality.
              </p>
              <div className="mt-6 flex gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 transition"
                >
                  Book an intro call
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center rounded-md px-4 py-2 border border-slate-300 hover:border-slate-400"
                >
                  Services
                </Link>
              </div>
            </div>
            <div className="rounded-lg border border-[var(--border)] p-6">
              <ul className="space-y-3 text-sm text-slate-700">
                <li>• Delivery frameworks that scale</li>
                <li>• Roadmapping & prioritization that sticks</li>
                <li>• Team rituals that reduce chaos</li>
                <li>• Metrics & dashboards that matter</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 pillars / Services preview */}
      <section className="section bg-[var(--bg-muted)] border-y border-[var(--border)]">
        <div className="container">
          <h2 className="text-2xl font-semibold">How I help</h2>
          <p className="mt-2 text-slate-600">
            Engagements tailored to your stage and goals.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[var(--border)] p-6">
              <h3 className="font-semibold">Delivery Systems</h3>
              <p className="mt-2 text-slate-600">
                Light-weight, repeatable delivery rituals. Establish clear
                owner loops, demo cadence, and release hygiene.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] p-6">
              <h3 className="font-semibold">Product & Prioritization</h3>
              <p className="mt-2 text-slate-600">
                Shape work, de-risk unknowns, clarify scope. Stop thrash and
                ship what moves the needle.
              </p>
            </div>
            <div className="rounded-lg border border-[var(--border)] p-6">
              <h3 className="font-semibold">Org & Leadership Coaching</h3>
              <p className="mt-2 text-slate-600">
                1:1s, staff mentoring, interviewing, onboarding, and team
                alignment—built for sustainable pace.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="/services"
              className="text-blue-600 hover:underline"
            >
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* Case teasers */}
      <section className="section">
        <div className="container">
          <h2 className="text-2xl font-semibold">Selected work</h2>
          <p className="mt-2 text-slate-600">
            A few examples of outcomes and impact.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-lg border border-[var(--border)] p-6">
              <header className="flex items-baseline justify-between">
                <h3 className="font-semibold">Mobile growth platform</h3>
                <span className="text-xs text-slate-500">Case study</span>
              </header>
              <p className="mt-2 text-slate-600">
                Rebuilt delivery flow and release cadence; cut cycle time by 38%
                and increased on-time releases to 92%.
              </p>
              <Link href="/cases" className="mt-3 inline-block text-blue-600 hover:underline">
                Read more →
              </Link>
            </article>

            <article className="rounded-lg border border-[var(--border)] p-6">
              <header className="flex items-baseline justify-between">
                <h3 className="font-semibold">Data product initiative</h3>
                <span className="text-xs text-slate-500">Case study</span>
              </header>
              <p className="mt-2 text-slate-600">
                Introduced shaping & discovery track; reduced rework by 45% and
                aligned exec stakeholders on quarterly priorities.
              </p>
              <Link href="/cases" className="mt-3 inline-block text-blue-600 hover:underline">
                Read more →
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--bg-muted)] border-t border-[var(--border)]">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s align your roadmap and delivery.
          </h2>
          <p className="mt-3 text-slate-600">
            Quick intro call to map goals and the fastest path to impact.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
