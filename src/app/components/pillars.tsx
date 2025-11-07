import Link from "next/link";

export default function Pillars() {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-3 items-stretch mt-8">
        {/* Align Leadership */}
        <Link
          href="/leadership"
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
          aria-label="Learn more about Align Leadership"
        >
          <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 group-hover:border-cyan-500 group-hover:-translate-y-1">
            {/* Top content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                Align Leadership
              </h3>
              <Handshake className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
              <p className="mt-3 text-gray-700 text-base">
                Partnering with leaders and teams across product, engineering and design to create shared priorities,
                clear goals and genuine alignment on what matters most. When teams and leadership are aligned,
                direction becomes consistent and decisions get easier.
              </p>
            </div>

            {/* Bottom link */}
            <div className="mt-6 inline-flex items-center gap-2 justify-center text-cyan-600 font-semibold">
              <span>Learn more</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>

        {/* Align Delivery */}
        <Link
          href="/delivery"
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
          aria-label="Learn more about Align Delivery"
        >
          <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 group-hover:border-cyan-500 group-hover:-translate-y-1">
            {/* Top content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                Align Delivery
              </h3>
              <Waypoints className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
              <p className="mt-3 text-gray-700 text-base">
                Together we design delivery systems that fit your team, not just someone else’s playbook.
                From working agreements to visibility and flow, we bring structure without killing momentum.
              </p>
            </div>

            {/* Bottom link */}
            <div className="mt-6 inline-flex items-center gap-2 justify-center text-cyan-600 font-semibold">
              <span>Learn more</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>

        {/* Align Growth */}
        <Link
          href="/growth"
          className="group block focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-2xl"
          aria-label="Learn more about Align Growth"
        >
          <div className="border border-gray-200 rounded-2xl p-6 bg-white flex flex-col justify-between h-full transition-all duration-200 group-hover:border-cyan-500 group-hover:-translate-y-1">
            {/* Top content */}
            <div>
              <h3 className="text-lg font-semibold text-gray-500 transition-colors duration-200 group-hover:text-cyan-600 text-center">
                Align Growth
              </h3>
              <ChartSpline className="w-12 h-12 mx-auto text-cyan-500 mb-4 mt-4 transition-transform duration-200 group-hover:scale-110" />
              <p className="mt-3 text-gray-700 text-base">
                Partnering with product, project and engineering teams to strengthen how they collaborate,
                communicate and work. The result is stronger teams, better engagement, and a healthier culture.
              </p>
            </div>

            {/* Bottom link */}
            <div className="mt-6 inline-flex items-center gap-2 justify-center text-cyan-600 font-semibold">
              <span>Learn more</span>
              <span aria-hidden>→</span>
            </div>
          </div>
        </Link>
      </div>
    </section>

  );
}
