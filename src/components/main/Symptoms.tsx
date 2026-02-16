"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../lib/useInView";
import { stagger } from "../../lib/utility";

const points = [
  "Persistent feelings of sadness or hopelessness",
  "Trouble focusing or making decisions",
  "Difficulty maintaining relationships",
  "Feeling constantly exhausted or unmotivated",
  "A pervasive sense of being overwhelmed",
];

export default function Symptoms() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section ref={ref} className="bg-tertiary ">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className={`order-1 lg:order-1 relative mx-auto w-full max-w-md lg:max-w-xl 2xl:max-w-254 aspect-4/5 2xl:h-268.75 overflow-hidden ${slideIn}`}
          style={
            {
              "--animation-delay": "0.2s",
              "--animation-duration": "1s",
            } as React.CSSProperties
          }
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w"
            alt="Life section image"
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="order-2 flex flex-col">
          <div className="flex flex-1 justify-center items-center pt-8 lg:pt-10 2xl:pt-16 pb-10 lg:pb-0 px-6 sm:px-8 lg:px-0">
            <div className="flex flex-col items-start max-w-md lg:max-w-xl 2xl:max-w-215.5">
              <h1
                className={`text-3xl sm:text-4xl lg:text-[52px] 2xl:text-[65px] font-medium mb-4 lg:mb-8 2xl:mb-12 ${fadeInUp}`}
              >
                You don’t have to do this all alone.
              </h1>

              <p
                className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] mb-8 lg:mb-10 2xl:mb-14 ${fadeIn}`}
                style={
                  {
                    "--animation-delay": "0.05s",
                  } as React.CSSProperties
                }
              >
                If you are facing any of these, there’s hope:
              </p>

              <ul className="ml-5 mb-10 lg:mb-16 2xl:mb-22">
                {points.map((p, index) => (
                  <li
                    key={index}
                    className={`flex items-start gap-3 my-2 ${fadeIn}`}
                    style={stagger(index + 2, 0.05)}
                  >
                    <span className="mt-2.75 lg:mt-3.5 h-1 w-1 rounded-full bg-text-primary" />
                    <span className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] leading-relaxed">
                      {p}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ${fadeIn}`}
                style={
                  {
                    "--animation-delay": "0.35s",
                  } as React.CSSProperties
                }
              >
                With empathy and guidance, we&apos;ll work together to navigate
                the challenges life throws your way.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="px-4 py-5 lg:py-7 2xl:py-8 w-full btn btn-primary gap-0 border-t"
          >
            <span className="text-[13.5px] font-medium">WORK WITH ME</span>
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
