"use client";

import Link from "next/link";
import { useInView } from "../../lib/useInView";

export default function Footer() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;

  return (
    <footer ref={ref}>
      <div className="lg:px-16 2xl:px-20 py-10 sm:py-12 lg:py-14 2xl:py-16">
        <div className="flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left lg:justify-between gap-10 lg:mb-20 2xl:mb-28">
          <div
            className={`max-w-sm ${fadeInUp}`}
            style={{ "--animation-delay": "0.4s" } as React.CSSProperties}
          >
            <h3 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-[52px] font-medium mb-5 lg:mb-6 2xl:mb-7">
              Lilac Template
            </h3>

            <div className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px]">
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>

            <div className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] mt-3 flex flex-col items-center lg:items-start gap-1">
              <a
                href="mailto:email@example.com"
                className="underline underline-offset-5 decoration-0"
              >
                email@example.com
              </a>
              <a
                href="tel:555-555-5555"
                className="underline underline-offset-5 decoration-0"
              >
                (555) 555-5555
              </a>
            </div>
          </div>

          <div
            className={`flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-start gap-6 lg:gap-20 2xl:gap-88  ${fadeInUp}`}
            style={{ "--animation-delay": "0.4s" } as React.CSSProperties}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[40.5px] font-medium mb-5 lg:mb-6 2xl:mb-7">
                Hours
              </h3>
              <div className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px]">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl lg:text-[32px] 2xl:text-[40.5px] font-medium mb-5 lg:mb-6 2xl:mb-7">
                Find
              </h3>
              <nav className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] flex flex-col items-center lg:items-end">
                <Link
                  href="/"
                  className="underline underline-offset-5 decoration-0"
                >
                  Home
                </Link>
                <Link
                  href="/contact"
                  className="underline underline-offset-5 decoration-0"
                >
                  Contact
                </Link>
                <Link
                  href="/blog"
                  className="underline underline-offset-5 decoration-0"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-sm lg:text-base 2xl:text-[16px] font-medium">
        <div className="py-8 lg:py-12  px-4">
          <div className="max-w-7xl mx-auto lg:my-8 2xl:my-10">
            <div
              className={`flex flex-col items-center text-center gap-3 ${fadeInUp}`}
              style={{ "--animation-delay": "0.6s" } as React.CSSProperties}
            >
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-3 gap-y-2">
                <Link
                  href="/privacy-policy"
                  className="underline underline-offset-2 decoration-0"
                >
                  Privacy & Cookies Policy
                </Link>
                <Link
                  href="/good-faith-estimate"
                  className="underline underline-offset-2 decoration-0"
                >
                  Good Faith Estimate
                </Link>
                <Link
                  href="/terms-conditions"
                  className="underline underline-offset-2 decoration-0"
                >
                  Website Terms & Conditions
                </Link>
                <Link
                  href="/disclaimer"
                  className="underline underline-offset-2 decoration-0"
                >
                  Disclaimer
                </Link>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-x-1 gap-y-2">
                <span>Website Template Credits:</span>
                <a
                  href="https://www.gobloomcreative.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 decoration-0 font-medium"
                >
                  Go Bloom Creative
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 lg:mt-12 2xl:mt-16 flex justify-center items-center">
            <span
              className={`text-center ${fadeIn}`}
              style={{ "--animation-delay": "0.6s" } as React.CSSProperties}
            >
              All Rights Reserved © 2024 Your Business Name Here, LLC.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
