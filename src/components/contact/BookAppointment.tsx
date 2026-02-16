"use client";

import { useInView } from "@/src/lib/useInView";

export default function BookAppointment() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="
      py-16 sm:py-20 lg:py-24
      2xl:py-33.75
      bg-secondary
    "
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div
          className="
          mb-12 sm:mb-16 lg:mb-20
          2xl:mb-24
          max-w-xl lg:max-w-3xl 2xl:max-w-235
          mx-auto
        "
        >
          <h2
            className={`
            text-3xl sm:text-4xl lg:text-5xl
            2xl:text-[65px]
            font-medium text-center
            mb-4 sm:mb-5 lg:mb-6
            leading-tight
           ${fadeInUp}`}
          >
            Schedule your first session.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px] text-center lg:text-left">
            Dr. Maya Reynolds offers in-person therapy in Santa Monica, CA and
            secure telehealth sessions for clients across California. Reach out
            to schedule your first appointment or ask any questions about
            getting started.
          </p>
        </div>

        <div
          className="
          bg-white
          p-6 sm:p-8 lg:p-10
          2xl:p-10
          max-w-md sm:max-w-lg lg:max-w-xl 2xl:max-w-120
          mx-auto
          mt-16 sm:mt-20 lg:mt-28 2xl:mt-65
          mb-16 sm:mb-20 lg:mb-28 2xl:mb-48
          font-helvetica
        "
        >
          <div className={`px-4 sm:px-6.5 text-center ${fadeIn}`}>
            <p className="text-dark font-bold text-xl sm:text-2xl 2xl:text-[26px]">
              Appointments Available
            </p>

            <p className="text-dark text-sm my-4 sm:my-5">
              Contact Dr. Maya Reynolds to schedule your first session or a
              brief consultation to see if therapy is a good fit.
            </p>

            <a
              href="/contact"
              className="inline-block bg-dark text-white px-4 py-3.5 font-bold text-xs mt-4"
            >
              BOOK A FREE CONSULTATION
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
