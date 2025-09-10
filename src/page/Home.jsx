import React from "react";
import Hero from "../components/Hero";
import UseCasesSection from "../components/UseCasesSection.jsx"
import Platform from "../components/Platform.jsx"
import TestimonialsSection from "../components/TestimonialsSection.jsx"
import ReasonsSection from "../components/ReasonsSection.jsx"
import PricingSection from "../components/PricingSection.jsx"
import FAQSection from "../components/FAQSection.jsx"
import Footer from "../components/Footer.jsx"












// ---- logo imports (update paths if needed)
import Company1 from "../asset/company1.webp";
import Company2 from "../asset/company2.webp";
import Company3 from "../asset/company3.webp";
import Company4 from "../asset/company4.webp";
import Company5 from "../asset/company5.webp";
import Company6 from "../asset/company6.webp";
import Company7 from "../asset/company7.webp";
import Company8 from "../asset/company8.webp";
import Company9 from "../asset/company9.webp";
import Company10 from "../asset/company10.webp";

const BRAND_GREEN = "#4b9f53";

const Home = () => {
  const logos = [
    { src: Company1, alt: "Company 1" },
    { src: Company2, alt: "Company 2" },
    { src: Company3, alt: "Company 3" },
    { src: Company4, alt: "Company 4" },
    { src: Company5, alt: "Company 5" },
    { src: Company6, alt: "Company 6" },
    { src: Company7, alt: "Company 7" },
    { src: Company8, alt: "Company 8" },
    { src: Company9, alt: "Company 9" },
    { src: Company10, alt: "Company 10" },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* HERO */}
      {/* section 1 */}
      <section className="w-full ">
        <Hero />
      </section>

      {/* Trusted by + Logos + CTA */}
      {/* section 2 */}
      <section className="bg-white mt-16">
        {/* local CSS: transparent bg, edge fade, uniform logo boxes, RTL marquee */}
        <style>{`
          @keyframes marquee-rtl {
            from { transform: translateX(0%); }
            to   { transform: translateX(-50%); }
          }
          .animate-marquee-rtl { animation: marquee-rtl 36s linear infinite; }
          @media (min-width: 640px) { .animate-marquee-rtl { animation-duration: 40s; } }
          @media (min-width: 1024px) { .animate-marquee-rtl { animation-duration: 46s; } }

          /* fade the edges without adding any background color */
          .edge-fade {
            -webkit-mask-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, black 8%, black 92%, rgba(0,0,0,0) 100%);
                    mask-image: linear-gradient(90deg, rgba(0,0,0,0) 0%, black 8%, black 92%, rgba(0,0,0,0) 100%);
          }

          /* uniform slots so all logos look same size regardless of aspect ratio */
          .logo-slot { height: 4rem; width: 12rem; }                 /* mobile */
          @media (min-width:640px){ .logo-slot { height: 4.5rem; width: 13.5rem; } }  /* sm */
          @media (min-width:1024px){ .logo-slot { height: 5rem; width: 15rem; } }     /* lg */


          .logo-img { max-height: 100%; max-width: 100%; object-fit: contain; }

          /* helpful if any image has a flat white box background — keeps it unobtrusive */
          .logo-soft { filter: saturate(110%) contrast(105%); mix-blend: normal; }
        `}</style>

        <div className="mx-auto w-11/12 max-w-7xl py-14 sm:py-16 lg:py-20 flex flex-col gap-3">
          {/* Headline + subhead */}
          <div className="text-center">
            <h2 className="mx-auto max-w-5xl text-balance text-3xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-gray-800">
              "Simply connect your own business <br></br> number with <span style={{ color: BRAND_GREEN }}>Dialflo.</span>"
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-semibold text-base sm:text-lg text-gray-700">
              Get reliable voice agents in <span className="font-bold text-green-600">24 Hr.</span>
            </p>
          </div>

          {/* gap */}
          <div className="h-10" />

          {/* Trusted by Business Leaders — gradient text; background remains transparent */}
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-500">Trusted by</p>
            <h3 className="mx-auto mt-2 max-w-4xl text-balance text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text bg-clip-text text-transparent" style={{ color: BRAND_GREEN }}>
              Business Leaders
            </h3>
          </div>

          {/* Logos marquee (Right → Left), fully transparent container */}
          <div className="edge-fade relative mx-auto mt-8 w-full overflow-hidden ">
            <div className="flex w-[200%] items-center gap-8 sm:gap-10 animate-marquee-rtl">
              {/* Track A */}
              <ul className="flex shrink-0 items-center gap-8 sm:gap-10">
                {logos.map((l, i) => (
                  <li key={`a-${i}`} className="logo-slot  flex items-center bg-transparent justify-center">
                    <img
                      src={l.src}
                      alt={l.alt}
                      className="logo-img logo-soft"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
              {/* Track B (duplicate for seamless loop) */}
              <ul className="flex shrink-0 items-center gap-8 sm:gap-10" aria-hidden="true">
                {logos.map((l, i) => (
                  <li key={`b-${i}`} className="logo-slot flex items-center justify-center">
                    <img
                      src={l.src}
                      alt=""
                      className="logo-img logo-soft"
                      loading="lazy"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Demo button */}
          <div className="mt-28 flex justify-center">
            <a
              href="https://calendly.com/abhishek-dialflo/30min"
              target="blank"
              className="inline-flex items-center rounded-xl border border-green-600 hover:border-green-400 px-5 py-2.5 text-sm font-semibold text-gray-100 hover:text-gray-50 bg-green-600 hover:bg-green-700 shadow-sm transition hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-800 hover:shadow-2xl duration-200"
            >
              Request a demo
            </a>
          </div>
        </div>
      </section>
      
      {/* section 3 */}
      <section className="mt-10">
        <UseCasesSection />
      </section>

       {/* section 4 */}
      <section>
        <Platform/>
       
      </section>

      {/* section 4 */}
      <section>
        <TestimonialsSection/>
      </section>


      {/* section 5 */}
      {/* reason section */}
      <section>
        <ReasonsSection/>
      </section>


      {/* section 6 */}
      {/* pricing section */}
      <section>
        <PricingSection/>
      </section>

      {/* section 7 */}
      {/* FAQs */}
      <section>
        <FAQSection/>
      </section>

     {/* footer   section 8 */}
      <section>
        <Footer/>
      </section>

      


    </div>
  );
};

export default Home;
