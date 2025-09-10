import React, { useMemo, useState, useEffect, useRef } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";

const BRAND_GREEN = "#4b9f53";

/* ---------- Data ---------- */
const TESTIMONIALS = [
  { name: "Arpit Dave",  role: "Founder, Smartstaff",
    quote: "Dialflo’s AI voice agents help us instantly qualify worker leads and manage thousands of calls daily—something our team could never scale manually." },
  { name: "Arunabh Sinha", role: "Founder, UClean",
    quote: "With Dialflo, our customers can now book laundry & cleaning slots 24/7, without waiting for a human agent—this has boosted our conversions significantly." },
  { name: "Tushar Bansal", role: "ONEST",
    quote: "For a fast-growing D2C brand like ONEST, Dialflo makes sure every customer query, order confirmation, and feedback call is handled seamlessly." },
  { name: "Jani Pasha",  role: "Founder, Lokal",
    quote: "Our users expect quick responses in local languages—Dialflo’s voice AI agents manage this at scale, making our engagement faster and more personalized." },
  { name: "Afsar Ahmad", role: "Founder, Gameberry",
    quote: "Dialflo ensures we never miss player feedback or support calls—improving our retention and building stronger gaming communities." },
  { name: "Ayush Agarwal", role: "Founder, Intugine",
    quote: "In logistics, speed is everything—Dialflo’s AI agents help us track shipments, update customers instantly, and save hours of manual coordination." },
];

/* ---------- Card ---------- */
function TestimonialCard({ name, role, quote, avatarSrc }) {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="relative rounded-3xl bg-white p-8 shadow-xl ring-1 ring-black/5">
        <div className="mb-5 flex items-center gap-4">
          <div className="relative h-16 w-16">
            <span
              className="absolute -inset-2 rounded-full blur-xl opacity-70"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(75,159,83,0.65) 0%, rgba(75,159,83,0.25) 60%, rgba(75,159,83,0) 100%)",
                animation: "blobPulse 5.5s ease-in-out infinite",
              }}
              aria-hidden
            />
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt={name}
                className="relative h-16 w-16 rounded-full object-cover ring-2 ring-white"
              />
            ) : (
              <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white ring-2 ring-[rgba(75,159,83,0.35)]">
                <HiOutlineUserCircle size={36} style={{ color: BRAND_GREEN }} />
              </div>
            )}
          </div>
          <div className="text-left">
            <div className="font-semibold text-gray-900">{name}</div>
            <div className="text-sm text-gray-500">{role}</div>
          </div>
        </div>

        <p className="text-lg italic leading-relaxed text-gray-700">“{quote}”</p>
      </div>
    </div>
  );
}

/* ---------- Section: autoplay + hover pause, NO buttons ---------- */
export default function TestimonialsSection() {
  const items = useMemo(() => TESTIMONIALS, []);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!paused && !prefersReduced) {
      timerRef.current = setInterval(() => {
        setIdx((i) => (i + 1) % items.length);
      }, 5000);
    }
    return () => timerRef.current && clearInterval(timerRef.current);
  }, [paused, prefersReduced, items.length]);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h2 className="text-center text-3xl sm:text-4xl mb-10 font-bold text-gray-900">
          Reviews From Great Leaders
        </h2>

        <div
          className="relative mt-10 flex items-center justify-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="relative w-full" style={{ "--brandGreen": BRAND_GREEN }}>
            {items.map((t, i) => {
              const active = i === idx;
              return (
                <div
                  key={`${t.name}-${i}`}
                  className={`absolute inset-0 mx-auto w-full transition-all duration-500 ease-out ${
                    active
                      ? "opacity-100 translate-y-0"
                      : "pointer-events-none opacity-0 translate-y-4"
                  }`}
                >
                  <TestimonialCard {...t} />
                </div>
              );
            })}
            {/* reserve height to avoid layout shift */}
            <div className="invisible">
              <TestimonialCard {...items[0]} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-20">
          <h1 className="text-7xl font-extrabold leading-relaxed" style={{ color: BRAND_GREEN }}>5X</h1>
          <p className="leading-relaxed text-sm sm:text-lg -mt-4 flex flex-nowrap">
  Increase in revenue since onboarding with <span className="font-bold">Dialflo</span>
</p>

        </div>
      </div>

      {/* blob animation */}
      <style>{`
        @keyframes blobPulse {
          0%   { transform: translate3d(0,0,0) scale(0.95);   opacity: .55; }
          33%  { transform: translate3d(4px,-6px,0) scale(1.05); opacity: .70; }
          66%  { transform: translate3d(-6px,4px,0) scale(1.02); opacity: .60; }
          100% { transform: translate3d(0,0,0) scale(0.95);   opacity: .55; }
        }
      `}</style>
    </section>
  );
}
