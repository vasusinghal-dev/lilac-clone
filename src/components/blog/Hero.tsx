"use client";

import { useInView } from "@/src/lib/useInView";
import Image from "next/image";

export default function Hero() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section ref={ref}>
      <div
        className="
        px-6 sm:px-10 lg:px-14
        py-12 sm:py-14 lg:py-16
        2xl:px-15 2xl:py-18
      "
      >
        <div
          className="
          grid grid-cols-1
          gap-12 lg:gap-16
          2xl:grid-cols-[46fr_54fr]
        "
        >
          {/* IMAGE */}
          <div
            className={`
            mx-auto w-full
            max-w-xs sm:max-w-md lg:max-w-lg
            2xl:max-w-145
            aspect-580/868 relative
           ${slideIn}`}
          >
            <Image
              src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/03adb210-386b-4cac-93ce-796727896c60/pexels-alp-y%C4%B1ld%C4%B1zlar-15127478.jpg?format=2500w"
              alt="Hero image"
              fill
              className="object-cover rounded-t-full"
              priority
            />
          </div>

          {/* TEXT */}
          <div className="flex flex-col items-start justify-center mb-6 lg:mb-8">
            <h1
              className={`
              text-3xl sm:text-4xl lg:text-6xl
              2xl:text-[102px]
              font-medium mb-4 lg:mb-8
              leading-tight
             ${fadeInUp}`}
            >
              Insights on Anxiety, Trauma & Healing
            </h1>

            <div className="flex flex-col max-w-md lg:max-w-xl 2xl:max-w-135">
              <p
                className={`text-base sm:text-lg lg:text-xl 2xl:text-[28px] mb-3 lg:mb-4 ${fadeIn}`}
              >
                Helpful articles from Dr. Maya Reynolds on anxiety, burnout,
                trauma, and building a calmer, more balanced life.
              </p>

              <p className="font-bold text-base sm:text-lg lg:text-xl 2xl:text-[21px]">
                You’re not alone in what you’re going through.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
