import React, { useRef, useState, useEffect } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

const BRAND_GREEN = "#4b9f53";

/* ------------ Single FAQ row (accordion item) ------------ */
function FAQItem({ id, isOpen, onToggle, question, answer }) {
  const bodyRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (!bodyRef.current) return;
    // set to natural height when open; zero when closed
    setHeight(isOpen ? bodyRef.current.scrollHeight : 0);
  }, [isOpen, question, answer]);

  return (
    <div className="rounded-2xl bg-white shadow-lg ring-1 ring-black/5">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 rounded-2xl px-6 py-5 text-left"
      >
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{question}</h3>
        <span
          className="grid h-8 w-8 place-items-center rounded-full border"
          style={{ borderColor: "rgba(0,0,0,0.08)", color: isOpen ? BRAND_GREEN : "#5f9ea0" }}
        >
          {isOpen ? <IoRemoveOutline size={20} /> : <IoAddOutline size={20} />}
        </span>
      </button>

      {/* animated body */}
      <div
        id={`faq-panel-${id}`}
        ref={bodyRef}
        style={{ maxHeight: height }}
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
      >
        <div className="px-6 pb-6 pt-0 text-[15px] leading-relaxed text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

/* ---------------------------- Section ---------------------------- */
export default function FAQSection() {
  const faqs = [
    {
      q: "How quickly can I set up Dialflo?",
      a: "You can have Dialflo up and running within 24 hours. Simply connect your business number, customize your AI agent's voice and personality, and you're ready to start serving customers.",
    },
    {
      q: "What languages does Dialflo support?",
      a: "Dialflo supports 10+ Indian languages including Hindi, English, Tamil, Telugu, Bengali, Marathi, Gujarati, Kannada, Malayalam, and Punjabi, ensuring you can connect with customers in their preferred language.",
    },
    {
      q: "Is my data secure with Dialflo?",
      a: "Absolutely. We use end-to-end encryption for all communications. Your customer data is protected with enterprise-grade security, and we comply with all major data protection regulations.",
    },
    {
      q: "Can I customize the AI agent's voice?",
      a: "Yes! You can customize your AI agent's voice, tone, personality, and responses to match your brand. Our AI learns from your business context to provide personalized customer interactions.",
    },
    {
      q: "What's included in the free plan?",
      a: "The free plan includes AI voice agents for your first 100 customers, basic multilingual support, 24/7 availability, and standard integrations. Perfect for startups and small businesses getting started.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="faq" className="bg-[#f7f9fb] py-16 sm:py-24">
      <div className="mx-auto w-11/12 max-w-5xl">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="mt-3 text-center text-gray-500">
          Everything you need to know about Dialflo
        </p>

        <div className="mt-8 space-y-5">
          {faqs.map((item, i) => (
            <FAQItem
              key={item.q}
              id={i}
              question={item.q}
              answer={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>

      {/* subtle accent for the plus/minus when focused/hovered */}
      <style>{`
        #faq .ring-1 { border-color: rgba(0,0,0,0.05) }
        #faq button:focus-visible { outline: 3px solid ${BRAND_GREEN}33; outline-offset: 2px; }
      `}</style>
    </section>
  );
}
