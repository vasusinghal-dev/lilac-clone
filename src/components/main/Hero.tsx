"use client";

import Image from "next/image";
import Link from "next/link";
import { useInView } from "../../lib/useInView";

export default function Hero() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-primary pb-16 sm:pb-20 lg:pb-10 2xl:pb-0"
    >
      <div className="px-4 sm:px-6 lg:px-10 2xl:px-0 pt-12 lg:pt-12 2xl:pt-13">
        <div className="grid grid-cols-1 lg:grid-cols-[8fr_12fr] 2xl:grid-cols-[9fr_11fr] gap-8">
          <div
            className={`mx-auto w-full max-w-80 sm:max-w-md lg:max-w-xl 2xl:max-w-179 ${slideIn}`}
          >
            <Image
              src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGhlcmFweSUyMHJvb218ZW58MHx8MHx8fDA%3D"
              alt="Calm therapy office environment in Santa Monica"
              width={780}
              height={1050}
              className="w-full h-auto rounded-t-full"
              priority
            />
          </div>

          <div className="relative flex justify-center lg:mr-24 2xl:mr-36">
            <div className="lg:absolute lg:top-[20%] 2xl:top-[24%]">
              <div className="flex flex-col items-center text-center">
                <h1
                  className={`text-3xl sm:text-4xl lg:text-[80px] 2xl:text-[102px] font-medium mb-4 lg:mb-6 2xl:mb-8.5 ${fadeInUp}`}
                >
                  Anxiety & Trauma Therapy
                  <br />
                  <div className="mt-1 lg:ml-4 2xl:ml-6">
                    in Santa Monica, CA
                  </div>
                </h1>

                <p
                  className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] mb-6 lg:mb-10 2xl:mb-15 lg:ml-4 2xl:ml-7 ${fadeIn}`}
                >
                  Supportive therapy for adults experiencing anxiety, panic,
                  burnout, or the lasting effects of past experiences. In-person
                  sessions in Santa Monica and secure telehealth across
                  California.
                </p>

                <Link
                  href="/contact"
                  className={`px-4 py-2.5 btn btn-primary border flex items-center gap-2 lg:ml-4 2xl:ml-7 ${fadeInUp}`}
                >
                  <span className="text-[13.5px] font-medium">
                    BOOK A FREE CONSULTATION
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
