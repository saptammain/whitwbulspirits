import { useState } from "react";
import { FaInstagram, FaFacebookF, FaLinkedin } from "react-icons/fa";

import vdo from "../assets/main.mp4";
import whitebull from "../assets/whitebulLogo.png";
import glenwright from "../assets/glenWright.webp";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyvS4mShhd_rrkE41upo6w13Lju2TTWyFswvvulCvJdGnAX-uJkni74MsJAjDYwECF6/exec";

  const handleNotifyMe = async () => {
    if (!email || !email.includes("@")) return;

    try {
      setLoading(true);

      // ✅ Use FormData (NO JSON, NO headers)
      const formData = new FormData();
      formData.append("email", email);

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });

      setShowPopup(true);
      setEmail("");

      setTimeout(() => setShowPopup(false), 3000);
    } catch (error) {
      console.error("Email submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-[100dvh] w-full overflow-hidden text-white">
      {/* THANK YOU POPUP */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="w-full max-w-md rounded-lg border border-[#c9b27d] bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] p-6 sm:p-8 text-center shadow-2xl">
            <div className="text-4xl sm:text-5xl mb-4">🥂</div>
            <h2 className="font-cinzel text-xl sm:text-2xl text-[#f1e6c8] mb-2">
              Thank You!
            </h2>
            <p className="font-cormorant text-sm sm:text-base italic text-[#cfc7b3]">
              We will connect with you soon
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 px-6 py-2 border border-[#c9b27d] text-[#e6d3a3] uppercase text-xs sm:text-sm tracking-wider hover:bg-[#c9b27d] hover:text-black transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* BACKGROUND VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={vdo} type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* TOP LOGO */}
      <div className="pointer-events-none absolute top-4 sm:top-6 left-1/2 z-20 -translate-x-1/2">
        <img
          src={whitebull}
          alt="Whitebull Spirits"
          className="h-24 lg:h-32 w-auto opacity-90"
        />
      </div>

      {/* CENTER CONTENT */}
      <div className="relative z-10 flex min-h-[100dvh] flex-col items-center justify-center px-4 text-center">
        <h1 className="font-cormorant text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r from-white via-[#f1e6c8] to-[#D1962B] bg-clip-text text-transparent drop-shadow-xl">
          Bold By Nature. Rare By Choice.
        </h1>

        <p className="mt-2 font-cormorant text-sm italic text-[#cfc7b3]">
          Because standards matter.
        </p>

        <p className="mt-6 font-cinzel text-sm uppercase tracking-widest text-[#e6d3a3]">
          Stay Connected
        </p>

        {/* EMAIL FORM */}
        <div className="mt-4 flex w-full max-w-md flex-col sm:flex-row gap-2">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={loading}
            className="flex-1 bg-black/40 border border-[#c9b27d] px-4 py-2 text-xs sm:text-sm text-white placeholder:text-[#b8ad94] outline-none focus:border-[#e6d3a3]"
          />

          <button
            onClick={handleNotifyMe}
            disabled={loading}
            className="border border-[#c9b27d] px-5 py-2 text-xs sm:text-sm uppercase tracking-wider text-[#e6d3a3] hover:bg-[#c9b27d] hover:text-black transition whitespace-nowrap"
          >
            {loading ? "Sending..." : "Notify Me"}
          </button>
        </div>

        <p className="mt-4 font-cormorant text-sm italic text-[#b8ad94]">
          Shared selectively. Never excessive.
        </p>

        {/* SOCIAL ICONS */}
        <div className="mt-5 flex gap-5">
          <a href="https://www.instagram.com/glenwright_scotch?igsh=MXJlb2ttOHRzYmhtYQ%3D%3D&utm_source=qr" target="_blank" rel="noreferrer">
            <FaInstagram className="text-lg text-[#b8ad94] hover:opacity-80 transition" />
          </a>

          <a href="https://www.facebook.com/profile.php?id=61587559678198" target="_blank" rel="noreferrer">
            <FaFacebookF className="text-lg text-[#b8ad94] hover:opacity-80 transition" />
          </a>

          <a href="https://www.linkedin.com/in/subirarora/" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-lg text-[#b8ad94] hover:opacity-80 transition" />
          </a>
        </div>
      </div>

      {/* BOTTOM LOGO */}
      <div className="absolute bottom-4 w-full flex flex-col items-center">
        <img src={glenwright} alt="The Glenwright" className="h-16 md:h-24" />
        <p className="mt-1 text-lg text-[#b8ad94] font-cormorant italic">
          Belongs to the Bold
        </p>
      </div>
    </div>
  );
}
