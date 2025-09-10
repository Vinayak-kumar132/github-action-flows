import React, { useEffect, useMemo, useState } from "react";
import { RiVoiceAiLine } from "react-icons/ri";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiLanguage } from "react-icons/hi2";
import HERO_BG from "../asset/hero_section_background.jpg"
import { IoCall } from "react-icons/io5";

// ---- Branding knobs
const BRAND_GREEN = "#4b9f53"; // provided
// If you're using Next/Vite, move the image to your /public folder and change the path below accordingly.
 // change to "/hero_section_background.jpg" in your app

// ---- Typewriter (no external libs)
function Typewriter({
  phrases,
  typingSpeed = 60,
  deletingSpeed = 35,
  pauseTime = 1200,
}) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    let t;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), typingSpeed);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(current.slice(0, text.length - 1)), deletingSpeed);
    } else {
      t = setTimeout(() => {
        if (!deleting) setDeleting(true);
        else {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
        }
      }, pauseTime);
    }
    return () => clearTimeout(t);
  }, [text, deleting, index, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="align-middle" style={{ color: BRAND_GREEN }}>
      {text}
      <span
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-gray-900 align-middle"
        style={{ height: "1em" }}
      />
    </span>
  );
}


// Custom Category Dropdown with green highlight like the screenshot
function CategoryDropdown({ value, onChange }) {
  const [open, setOpen] = React.useState(false);
  const [hoverIndex, setHoverIndex] = React.useState(null); // track hovered item dynamically
  const ref = React.useRef(null);
  const options = ["D2C", "Logistics"];

  // Which item should be highlighted by default? (D2C / selected)
  const selectedIndex = value ? options.findIndex((o) => o === value) : 0;

  useEffect(() => {
    function onDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  // When menu opens, start with D2C (or selected) highlighted
  useEffect(() => {
    if (open) setHoverIndex(selectedIndex >= 0 ? selectedIndex : 0);
    else setHoverIndex(null);
  }, [open, selectedIndex]);

  return (
    <div className="relative flex-1 min-w-[220px]" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="h-14 w-full rounded-xl border border-gray-300 bg-white px-4 text-left text-base sm:text-lg text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-[rgba(75,159,83,0.35)] focus:border-[rgba(75,159,83,0.5)] flex items-center justify-between"
      >
        <span className={value ? "" : "text-gray-500"}>{value || "Choose Category"}</span>
        <svg
          className={`h-4 w-4 text-gray-500 transition-transform ${open ? "rotate-180" : ""}`}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-20 mt-2 w-full rounded-xl border border-gray-200 bg-white p-1 shadow-lg"
          onMouseLeave={() => setHoverIndex(selectedIndex >= 0 ? selectedIndex : 0)}
        >
          {options.map((opt, i) => {
            const isGreen = hoverIndex === null ? i === selectedIndex : i === hoverIndex;
            return (
              <li
                key={opt}
                role="option"
                aria-selected={i === selectedIndex}
                onMouseEnter={() => setHoverIndex(i)}
                onMouseDown={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`cursor-pointer rounded-lg px-4 py-2 text-base sm:text-lg transition-colors ${
                  isGreen ? "bg-[#4b9f53] text-white" : "bg-white text-gray-800"
                }`}
              >
                {opt}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default function Hero() {
  const phrases = useMemo(
    () => [
      "help your customers 24×7",
      "know the perfect moment to upsell",
      "spot loyal customers",
     
    ],
    []
  );

  const longest = useMemo(
    () => phrases.reduce((a, b) => (a.length >= b.length ? a : b), ""),
    [phrases]
  );

  //  form state must be here (NOT in Typewriter)
  const [category, setCategory] = useState(""); // "" shows placeholder
  const [phone, setPhone] = useState("");

 const onTry = (e) => {
  e.preventDefault();
  window.open("https://calendly.com/abhishek-dialflo/30min", "_blank");
};


  return (
    <section id="hero" className="relative overflow-hidden -mt-4 md:h-[calc(100vh-100px)]">
      {/* Background image layer */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="mx-auto w-11/12 max-w-7xl">
        <div className="flex items-center justify-center py-16 sm:py-20 md:py-24 lg:py-28">
          <div className="text-center">
            {/* Headline */}
            <h1 className="mx-auto max-w-5xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-relaxed tracking-normal text-gray-900">
              Voice AI Agents that…
            </h1>

            {/* Typewriter line with reserved width (no layout shift) */}
            <div className="relative mx-auto mt-3 flex justify-center">
              <div className="invisible whitespace-nowrap text-2xl sm:text-3xl md:text-4xl font-bold">
                {longest}
              </div>
              <div className="absolute inset-0 flex items-center justify-center" role="status" aria-live="polite">
                <div className="whitespace-nowrap text-xl sm:text-3xl md:text-4xl font-semibold md:font-bold">
                  <Typewriter phrases={phrases} />
                </div>
              </div>
            </div>

            {/* Promo badge */}
            <div className="mt-10 sm:mt-12 flex w-full items-center justify-center gap-2 text-sm sm:text-base">
              <span
                className="inline-flex items-center gap-2 rounded-full border bg-green-200 backdrop-blur px-4 py-1 shadow-green-800 shadow-xl"
              >
                <span
                  className="inline-block h-2 w-2 bg-green-950 rounded-full animate-ping"
                  
                />
                <span className="font-semibold">First 100 Customers Free</span>
              </span>
            </div>

            
          <form onSubmit={onTry} className="mx-auto mt-8 max-w-xl">
            <div className="flex flex-col p-8 sm:p-4 md:p-1  sm:flex-row items-stretch gap-4 md:gap-2 sm:gap-4">
                {/* Choose Category */}
                <CategoryDropdown value={category} onChange={setCategory} />

                {/* Phone Number */}
                <input
                  type="tel"
                  inputMode="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="
                    min-h-12 sm:min-h-14
                    flex-1 min-w-[180px] sm:min-w-[220px]
                    rounded-lg sm:rounded-xl
                    border border-gray-300 bg-white
                    px-3 sm:px-4
                    text-sm sm:text-lg text-gray-800
                    shadow-sm
                    focus:outline-none focus:ring-2 focus:ring-[rgba(75,159,83,0.35)] focus:border-[rgba(75,159,83,0.5)]
                  "
                />

                {/* Try Demo Button */}
                
                <button
                
                  type="submit"
                  
                  className="
                    flex gap-2 justify-center items-center
                    h-12 sm:h-14
                    shrink-0
                    rounded-lg sm:rounded-xl
                    px-4 sm:px-8
                    text-sm sm:text-base
                    font-semibold text-white
                    shadow-[0_6px_24px_rgba(75,159,83,0.3)] sm:shadow-[0_8px_32px_rgba(75,159,83,0.35)]
                    transition-transform hover:brightness-95 active:scale-[0.98]
                  "
                  style={{ backgroundColor: BRAND_GREEN }}
                >
                  
                  <IoCall className="text-xl sm:text-2xl" />
                  TRY DEMO
                 
                  
                </button>
                
              </div>
          </form>


            {/* Features */}
            <div className="mx-auto mt-10 sm:mt-24 w-full max-w-[640px] sm:max-w-[720px]">
              <ul className="grid grid-cols-1 gap-16 md:gap-20 text-gray-700 sm:grid-cols-3">
                <li className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <RiVoiceAiLine className="text-3xl" style={{ color: BRAND_GREEN }} />
                  <span className="font-bold">AI in Your Voice</span>
                </li>
                <li className="flex items-center justify-center gap-2 text-sm sm:text-base">
                  <TfiHeadphoneAlt className="text-3xl" style={{ color: BRAND_GREEN }} />
                  <span className="font-bold">Available 24/7</span>
                </li>
                <li className="flex items-center  justify-center gap-2 text-sm sm:text-base">
                  <HiLanguage className="text-3xl" style={{ color: BRAND_GREEN }} />
                  <span className="font-bold">Multilingual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
