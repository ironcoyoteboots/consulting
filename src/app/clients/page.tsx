"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const CLIENT_STORIES = [
  {
    companyName: "Influence Mobile",
    logo: "/images/influencemobile.jpg",
    summary:
      "Helped Influence Mobile bring focus and rhythm to delivery by introducing six-week cycles and small, empowered pods. Predictability, morale, and cross-team collaboration improved almost immediately.",
    context: [
      "Influence Mobile was a growth-stage mobile app company that had already gone through several funding rounds and multiple cycles of scaling. By the time I joined, the company was in a strong position and rebuilding its development organization.",
      "Their CTO was an exceptional technical leader but preferred to stay focused on technology rather than people or process. The team was running Scrum, but the ceremonies and rhythms weren’t driving the alignment or output they hoped for.",
      "I was brought in initially to coach developers who were ready for growth, and to assess the readiness of emerging team leads. That quickly expanded into coaching and mentoring the engineering organization and VP of Operations—who owned the backlog and delivery process—and partnering with her to modernize how the organization worked. Together, we defined clear working agreements, refreshed delivery processes, introduced deep work principles, and implemented leadership practices that set the team up for scale."
    ],
    opportunity: [
      "As the company grew, the team’s ambition often outpaced its focus. Engineering and product leadership were pushing multiple projects forward simultaneously, which made it difficult to maintain predictable delivery. Developers were doing great work but tended to operate in silos, with limited visibility across projects or shared ownership of outcomes.",
      "Communication between product management and engineering also needed strengthening. Priorities shifted frequently, and progress updates weren’t always surfaced early enough to adjust plans.",
      "My goal was to help the organization bring focus and rhythm to its delivery — to align around the most important initiatives, create transparency, and build a culture where teams raised challenges early and worked collaboratively toward shared goals."
    ],
    approach: [
      "To bring structure and focus, I reorganized engineering into small, three-person pods. Each pod owned its own backlog within a defined six-week delivery cycle. Leadership committed to setting priorities at the start of each cycle — and just as importantly, to protecting those priorities from change until the next planning window.",
      "While developers focused deeply on execution, product and leadership used that same six-week window to prepare the next set of initiatives. I provided ongoing coaching for product, engineering, and leadership throughout each cycle, helping the organization strengthen decision-making and cross-team alignment.",
      "For developers, I emphasized uninterrupted focus and personal growth. Through regular one-on-ones, I supported them in sharpening technical skills, improving collaboration, and building confidence in delivery.",
      "The shift was immediate — within the first cycle, the team felt supported, clear on priorities, and energized by their ability to deliver consistently."
    ],
    outcome: [
      "The results were visible across the organization. Delivery became predictable and transparent — leadership could plan confidently, and product management had a clear view of progress throughout each cycle.",
      "Developers felt supported and connected, thriving in their smaller pods and collaborating more deeply across projects. The culture shifted from individual effort to shared ownership, and morale rose noticeably.",
      "Leadership appreciated the steadiness of the new cadence, knowing when to expect releases and how to align upcoming priorities. The entire organization operated with greater focus, energy, and accountability."
    ],
    quote: {
      text: "",
      attribution: ""
    }
  },
  {
  companyName: "Hipcricket",
  logo: "/images/hipcricket.png",
  summary: "Guided Hipcricket from an early startup to a successful acquisition by building a stable SMS marketing platform, introducing delivery discipline, and turning a chaotic engineering culture into a reliable, scalable team.",
  context: [
    "Hipcricket was an emerging startup focused on mobile marketing technology, building custom SMS programs for major brands like Macy’s and MillerCoors. As a Director of Engineering, I joined during a period of fast growth but limited structure.",
    "The company’s CTO was a strong founder and visionary, but the engineering organization lacked consistent leadership, process, and quality standards. The codebase had become brittle, projects were delayed, and both leadership and clients were frustrated.",
    "I stepped in to build a foundation for sustainable growth — introducing process discipline, organizing the teams, and setting clear expectations for quality and delivery."
  ],
  opportunity: [
    "Hipcricket had talented developers but no unified system for planning, prioritizing, or maintaining quality. Projects were reactive, scope shifted constantly, and technical debt was slowing every release.",
    "The absence of structure was causing missed deadlines, poor morale, and growing tension with clients who expected faster results.",
    "There was a clear opportunity to bring in modern delivery practices and rebuild confidence — both internally and externally."
  ],
  approach: [
    "I introduced Agile delivery practices tailored to the team’s environment, including sprint planning, retrospectives, and transparent backlog management. These created rhythm and accountability where chaos had been the norm.",
    "We rebuilt the platform architecture to handle scale and reliability demands from enterprise clients, and I personally led the hiring of strong senior engineers to strengthen technical leadership.",
    "With these changes, we transformed delivery predictability, improved code quality, and aligned product and engineering around clear goals."
  ],
  outcome: [
    "Within months, projects were shipping on time and with higher stability. Client satisfaction improved significantly as bugs decreased and communication improved.",
    "Leadership gained visibility into progress and trusted the engineering team to deliver. The culture shifted from firefighting to steady, confident output.",
    "These improvements helped position Hipcricket for acquisition — a strong validation of the team’s turnaround and sustainable growth."
  ],
  quote: {
    text: "",
    attribution: ""
  }
},
{
  companyName: "MagicFlix",
  logo: "/images/magicflix.jpg",
  summary: "Joined MagicFlix as a hands-on CTO through Techstars to build out product strategy, guide outsourced engineering partners, and establish a technical foundation for growth.",
  context: [
    "MagicFlix was an early-stage startup in the children’s education and entertainment space, having completed one round of funding and accepted into the Techstars accelerator program.",
    "When I joined, the product vision was strong but the engineering execution needed structure. The team relied heavily on offshore developers and lacked consistent technical leadership to coordinate efforts.",
    "I stepped in as acting CTO to build clarity around priorities, strengthen the offshore partnership, and prepare the product for launch readiness."
  ],
  opportunity: [
    "The startup needed to move quickly without sacrificing product quality. Engineering resources were spread across multiple time zones with limited documentation and communication.",
    "Without an in-house technical leader, the team struggled to translate product direction into reliable, iterative development.",
    "My role was to bring focus, speed, and alignment between founders, designers, and developers — ensuring the roadmap stayed realistic and achievable."
  ],
  approach: [
    "I implemented lightweight Agile processes that fit the startup’s fast pace, focusing on two-week release cycles and transparent milestone tracking.",
    "To strengthen offshore execution, I created detailed product specs, improved code review practices, and established a cadence of daily communication and demo checkpoints.",
    "I also worked closely with the founding team on product-market alignment and scalability planning to ensure that technical decisions supported long-term business goals."
  ],
  outcome: [
    "The engineering process became predictable, communication improved dramatically, and the team gained confidence in hitting milestones.",
    "MagicFlix successfully graduated from Techstars with a functioning, investor-ready product and a clear plan for future scaling.",
    "The founders were able to focus on growth and partnerships knowing the technology foundation was stable and well-managed."
  ],
  quote: {
    text: "",
    attribution: ""
  }
},
{
  companyName: "Tableau",
  logo: "/images/tableau.png",
  summary: "Partnered with Tableau’s product organization to improve coordination and delivery processes across hundreds of developers, ensuring alignment between engineering and product management at scale.",
  context: [
    "At Tableau, I served in a Director-level role focused on optimizing delivery processes for a large and fast-moving engineering organization.",
    "With several hundred developers working across multiple product lines, communication between product managers and engineering teams had become complex and inconsistent.",
    "My goal was to establish clarity, predictability, and shared ownership between departments to help Tableau sustain its rapid growth while maintaining product quality."
  ],
  opportunity: [
    "The product management group was highly capable but lacked standardized frameworks for planning and communication across such a large development organization.",
    "As projects grew in scope, dependencies between teams caused confusion and missed expectations.",
    "There was a need to streamline collaboration and bring a consistent rhythm to delivery at enterprise scale."
  ],
  approach: [
    "I worked with leadership to redefine product planning cadences and align roadmaps across departments. This included introducing structured release planning and communication checkpoints between PMs and dev leads.",
    "I trained and mentored product managers on Agile and cross-functional communication best practices, helping them better partner with engineering teams.",
    "We implemented transparent progress reporting systems, which improved accountability and gave executives a clear view of development health and timelines."
  ],
  outcome: [
    "Tableau’s product and engineering alignment improved measurably, reducing friction and improving release predictability.",
    "Teams gained confidence in their planning process, and delivery velocity increased as dependencies were better managed.",
    "The structured communication models I introduced continued to scale with the organization, supporting Tableau’s continued innovation and growth."
  ],
  quote: {
    text: "",
    attribution: ""
  }
}

];

export default function ClientStoriesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const renderSection = (title: string, paragraphs?: string[]) => {
    if (!paragraphs || paragraphs.length === 0 || !paragraphs[0]) return null;
    return (
      <div className="space-y-2">
        <strong className="block">{title}:</strong>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto py-12 px-4 text-gray-600">
      <h1 className="text-xl md:text-3xl font-semibold mb-8 text-center">Client Stories</h1>

      <div className="space-y-6">
        {CLIENT_STORIES.map((client, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl shadow-sm p-6 hover:shadow-md transition"
            >
              {/* Header */}
              <div className="flex items-start sm:items-center gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-20 md:w-40 text-center"><img
                    src={client.logo}
                    alt={client.companyName}
                    className="h-16 w-auto mx-auto object-contain"
                  /></div>

                <div className="flex-1 min-w-0">
                  <h2 className="text-base md:text-xl font-semibold text-gray-800">
                    {client.companyName}
                  </h2>
                  {client.summary && (
                    <p className="text-sm text-gray-500 mt-1">
                      {client.summary}
                    </p>
                  )}

                  {/* Arrow toggle below summary */}
                  <button
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    className="mt-3 flex items-center gap-1 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                    {isOpen ? "Hide" : "More"}
                  </button>
                </div>
              </div>

              {/* Expanded content */}
              {isOpen && (
                <div className="mt-6 space-y-4 border-t pt-4">
                  {renderSection("Context", client.context)}
                  {renderSection("Opportunity", client.opportunity)}
                  {renderSection("Approach", client.approach)}
                  {renderSection("Outcome", client.outcome)}

                  {client.quote?.text && (
                    <figure className="border-l-4 border-gray-300 pl-4">
                      <blockquote className="italic">
                        “{client.quote.text}”
                      </blockquote>
                      {client.quote.attribution && (
                        <figcaption className="mt-1 text-sm text-gray-500">
                          — {client.quote.attribution}
                        </figcaption>
                      )}
                    </figure>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
