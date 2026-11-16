import React, { useEffect, useState } from "react";

const NAME = "Ruhani Sethia";

const Preloader: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setTypedText(NAME);
      setShowUnderline(true);
      setShowSubtitle(true);

      const exitTimer = window.setTimeout(() => {
        setIsExiting(true);
      }, 1000);

      const removeTimer = window.setTimeout(() => {
        setIsVisible(false);
      }, 1800);

      return () => {
        clearTimeout(exitTimer);
        clearTimeout(removeTimer);
      };
    }

    let index = 0;
    let subtitleTimer: number;
    let exitTimer: number;
    let removeTimer: number;

    // 1. Type the name character by character
    const typingInterval = window.setInterval(() => {
      index++;

      setTypedText(NAME.slice(0, index));

      if (index >= NAME.length) {
        clearInterval(typingInterval);

        // 2. Draw underline
        subtitleTimer = window.setTimeout(() => {
          setShowUnderline(true);

          // 3. Reveal subtitle
          exitTimer = window.setTimeout(() => {
            setShowSubtitle(true);

            // 4. Exit loader
            removeTimer = window.setTimeout(() => {
              setIsExiting(true);

              // 5. Remove loader from DOM
              window.setTimeout(() => {
                setIsVisible(false);
              }, 900);
            }, 1100);
          }, 750);
        }, 250);
      }
    }, 115);

    return () => {
      clearInterval(typingInterval);
      clearTimeout(subtitleTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`preloader fixed inset-0 z-[9999] flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#684B62] ${
        isExiting ? "preloader-exit" : ""
      }`}
      aria-label="Loading Ruhani Sethia Studio"
      role="status"
      aria-live="polite"
    >
      {/* Subtle Background Texture */}
      <div className="preloader-texture pointer-events-none absolute inset-0" />

      {/* Center Logo */}
      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center px-6">
        {/* Animated Name */}
        <div className="relative w-full text-center">
          <h1 className="preloader-name inline-block whitespace-nowrap font-normal text-[#F2EADB]">
            {typedText}

            {/* Typing Cursor */}
            <span
              className={`typing-cursor ${
                typedText.length === NAME.length ? "cursor-hidden" : ""
              }`}
              aria-hidden="true"
            />
          </h1>

          {/* Animated Underline */}
          <svg
            viewBox="0 0 780 38"
            className={`preloader-underline mx-auto mt-[-3px] w-[90%] max-w-[780px] ${
              showUnderline ? "underline-visible" : ""
            }`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              className="underline-path"
              d="M5 21 C180 35 480 21 773 3 C750 15 720 27 685 31"
              stroke="#E5C47F"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className={`preloader-subtitle mt-8 text-center text-[10px] font-semibold uppercase tracking-[3px] text-[#EADABD] sm:text-[12px] ${
            showSubtitle ? "subtitle-visible" : ""
          }`}
        >
          FOLIO · VOL. I · JAIPUR
        </p>
      </div>
    </div>
  );
};

export default Preloader;
