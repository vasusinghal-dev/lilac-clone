"use client";

import { useInView } from "@/src/lib/useInView";
import Image from "next/image";

export default function LetsConnect() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section ref={ref} className="bg-tertiary">
      <div
        className="
          pt-16 pb-20 px-6
          sm:px-10
          lg:px-16
          2xl:pt-33.75 2xl:pb-53.75 2xl:mx-38.75
        "
      >
        <h1
          className={`
            mb-6
            text-3xl sm:text-4xl lg:text-5xl 2xl:text-[102px]
            font-medium text-primary leading-tight
           ${fadeInUp}`}
        >
          Let’s Connect
        </h1>

        <div
          className="
            grid grid-cols-1
            lg:grid-cols-2
            gap-12
            mt-10 lg:mt-16 2xl:mt-22
            mb-6
          "
        >
          <div className="space-y-4 max-w-full 2xl:max-w-140">
            <p
              className={`text-base sm:text-lg lg:text-xl 2xl:text-[21px] ${fadeIn}`}
            >
              Reaching out for therapy can feel like a big step.
            </p>
            <p
              className={`text-base sm:text-lg lg:text-xl 2xl:text-[21px] ${fadeIn}`}
            >
              Contact Dr. Maya Reynolds to ask questions or schedule your first
              session in Santa Monica or through secure telehealth anywhere in
              California.
            </p>

            <div
              className={`
                relative flex flex-col items-center
                mt-8 lg:mt-11
                lg:ml-10 2xl:ml-20
                max-w-xs sm:max-w-sm lg:max-w-md 2xl:max-w-75.75
               ${slideIn}`}
            >
              <Image
                src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w"
                alt="Hero image"
                width={320}
                height={480}
                className="w-full h-auto rounded-t-full"
                priority
              />

              <div
                className="
                  absolute
                  -bottom-10 -right-4
                  sm:-bottom-12 sm:-right-8
                  lg:-bottom-16 lg:-right-14
                  2xl:-bottom-20 2xl:-right-24
                  w-32 sm:w-40 lg:w-48 2xl:max-w-56.25
                  aspect-square
                "
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

          <div
            className={`
              bg-text-primary
              p-6 sm:p-8 lg:p-10 2xl:p-11.5
              max-w-full lg:max-w-xl 2xl:max-w-194.25
              lg:max-h-88
             ${slideIn}`}
          >
            <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px] text-secondary">
              You can reach Dr. Maya Reynolds to schedule an appointment or ask
              questions about therapy options. In-person sessions are available
              in Santa Monica, CA, along with secure telehealth sessions across
              California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
