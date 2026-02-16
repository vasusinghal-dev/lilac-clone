"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../lib/useInView";

export default function About() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="bg-secondary py-10   sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 2xl:pt-33.75 2xl:pb-58.75"
    >
      <div className="px-6 sm:px-10 lg:px-16 2xl:px-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
          <div className="order-2 lg:order-1 flex flex-col justify-center items-center pb-10 lg:pb-20">
            <div className="flex flex-col items-start max-w-md lg:max-w-xl 2xl:max-w-215.5 mb-10 lg:mb-20 2xl:mb-45">
              <h1
                className={`text-3xl sm:text-4xl lg:text-[52px] 2xl:text-[65px] font-medium mb-4 lg:mb-6 2xl:mb-8.5 ${fadeInUp}`}
              >
                Hi, I’m Lilac.
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ${fadeIn}`}
              >
                I&apos;m committed to providing a safe and supportive
                environment where we can explore your thoughts, feelings, and
                behaviors. With empathy and guidance, we&apos;ll work together
                to navigate the challenges life throws your way.
              </p>
            </div>

            <Link
              href="/contact"
              className={`px-5 py-2.5 btn btn-primary gap-1 border ${fadeInUp}`}
            >
              <span className="text-[13.5px] font-medium ml-2">
                LET&apos;S CHAT
              </span>
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

          <div className="order-1 lg:order-2 relative flex flex-col items-center mb-10 lg:mb-0">
            <div
              className={`relative w-full max-w-44 sm:max-w-xs lg:max-w-md 2xl:max-w-136 ${slideIn}`}
              style={{ "--animation-duration": "0.6s" } as React.CSSProperties}
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
                alt="Hero image"
                width={780}
                height={1050}
                className="w-full h-auto rounded-t-full"
                priority
              />
            </div>

            <div
              className={`absolute -bottom-16 lg:-bottom-20 2xl:-bottom-25 right-4 lg:-right-10 2xl:-right-14 w-full max-w-32 sm:max-w-40 lg:max-w-48 2xl:max-w-100.75 aspect-square ${slideIn}`}
              style={
                {
                  "--animation-delay": "0.05s",
                  "--animation-duration": "0.8s",
                } as React.CSSProperties
              }
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w"
                alt="Hero image"
                fill
                className="rounded-full object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
