import React, { useState } from "react";
import { FiLinkedin, FiYoutube, FiInstagram } from "react-icons/fi";
import AFFILIATE_PDF from "../asset/Dialflo-Affiliate-Partners.pdf";

const BRAND_GREEN = "#4b9f53";

export default function Footer() {
  const [email, setEmail] = useState("");

  const onSubscribe = (e) => {
    e.preventDefault();
    // TODO: hook to your backend
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-300 -mb-8" id="site-footer">
      <div className="mx-auto w-11/12 max-w-7xl py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="text-3xl font-extrabold tracking-tight text-white">
              Dial<span style={{ color: BRAND_GREEN }}>flo</span>
            </div>
            <p className="mt-4 text-gray-400">
              AI voice agents that sound human
            </p>

            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/dialflo/"
                target="blank"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <FiLinkedin className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <FiYoutube className="text-xl" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10 hover:bg-white/10"
              >
                <FiInstagram className="text-xl" />
              </a>
            </div>
            

              <div className="flex flex-col items-center justify-between gap-3   pt-6 text-sm text-gray-400 sm:flex-row">
          <div>© {new Date().getFullYear()}. All rights reserved.</div>
          <div className="hidden sm:block" />
        </div>



          </div>

          {/* Industries */}
          <div>
            <h4 className="text-lg font-semibold text-white">Industries We Serve</h4>
            <ul className="mt-4 space-y-3">
              <li><a className="hover:text-white" href="#">D2C Businesses</a></li>
              <li><a className="hover:text-white" href="#">Logistics</a></li>
              <li><a className="hover:text-white" href="#">Healthcare</a></li>
              <li>
                <a
                  href={AFFILIATE_PDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                  style={{ color: BRAND_GREEN }}
                >
                  Affiliate Partner's
                </a>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white">Products</h4>
            <ul className="mt-4 space-y-3">
              <li><a className="hover:text-white" href="#">Inbound Calling</a></li>
              <li><a className="hover:text-white" href="#">Outbound Calling</a></li>
              <li><a className="hover:text-white" href="#">WhatsApp Integration</a></li>
              <li><a className="hover:text-white" href="#">Analytics Dashboard</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold text-white">Stay a step ahead</h4>
            <p className="mt-4 text-gray-400">
              Subscribe for the latest updates.
            </p>
            <form
              onSubmit={onSubscribe}
              className="mt-4 flex overflow-hidden rounded-lg ring-1 ring-white/10"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#162028] px-4 py-3 text-sm text-gray-100 placeholder:text-gray-400 outline-none"
              />
              <button
                type="submit"
                className="px-4 text-sm font-semibold text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #4b9f53 0%, #46a59a 100%)",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider nav row */}
        <div className="my-10 border-t border-white/10 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <a href="#" className="hover:text-white">About Us</a>
              <a href="#" className="hover:text-white">Blog</a>
              <a href="#" className="hover:text-white">Use Cases</a>
              <a href="#" className="hover:text-white">Pricing</a>
              <a href="#" className="hover:text-white">Demo</a>
              <a href="#" className="hover:text-white">Contact Us</a>
            </nav>

            <nav className="ml-auto flex flex-wrap gap-x-8 gap-y-3">
              <a href="#" className="hover:text-white">Terms and Conditions</a>
              <a href="#" className="hover:text-white">Return Policy</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        
      </div>
    </footer>
  );
}
