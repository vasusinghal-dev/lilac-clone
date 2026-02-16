"use client";

import { useInView } from "@/src/lib/useInView";

export default function OfficeInfo() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  return (
    <section
      ref={ref}
      className="
      py-16 sm:py-20 lg:py-24
      2xl:py-33.75
      bg-accent text-light
    "
    >
      <div
        className="
        px-6 sm:px-10 lg:px-14
        2xl:px-18
      "
      >
        <div
          className="
          grid grid-cols-1
          lg:grid-cols-2
          gap-12
          items-start
        "
        >
          <div className="mt-6 lg:mt-10">
            <h2
              className={`
              text-3xl sm:text-4xl lg:text-5xl
              2xl:text-[52px]
              font-medium mb-4 lg:mb-6
             ${fadeInUp}`}
            >
              A Calm Space for Healing
            </h2>

            <address
              className={`not-italic mb-6 lg:mb-8 font-medium leading-relaxed ${fadeIn}`}
            >
              <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px] mb-1">
                123th Street 45 W
              </p>
              <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px]">
                Santa Monica, CA 90401
              </p>
            </address>

            <div className={`font-medium ${fadeIn}`}>
              <h3
                className="
      text-2xl sm:text-3xl lg:text-4xl
      2xl:text-[40px]
      mb-4 lg:mb-6
    "
              >
                Sessions Available
              </h3>

              <div className="text-base sm:text-lg lg:text-xl 2xl:text-[21px]">
                <p>In-person therapy in Santa Monica</p>
                <p>Secure telehealth across California</p>
              </div>
            </div>
          </div>

          <div className={`relative w-full aspect-934/506 ${fadeIn}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13229.341554353783!2d-118.5153233555013!3d34.009601013997845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4ce02caf1cb%3A0x13cfb8fbc0fcfaaf!2sSanta%20Monica%2C%20CA%2090401%2C%20USA!5e0!3m2!1sen!2sin!4v1771239877627!5m2!1sen!2sin"
              style={{ border: 0, filter: "saturate(0.8) brightness(1.05)" }}
              className="absolute inset-0 w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office location map"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
