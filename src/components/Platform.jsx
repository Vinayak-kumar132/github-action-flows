import React from "react";

import platform1 from "../asset/platform1.webp";
import platform2 from "../asset/platform2.webp";
import platform3 from "../asset/platform3.webp";
import platform4 from "../asset/platform4.webp";
import platform5 from "../asset/platform5.webp";
import platform6 from "../asset/platform6.webp";
import platform7 from "../asset/platform7.webp";

const BRAND_GREEN = "#4b9f53";

export default function Platform() {
  const logos = [
    { src: platform1, alt: "Platform 1" },
    { src: platform2, alt: "Platform 2" },
    { src: platform3, alt: "Platform 3" },
    { src: platform4, alt: "Platform 4" },
    { src: platform5, alt: "Platform 5" },
    { src: platform6, alt: "Platform 6" },
    { src: platform7, alt: "Platform 7" },
  ];

  // Duplicate for seamless loop
  const track = [...logos, ...logos];

  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto w-11/12 flex flex-col gap-10 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Integrates with platforms
        </h2>

        {/* Viewport with fades */}
        <div
          className="relative mx-auto mt-8 overflow-hidden"
          style={{
            // nice soft fades on edges
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          {/* Fallback fades if mask not supported */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

          {/* Scrolling track (left -> right) */}
          <div
            className="flex w-max gap-6 sm:gap-8 will-change-transform"
            style={{
              animation: "marquee 28s linear infinite reverse",
            }}
          >
            {track.map((logo, i) => (
              <div
                key={`${logo.alt}-${i}`}
                className="rounded-2xl bg-white px-6 sm:px-8 py-4 shadow ring-1 ring-black/5"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href="https://calendly.com/abhishek-dialflo/30min"
            target="blank"
            className="inline-flex items-center justify-center rounded-xl px-8 py-3 font-semibold text-white shadow-lg"
            style={{ backgroundColor: BRAND_GREEN }}
          >
            Try Demo
          </a>
        </div>
      </div>

      {/* keyframes (component-scoped) */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); } /* reverse => left->right */
        }
      `}</style>
    </section>
  );
}
