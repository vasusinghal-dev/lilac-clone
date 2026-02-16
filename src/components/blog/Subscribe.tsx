"use client";

import { useInView } from "@/src/lib/useInView";

export default function Subscribe() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="
      py-16 sm:py-20 lg:py-24
      2xl:py-33.75
      bg-accent text-light
    "
    >
      <div
        className="
        p-6 sm:p-10 lg:p-14
        2xl:p-21
        max-w-xl sm:max-w-2xl lg:max-w-4xl
        2xl:max-w-350
        mx-auto text-center
        border-2 border-[#c2bfcb]
      "
      >
        <div>
          <h2
            className={`
            text-3xl sm:text-4xl lg:text-5xl
            2xl:text-[53px]
            mb-3
          ${fadeInUp}`}
          >
            Subscribe
          </h2>

          <p
            className={`
            mb-6 sm:mb-7 lg:mb-8
            text-base sm:text-lg lg:text-xl
            2xl:text-[21px]
           ${fadeIn}`}
          >
            Sign up with your email address to receive news and updates.
          </p>
        </div>

        <form
          className="
            flex flex-col sm:flex-row
            justify-center gap-3
            items-stretch sm:items-center
          "
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder="Email Address"
            className="
              w-full
              sm:max-w-xs
              px-6 sm:px-7 lg:px-8
              py-4 sm:py-5
              bg-white
              focus:border-[#fbf6f1]
              placeholder:text-base sm:placeholder:text-lg lg:placeholder:text-xl
              text-black text-base sm:text-lg lg:text-xl
              transition-colors
            "
            required
          />

          <button
            type="submit"
            className={`
              px-6 sm:px-7 lg:px-8
              py-4 sm:py-5 lg:py-5.5
              bg-transparent text-secondary
              border border-[#c2bfcb]
              hover:bg-[#c2bfcb] hover:text-black
              transition-colors duration-300
              text-xs sm:text-sm
              font-medium tracking-wider
             ${fadeInUp}`}
          >
            SIGN UP
          </button>
        </form>

        <p
          className="
          text-sm sm:text-base
          2xl:text-[16px]
          mt-8 sm:mt-9 lg:mt-10
        "
        >
          We respect your privacy.
        </p>
      </div>
    </section>
  );
}
