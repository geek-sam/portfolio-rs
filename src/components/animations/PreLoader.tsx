import React, { useEffect, useState } from "react";

const NAME = "Ruhani Sethia";

const Preloader: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const [showUnderline, setShowUnderline] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let typingTimer: ReturnType<typeof setInterval>;
    let underlineTimer: ReturnType<typeof setTimeout>;
    let subtitleTimer: ReturnType<typeof setTimeout>;
    let exitTimer: ReturnType<typeof setTimeout>;
    let removeTimer: ReturnType<typeof setTimeout>;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const finishLoader = () => {
      setIsExiting(true);

      removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 850);
    };

    if (prefersReducedMotion) {
      setTypedText(NAME);
      setShowUnderline(true);
      setShowSubtitle(true);

      removeTimer = setTimeout(() => {
        setIsVisible(false);
      }, 500);

      return () => clearTimeout(removeTimer);
    }

    let index = 0;

    // 1. Typing animation
    typingTimer = setInterval(() => {
      index++;

      setTypedText(NAME.slice(0, index));

      if (index >= NAME.length) {
        clearInterval(typingTimer);

        // 2. Underline animation
        underlineTimer = setTimeout(() => {
          setShowUnderline(true);

          // 3. Subtitle animation
          subtitleTimer = setTimeout(() => {
            setShowSubtitle(true);

            // 4. Exit loader
            exitTimer = setTimeout(() => {
              finishLoader();
            }, 1100);
          }, 750);
        }, 250);
      }
    }, 115);

    return () => {
      clearInterval(typingTimer);
      clearTimeout(underlineTimer);
      clearTimeout(subtitleTimer);
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`preloader fixed inset-0 z-[9999] flex min-h-[100svh] items-center justify-center overflow-hidden ${
        isExiting ? "preloader-exit" : ""
      }`}
      role="status"
      aria-label="Loading Ruhani Sethia Studio"
    >
      {/* Background Texture */}
      <div className="preloader-texture absolute inset-0 pointer-events-none" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full max-w-[1000px] flex-col items-center px-6">
        {/* Name */}
        <div className="w-full text-center">
          <h1 className="preloader-name inline-block whitespace-nowrap font-normal text-[#F3EFE7]">
            {typedText}

            <span
              className={`typing-cursor ${
                typedText.length === NAME.length ? "cursor-hidden" : ""
              }`}
              aria-hidden="true"
            />
          </h1>

          {/* Underline */}
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
              stroke="#D5B77B"
              strokeWidth="2.4"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Subtitle */}
        <p
          className={`preloader-subtitle mt-8 text-center text-[10px] font-semibold uppercase tracking-[3px] text-[#E8E0D5] sm:text-[12px] ${
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
