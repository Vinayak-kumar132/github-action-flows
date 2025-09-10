import React from "react";
import { IoCheckmarkCircle } from "react-icons/io5";

const BRAND_GREEN = "#4b9f53";

/* ---------- Reusable bits ---------- */
function Feature({ children, invert = false }) {
  return (
    <li className="flex items-start gap-3">
      <IoCheckmarkCircle
        className="mt-0.5 text-lg shrink-0"
        style={{ color: invert ? "white" : BRAND_GREEN, opacity: invert ? 0.95 : 1 }}
      />
      <span className={invert ? "text-white/95" : "text-gray-700"}>{children}</span>
    </li>
  );
}

function CTAButton({ label, variant = "outline", full = false }) {
  const base = "rounded-xl px-6 py-3 font-semibold transition shadow-sm";

  const handleClick = () => {
    window.open("https://calendly.com/abhishek-dialflo/30min", "_blank");
  };

  if (variant === "solid") {
    return (
      <button
        onClick={handleClick}
        className={`${base} text-white hover:brightness-95`}
        style={{ backgroundColor: BRAND_GREEN, width: full ? "100%" : undefined }}
      >
        {label}
      </button>
    );
  }

  if (variant === "ghostOnSolid") {
    return (
      <button
      onClick={handleClick}
        className={`${base} bg-white text-gray-900 hover:bg-white/90`}
        style={{ width: full ? "100%" : undefined }}
      >
        {label}
      </button>
    );
  }

  // ----- OUTLINE (updated) -----
  return (
    <button
      onClick={handleClick}
      className={`${base} border-2 text-[color:var(--c)] hover:bg-[var(--c)] hover:text-white`}
      style={{
        "--c": BRAND_GREEN,            // CSS variable for brand green
        borderColor: BRAND_GREEN,
        width: full ? "100%" : undefined,
      }}
    >
      {label}
    </button>
  );
}


/* ---------- Card ---------- */
function PricingCard({
  title,
  priceLabel,
  subLabel = "per month",
  features,
  variant = "outline", 
  ctaLabel,
  popular = false,
}) {
  const solid = variant === "solid";
  return (
    <div
      className={`relative rounded-3xl p-8 shadow-xl transition hover:shadow-2xl ${
        solid
          ? "text-white"
          : "bg-white text-gray-900 ring-1 ring-black/5"
      }`}
      style={
        solid
          ? {
              background:
                "linear-gradient(180deg, #2f8d4a 0%, #2a7c42 35%, #276f3d 100%)",
            }
          : {}
      }
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-yellow-400 px-3 py-1 text-xs font-extrabold text-black shadow">
            POPULAR
          </span>
        </div>
      )}

      <h3 className={`text-2xl font-bold ${solid ? "text-white" : "text-gray-900"}`}>
        {title}
      </h3>

      <div className="mt-4">
        <div className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          {priceLabel}
        </div>
        <div className={`mt-1 text-sm ${solid ? "text-white/80" : "text-gray-500"}`}>
          {subLabel}
        </div>
      </div>

      <ul className={`mt-6 space-y-4 text-[15px] ${solid ? "text-white" : "text-gray-700"}`}>
        {features.map((f, i) => (
          <Feature key={i} invert={solid}>
            {f}
          </Feature>
        ))}
      </ul>

      <div className="mt-8">
        {solid ? (
          <CTAButton label={ctaLabel} variant="ghostOnSolid" full />
        ) : (
          <CTAButton label={ctaLabel} variant={variant === "bordered" ? "outline" : "outline"} full />
        )}
      </div>
    </div>
  );
}

/* ---------- Section ---------- */
export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-gray-900">
          Simple, Transparent Pricing
        </h2>
        <p className="mt-3 text-center text-gray-500">
          Choose the plan that fits your business needs
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Starter */}
          <PricingCard
            title="Starter"
            priceLabel="₹9,999"
            features={[
              "Up to 2,000 calls/month",
              "5 languages support",
              "Basic analytics",
              "Email support",
            ]}
            variant="outline"
            ctaLabel="Get Started"
          />

          {/* Professional (Popular, solid green) */}
            <div className="relative">
              <PricingCard
                title="Professional"
                priceLabel="₹24,999"
                features={[
                  "Up to 5,000 calls/month",
                  "10+ languages support",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                ]}
                variant="solid"
                ctaLabel="Start Free Trial"
                popular
              />
            </div>

          {/* Enterprise */}
          <div
            className="rounded-3xl p-0 ring-2"
            style={{ ringColor: BRAND_GREEN, borderColor: BRAND_GREEN }}
          >
            <div className="p-8">
              <PricingCard
                title="Enterprise"
                priceLabel="Custom"
                subLabel="pricing"
                features={[
                  "Unlimited calls",
                  "All languages",
                  "Custom analytics",
                  "Dedicated support",
                  "White-label solution",
                ]}
                variant="bordered"
                ctaLabel="Contact Sales"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
