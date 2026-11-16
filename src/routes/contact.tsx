import React, { useState } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const OrnamentalDivider = () => (
  <svg
    viewBox="0 0 620 38"
    className="w-full max-w-[660px]"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <g stroke="#A98653" strokeWidth="1.2">
      {Array.from({ length: 8 }).map((_, i) => {
        const x = i * 76;
        return (
          <g key={i}>
            <path
              d={`M${x} 19 Q${x + 38} -2 ${x + 76} 19 Q${x + 38} 40 ${x} 19Z`}
            />
            <path
              d={`M${x + 38} 9 Q${x + 31} 0 ${x + 38} 0 Q${x + 45} 0 ${x + 38} 9Z`}
            />
          </g>
        );
      })}
    </g>
    <g fill="#F3EFE7" stroke="#684B62" strokeWidth="1.4">
      {[76, 228, 380, 532].map((x) => (
        <circle key={x} cx={x} cy="19" r="4.5" />
      ))}
    </g>
  </svg>
);

const ContactBird = () => (
  <svg
    viewBox="0 0 100 90"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-[76px] w-[85px] text-[#A98653]"
    aria-hidden="true"
  >
    <path d="M10 64 Q42 57 84 52" />
    <path d="M46 60 Q31 37 46 12 Q58 0 70 14 Q79 29 64 47 Q57 56 46 60Z" />
    <path d="M46 60 L42 80 M51 60 L53 80" />
    <path d="M42 80 L37 85 M53 80 L58 85" />
    <path d="M64 47 Q76 54 88 48 L95 46" />
    <path d="M47 13 Q58 27 56 42" />
    <circle cx="69" cy="15" r="2" stroke="#684B62" />
    <path d="M30 57 Q20 49 17 59 Q17 66 25 64" />
  </svg>
);

const contactDetails = [
  {
    label: "Now Booking",
    content: (
      <>
        Spring 2027. Smaller jobs can sometimes squeeze in sooner, so ask
        anyway.
      </>
    ),
  },
  {
    label: "Based In",
    content: (
      <>
        Jaipur, working with brands everywhere. Studio visits by appointment,
        chai included.
      </>
    ),
  },
  {
    label: "What Happens Next",
    content: (
      <>
        I reply within two working days. If it feels like a fit, we book a call
        and you get a short proposal within a week.
      </>
    ),
  },
];

const fieldClass =
  "mt-2 w-full min-w-0 border border-[#A98653] bg-[#F3EFE7] px-3 py-4 text-[14px] text-[#292329] outline-none transition-all duration-200 placeholder:text-[#88796A] focus:border-[#684B62] focus:ring-1 focus:ring-[#684B62]/20";

const labelClass =
  "block text-[10px] font-semibold uppercase tracking-[1.5px] text-[#746B67]";

const Contact = () => {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!ACCESS_KEY) {
      setStatus("error");
      setFeedback(
        "Contact form configuration is missing. Please try emailing directly.",
      );
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    formData.append("access_key", ACCESS_KEY);
    formData.append("subject", "New Project Enquiry — Ruhani Sethia Studio");
    formData.append("from_name", "Ruhani Sethia Studio");

    setStatus("sending");
    setFeedback("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your message. Please try again.",
        );
      }

      setStatus("success");
      setFeedback(
        "Thank you for getting in touch. Your enquiry has been sent successfully. I'll reply within two working days.",
      );

      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again or email directly.",
      );
    }
  };

  return (
    <main className="relative overflow-hidden bg-[#F3EFE7] text-[#292329]">
      {/* Paper Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `
            radial-gradient(#A88C65 0.6px, transparent 0.6px),
            radial-gradient(#A88C65 0.5px, transparent 0.5px)
          `,
          backgroundSize: "7px 7px, 11px 11px",
          backgroundPosition: "0 0, 3px 4px",
        }}
      />

      <div className="relative mx-auto max-w-[1210px] px-6 sm:px-10 lg:px-0">
        {/* ======================================
            SECTION 1: INTRODUCTION
        ====================================== */}

        <section className="pt-20 pb-14 sm:pt-24 sm:pb-16">
          <ContactBird />

          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[1.6px] text-[#684B62] sm:text-[11px]">
            Start a Project
          </p>

          <p className="mt-5 font-serif text-[25px] text-[#A98653]">नमस्ते</p>

          <h1 className="mt-5 font-serif text-[clamp(90px,13vw,180px)] leading-[0.87] tracking-[-7px] text-[#292329]">
            Say hello
          </h1>

          <p className="mt-7 max-w-[680px] text-[15px] leading-[1.85] text-[#746B67] sm:text-[17px]">
            Tell me about the brand, the deadline and what keeps you up at
            night. I read every note myself and reply within two working days,
            usually with questions.
          </p>

          <div className="mt-7">
            <OrnamentalDivider />
          </div>
        </section>

        {/* ======================================
            SECTION 2: CONTACT DETAILS + FORM
        ====================================== */}

        <section className="grid grid-cols-1 items-start gap-12 pb-24 lg:grid-cols-[350px_minmax(0,1fr)] lg:gap-20">
          {/* Left: Contact Information */}
          <aside className="space-y-0">
            {/* Email */}
            <div className="border-t border-[#A98653] py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#87927B]">
                Write Directly
              </p>

              <a
                href="mailto:studio@ruhanisethia.in"
                className="mt-2 inline-block font-serif text-[22px] text-[#684B62] transition-colors hover:text-[#292329] sm:text-[25px]"
              >
                studio@ruhanisethia.in
              </a>
            </div>

            {/* Other Information */}
            {contactDetails.map((detail) => (
              <div
                key={detail.label}
                className="border-t border-[#A98653] py-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#87927B]">
                  {detail.label}
                </p>

                <p className="mt-2 text-[14px] leading-[1.7] text-[#292329]">
                  {detail.content}
                </p>
              </div>
            ))}
          </aside>

          {/* Right: Contact Form */}
          <div className="border border-[#A98653] bg-[#E8E0D5] p-6 sm:p-8 lg:p-11">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot anti-spam field */}
              <input
                type="checkbox"
                name="botcheck"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Name + Email */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={labelClass}>
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Meera Agarwal"
                    autoComplete="name"
                    maxLength={80}
                    required
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={labelClass}>
                    Email
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="you@yourbrand.com"
                    autoComplete="email"
                    required
                    className={fieldClass}
                  />
                </div>
              </div>

              {/* Brand */}
              <div>
                <label htmlFor="contact-brand" className={labelClass}>
                  Brand or Company
                </label>

                <input
                  id="contact-brand"
                  type="text"
                  name="brand"
                  placeholder="Phuljhadi Sweets"
                  maxLength={120}
                  className={fieldClass}
                />
              </div>

              {/* Service + Budget */}
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-service" className={labelClass}>
                    What Do You Need?
                  </label>

                  <select
                    id="contact-service"
                    name="service"
                    defaultValue=""
                    required
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Pick one
                    </option>
                    <option value="Brand Identity">Brand Identity</option>
                    <option value="Brand Strategy">Brand Strategy</option>
                    <option value="Packaging Design">Packaging Design</option>
                    <option value="Art Direction">Art Direction</option>
                    <option value="Editorial Design">Editorial Design</option>
                    <option value="Website & Digital">Website & Digital</option>
                    <option value="Other">Something Else</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-budget" className={labelClass}>
                    Budget
                  </label>

                  <select
                    id="contact-budget"
                    name="budget"
                    defaultValue=""
                    required
                    className={fieldClass}
                  >
                    <option value="" disabled>
                      Pick a range
                    </option>
                    <option value="Under ₹1 lakh">Under ₹1 lakh</option>
                    <option value="₹1–3 lakh">₹1–3 lakh</option>
                    <option value="₹3–5 lakh">₹3–5 lakh</option>
                    <option value="₹5 lakh+">₹5 lakh+</option>
                    <option value="Not decided">Not decided yet</option>
                  </select>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label htmlFor="contact-timeline" className={labelClass}>
                  Timeline
                </label>

                <select
                  id="contact-timeline"
                  name="timeline"
                  defaultValue=""
                  required
                  className={fieldClass}
                >
                  <option value="" disabled>
                    When do you need it?
                  </option>
                  <option value="As soon as possible">
                    As soon as possible
                  </option>
                  <option value="Within 1 month">Within 1 month</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="Flexible">Flexible</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className={labelClass}>
                  Tell Me About It
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  minLength={10}
                  maxLength={3000}
                  placeholder="The brand, the story, the deadline. Old photos welcome."
                  required
                  className={`${fieldClass} resize-y`}
                />
              </div>

              {/* Submission Feedback */}
              {feedback && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`border px-4 py-3 text-[13px] leading-relaxed ${
                    status === "success"
                      ? "border-[#87927B] bg-[#87927B]/10 text-[#526744]"
                      : "border-[#684B62] bg-[#684B62]/5 text-[#684B62]"
                  }`}
                >
                  {feedback}
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex min-h-[61px] items-center justify-center gap-3 bg-[#684B62] px-9 py-4 text-[10px] font-bold uppercase tracking-[1.5px] text-[#F3EFE7] transition-all duration-300 hover:bg-[#292329] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#F3EFE7] border-t-transparent" />
                    Sending...
                  </>
                ) : status === "success" ? (
                  "Message Sent"
                ) : (
                  "Send It Over"
                )}
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Contact;
