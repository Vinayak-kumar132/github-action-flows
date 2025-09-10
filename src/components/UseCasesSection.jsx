import React, { useState } from "react";
import * as Io5 from "react-icons/io5";  // Ionicons v5 (Outline/Sharp)
import * as Io from "react-icons/io";    // Old iOS set (IoIosFlash, etc.)

const BRAND_GREEN = "#4b9f53";

/* ---------------- Card ---------------- */
function UseCaseCard({ title, desc, iconName }) {
  const Icon = Io5[iconName] || Io[iconName] || Io.IoIosFlash; // <— string -> component
  return (
    <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-black/5 transition hover:shadow-2xl">
      <div
        className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full"
        style={{ backgroundColor: "rgba(75,159,83,0.12)", color: BRAND_GREEN }}
      >
        <Icon size={30} className="p-1 text-lg"/>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}

/* -------------- Tabs -------------- */
function SegmentedTabs({ value, onChange }) {
  const tabs = ["Logistics", "D2C Businesses"];
  return (
    <div className="mx-auto mt-6 inline-flex rounded-xl bg-gray-100 p-1 ring-1 ring-black/5">
      {tabs.map((t) => {
        const active = value === t;
        return (
          <button
            key={t}
            type="button"
            onClick={() => onChange(t)}
            className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition
              ${active ? "text-white shadow" : "text-gray-700 hover:text-gray-900"}`}
            style={active ? { backgroundColor: BRAND_GREEN } : {}}
          >
            {t}
          </button>
        );
      })}
    </div>
  );
}

/* -------------- Data (iconName is a STRING) -------------- */
const DATA = [
  // ---------- D2C ----------
  {
    category: "d2c",
    title: "Convert Leads Instantly",
    desc:
      "Real-time qualification & follow-ups that turn prospects into customers within minutes of their first interaction.",
    icon: "IoIosFlash", // from react-icons/io
  },
  {
    category: "d2c",
    title: "Recover Lost Sales",
    desc:
      "Abandoned cart recovery through personalized voice calls and WhatsApp messages that bring customers back.",
    icon: "IoCartOutline", // from react-icons/io5
  },
  {
    category: "d2c",
    title: "Never Miss an Order Update",
    desc:
      "24×7 order tracking updates delivered in customer's preferred language, keeping them informed at every step.",
    icon: "IoNotificationsOutline",
  },
  {
    category: "d2c",
    title: "Upsell Like a Pro",
    desc:
      "AI-powered personalized recommendations that increase average order value through intelligent cross-selling.",
    icon: "IoTrendingUpOutline",
  },
  {
    category: "d2c",
    title: "Frictionless Returns",
    desc:
      "Streamlined refunds, exchanges, and support processes with zero wait times and instant resolutions.",
    icon: "IoRefreshOutline",
  },

  // ---------- Logistics ----------
  {
    category: "logistics",
    title: "Zero-Delay Tracking",
    desc:
      "Instant shipment updates delivered the moment packages move, keeping customers informed in real-time.",
    icon: "IoCubeOutline",
  },
  {
    category: "logistics",
    title: "Smarter Rescheduling",
    desc:
      "Automated delivery and pickup reschedules that adapt to customer availability and preferences.",
    icon: "IoCalendarOutline",
  },
  {
    category: "logistics",
    title: "24×7 Customer Support",
    desc:
      "Solve customer queries instantly in 10+ languages with AI agents that never sleep.",
    icon: "IoHeadsetOutline",
  },
  {
    category: "logistics",
    title: "Driver Efficiency on Autopilot",
    desc:
      "Automated driver assignments and route optimization updates delivered via AI for maximum efficiency.",
    icon: "IoSpeedometerOutline",
  },
  {
    category: "logistics",
    title: "Proactive Issue Handling",
    desc:
      "Early issue detection and compliant capture before problems escalate, maintaining customer satisfaction.",
    icon: "IoAlertCircleOutline",
  },
];

/* -------------- Section 3 -------------- */
export default function UseCasesSection() {
  const [tab, setTab] = useState("D2C Businesses"); // default like screenshot
  const key = tab === "Logistics" ? "logistics" : "d2c";
  const items = DATA.filter((i) => i.category === key); // strict filtering

  return (
    <section id="use-cases" className="py-16 sm:py-20">
      <div className="mx-auto w-11/12 max-w-7xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          D2C First AI Use Cases
        </h2>

        <SegmentedTabs value={tab} onChange={setTab} />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <UseCaseCard
              key={`${c.category}-${c.title}`}
              title={c.title}
              desc={c.desc}
              iconName={c.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
