"use client";

import { useInView } from "@/src/lib/useInView";
import Image from "next/image";

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
            Book an appointment.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px] text-center lg:text-left">
            Add some text here if you like, and add your scheduling widget below
            (you can get one by signing up for a scheduling account through
            Squarespace, the top-tier plan is HIPAA compliant OR you can use
            your client portal).
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
              This page is not active
            </p>

            <p className="text-dark text-sm my-4 sm:my-5">
              If you&apos;re the owner, please log into your account to start a
              free trial or subscribe.
            </p>

            <a
              href="https://login.squarespace.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-dark text-white px-4 py-3.5 font-bold text-xs mt-4"
            >
              GO TO ACCOUNT
            </a>
          </div>
        </div>

        <div className={`text-center my-8 sm:my-10 ${fadeIn}`}>
          <a
            href="https://www.acuityscheduling.com/?utm_campaign=acuity&utm_medium=referral&utm_source=scheduling"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <div className="relative w-32 sm:w-40 lg:w-42 h-10 sm:h-12 mx-auto">
              <Image
                alt="Powered By Acuity Scheduling"
                src="https://app.squarespacescheduling.com/img/brand/logo-powered-by-acuity.png"
                fill
                className="object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
