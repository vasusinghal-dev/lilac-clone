"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../lib/useInView";

export default function LifeSection() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section ref={ref} className="bg-secondary lg:py-18 2xl:py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0">
        <div
          className={`order-1 lg:order-2 relative mx-auto w-full aspect-7/6 overflow-hidden ${slideIn}`}
          style={
            {
              "--animation-delay": "0.2s",
              "--animation-duration": "1s",
            } as React.CSSProperties
          }
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=2500w"
            alt="Life section image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="order-2 lg:order-1 flex flex-col">
          <div className="flex flex-1 justify-center items-center pb-6 lg:pb-4 2xl:pb-3 px-6 sm:px-8 lg:px-0 mb-20 lg:mb-0">
            <div className="flex flex-col items-start max-w-md lg:max-w-xl 2xl:max-w-215.5">
              <h1
                className={`text-3xl sm:text-4xl lg:text-[52px] 2xl:text-[65px] font-medium mb-4 lg:mb-6 2xl:mb-9 ${fadeInUp}`}
              >
                Live a fulfilling life.
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] mb-4 ${fadeIn}`}
                style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
              >
                Life can be challenging—especially when you&apos;re trying to
                balance your personal and professional life.
              </p>

              <p
                className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ${fadeIn}`}
                style={{ "--animation-delay": "0.1s" } as React.CSSProperties}
              >
                It&apos;s easy to feel like you&apos;re alone in facing these
                challenges, but I want you to know that I&apos;m here to help.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className={`px-4 py-4 lg:py-7 2xl:py-8 w-full btn btn-primary gap-0 border-t ${fadeInUp}`}
          >
            <span className="text-[13.5px] font-medium">GET IN TOUCH</span>
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
