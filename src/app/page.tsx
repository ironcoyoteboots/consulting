import Link from "next/link";
import Pillars from "./components/pillars";

export default function Home() {
  return (
    <>
      {/* HERO: full-bleed image, shorter height, content constrained to container */}
      <section className="relative w-screen h-[60vh] md:h-[70vh] overflow-hidden left-1/2 right-1/2 -mx-[50vw]">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="/images/hikers.jpg"
            alt="Aligned hikers on a mountain trail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute bottom-0 left-0 right-0 h-2 md:h-2 bg-gradient-to-b from-transparent to-white" />
        </div>

        {/* Overlay content constrained to the same width as the rest of the page */}
        <div className="relative z-10 flex h-full items-start pt-12 md:pt-18">
          <div className="container text-center">
            <div className="mx-auto max-w-5xl px-4 -mt-2 md:-mt-2">
              <h1 className="font-bold leading-tight mb-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]
                             text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
                Helping leaders and teams align{" "}
                <span className="text-cyan-400">vision</span>,{" "}
                <span className="text-cyan-400">process</span> and{" "}
                <span className="text-cyan-400">delivery</span>.
              </h1>
              <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-100 mt-13">
                When people are aligned, work flows, decisions stick, and results follow.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-cyan-500 text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-cyan-700 text-sm md:text-lg"
                >
                  Schedule a call
                </Link>
                <Link
                  href="/services"
                  className="border border-white text-white font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-white/10 text-sm md:text-lg"
                >
                  See services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BELOW-THE-FOLD CONTENT (centered like before) */}
      <main className="container py-16 md:py-20 space-y-24">
        <section>
          <h2 className="text-3xl font-semibold tracking-tight mb-4 text-gray-500">
            Growth brings complexity. It becomes harder to stay <span className="text-cyan-600">aligned.</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Most slowdowns aren’t about talent. They’re about alignment.
            I partner with teams to spot where priorities or communication have slipped out of sync,
            then we refine delivery together until engagement, momentum, and predictability return.
          </p>
        </section>

        <Pillars />

        {/* --- Promise --- */}
        <section className="container">
          <div className="mx-auto max-w-2xl text-center">
            <div className="h-px bg-gray-200 mb-8" />
            <h2 className="text-2xl font-semibold text-gray-600">The Align Commitment</h2>
            <p className="mt-2 text-base text-gray-600">
              A simple promise - if you don’t see value in the first month, you don’t pay.
            </p>
          </div>
        </section>

        {/* --- CTA --- */}
        <section className="container text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-600">
            Ready to bring alignment to your team?
          </h3>
          <p className="mt-3 text-gray-600">
            Let’s talk about what’s working, what’s not, and where clarity could unlock your next level.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="inline-block bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-700 text-lg transition-colors"
            >
              Let’s talk
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}
