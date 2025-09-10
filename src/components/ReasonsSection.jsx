import React from "react";
import {
  IoMicOutline,
  IoTimeOutline,
  IoGlobeOutline,
  IoHeartOutline,
  IoLocationOutline,
  IoChatbubblesOutline,
  IoInfiniteOutline,
  IoAnalyticsOutline,
  IoHeadsetOutline,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";

const BRAND_GREEN = "#4b9f53";

/* ---------- Reusable Card ---------- */
function ReasonCard({ Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-black/5 transition hover:shadow-xl">
      <div
        className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(75,159,83,0.12)", color: BRAND_GREEN }}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-center text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">{desc}</p>
    </div>
  );
}

/* ---------- Data ---------- */
const REASONS = [
  {
    Icon: IoMicOutline,
    title: "AI in Your Voice",
    desc: "Personalized voice agents that sound exactly like your brand",
  },
  {
    Icon: IoTimeOutline,
    title: "Always On",
    desc: "24/7 availability ensures you never miss a customer",
  },
  {
    Icon: IoGlobeOutline,
    title: "Speak Their Language",
    desc: "Support for 10+ Indian languages and dialects",
  },
  {
    Icon: IoHeartOutline,
    title: "Truly Empathetic",
    desc: "AI that understands emotions and responds with care",
  },
  {
    Icon: IoLocationOutline,
    title: "Reach Every Corner",
    desc: "From metros to tier-3 towns, we connect everywhere",
  },
  {
    Icon: IoChatbubblesOutline,
    title: "Multimodal by Default",
    desc: "Voice for tier-2/3, Chat for tier-1 cities",
  },
  {
    Icon: IoInfiniteOutline,
    title: "Infinite Memory",
    desc: "Context-aware conversations that remember everything",
  },
  {
    Icon: IoAnalyticsOutline,
    title: "Every Interaction Counts",
    desc: "100% monitored and analyzed for continuous improvement",
  },
  {
    Icon: IoHeadsetOutline,
    title: "Listen Deeply",
    desc: "Turn customer feedback into actionable growth insights",
  },
];

/* ---------- Section Component ---------- */
export default function ReasonsSection() {
  return (
    <section className="py-16 sm:py-20" id="more-reasons">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
          More Reasons to Choose Dialflo
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r) => (
            <ReasonCard key={r.title} {...r} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href="https://calendly.com/abhishek-dialflo/30min"
            target="blank"
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold text-white shadow-lg hover:brightness-95 transition"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Try Demo
          </a>
        </div>

        {/* Footnote */}
        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
          <IoShieldCheckmarkOutline size={16} style={{ color: BRAND_GREEN }} />
          <span className="text-center">
            End-to-end encryption keeps your personal messages and calls between you and the people you
            choose. Not even Dialflo can read or listen to them.
          </span>
        </div>
      </div>
    </section>
  );
}
