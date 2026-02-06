import { useState } from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from "react-icons/fa";
import vdo from "../assets/main.mp4";
import whitebull from "../assets/whitebulLogo.png";
import glenwright from "../assets/glenWright.webp";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleNotifyMe = () => {
    if (email && email.includes("@")) {
      setShowPopup(true);
      setEmail("");
      // Auto close popup after 3 seconds
      setTimeout(() => setShowPopup(false), 3000);
    }
  };

  return (
    <div className="relative h-screen h-[100dvh] w-full overflow-hidden text-white">

      {/* Thank You Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-[#c9b27d] rounded-lg p-6 sm:p-8 md:p-10 max-w-md w-full text-center shadow-2xl animate-fade-in">
            <div className="text-4xl sm:text-5xl mb-4">🥂</div>
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl text-[#f1e6c8] mb-3">
              Thank You!
            </h2>
            <p className="font-cormorant text-base sm:text-lg text-[#cfc7b3] italic">
              We Will Connect With You Soon
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 px-6 py-2 border border-[#c9b27d] text-[#e6d3a3] font-cinzel uppercase text-sm tracking-wider hover:bg-[#c9b27d] hover:text-black transition rounded-sm"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={vdo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* 🔝 WHITEBULL LOGO (TOP) */}
      <div className="absolute top-[4%] sm:top-[3%] md:top-[4%] left-1/2 z-20 -translate-x-1/2">
        <img
          src={whitebull}
          alt="Whitebull Spirits"
          className="h-24 min-h-[96px] sm:h-[12vh] md:h-[14vh] lg:h-[16vh] w-auto opacity-90"
        />
      </div>

      {/* Center Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center">

        {/* Main Quote */}
        <h1
          className="
            font-cormorant
            text-[clamp(1.25rem,5vw,3.5rem)]
            font-medium
            text-[#f1e6c8]
            drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]
            leading-tight
            px-4
          "
        >
          Where time leaves its signature.
        </h1>

        {/* Sub Quote */}
        <p
          className="
            mt-[1vh]
            sm:mt-[1.5vh]
            font-cormorant
            text-[clamp(0.65rem,2vw,1.125rem)]
            italic
            text-[#cfc7b3]
            opacity-90
          "
        >
          Because standards matter.
        </p>

        {/* Stay Connected */}
        <p
          className="
            mt-[3vh]
            sm:mt-[4vh]
            font-cinzel
            uppercase
            tracking-[0.15em]
            sm:tracking-[0.2em]
            md:tracking-[0.3em]
            text-[clamp(0.5rem,1.5vw,0.875rem)]
            text-[#e6d3a3]
          "
        >
          Stay Connected
        </p>

        {/* Email Form */}
        <div className="mt-[1.5vh] sm:mt-[2vh] flex w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-lg flex-col sm:flex-row gap-2 sm:gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="
              flex-1
              bg-black/40
              border
              border-[#c9b27d]
              px-3
              sm:px-4
              py-2
              sm:py-2.5
              md:py-3
              text-[clamp(0.65rem,1.5vw,0.875rem)]
              text-white
              font-cormorant
              placeholder:text-[#b8ad94]
              outline-none
              focus:border-[#e6d3a3]
              rounded-sm
            "
          />
          <button
            onClick={handleNotifyMe}
            className="
              bg-transparent
              border
              border-[#c9b27d]
              px-4
              sm:px-5
              md:px-6
              py-2
              sm:py-2.5
              md:py-3
              text-[clamp(0.6rem,1.3vw,0.875rem)]
              font-cinzel
              uppercase
              tracking-wider
              sm:tracking-widest
              text-[#e6d3a3]
              hover:bg-[#c9b27d]
              hover:text-black
              transition
              rounded-sm
              whitespace-nowrap
              flex-shrink-0
            "
          >
            Notify Me
          </button>
        </div>

        {/* Tagline */}
        <p
          className="
            mt-[2vh]
            sm:mt-[2.5vh]
            font-cormorant
            text-[clamp(0.55rem,1.3vw,0.875rem)]
            text-[#b8ad94]
            italic
          "
        >
          Shared selectively. Never excessive.
        </p>

        {/* Social Icons */}
        <div className="mt-[2.5vh] sm:mt-[3vh] flex gap-3 sm:gap-4 md:gap-5 text-[#b8ad94]">
          <FaInstagram className="text-[clamp(1rem,2.5vw,1.5rem)] hover:text-[#e6d3a3] transition cursor-pointer" />
          <FaFacebookF className="text-[clamp(1rem,2.5vw,1.5rem)] hover:text-[#e6d3a3] transition cursor-pointer" />
          <FaYoutube className="text-[clamp(1rem,2.5vw,1.5rem)] hover:text-[#e6d3a3] transition cursor-pointer" />
          <FaTwitter className="text-[clamp(1rem,2.5vw,1.5rem)] hover:text-[#e6d3a3] transition cursor-pointer" />
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="absolute bottom-14 sm:bottom-4 md:bottom-5 w-full flex flex-col items-center opacity-90 px-4">
        <img
          src={glenwright}
          alt="The Glenwright"
          className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto"
        />
        <p className="mt-1 text-xs sm:text-xs md:text-sm text-[#b8ad94] font-cormorant italic text-center">
         Belongs to the Bold
        </p>
      </div>

    </div>
  );
}
