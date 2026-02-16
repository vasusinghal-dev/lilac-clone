"use client";

import Link from "next/link";
import { useInView } from "../../lib/useInView";

export default function CTA() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="bg-accent text-light py-16 sm:py-20 lg:py-24 2xl:py-33.75"
    >
      <div className="px-6 sm:px-10 lg:px-16 2xl:px-40">
        <div className="flex flex-col justify-center items-center pt-8 lg:pt-12 2xl:pt-14 mb-6">
          <div className="text-center max-w-md lg:max-w-3xl 2xl:max-w-245 pb-16 lg:pb-24 2xl:pb-36">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-[52px] font-medium mb-4 lg:mb-6 2xl:mb-8.5 ${fadeInUp}`}
            >
              Get started today.
            </h1>

            <p
              className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ${fadeIn}`}
            >
              Ready to take the first step towards a happier, healthier you?
              <br />
              Contact me to book your first session. I look forward to starting
              this therapeutic journey with you.
            </p>
          </div>

          <Link
            href="/contact"
            className={`px-5 py-2.5 btn btn-secondary gap-1 border ${fadeInUp}`}
          >
            <span className="text-[13.5px] font-medium ml-2">GET IN TOUCH</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              strokeWidth="0.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12H15" />
              <path d="M13 10L15 12L13 14" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
