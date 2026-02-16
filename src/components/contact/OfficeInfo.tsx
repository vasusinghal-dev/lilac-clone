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
              My Office
            </h2>

            <address
              className={`not-italic mb-6 lg:mb-8 font-medium leading-relaxed ${fadeIn}`}
            >
              <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px] mb-1">
                123 Example Street
              </p>
              <p className="text-base sm:text-lg lg:text-xl 2xl:text-[21px]">
                Minneapolis, MN
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
                Hours
              </h3>

              <div className="text-base sm:text-lg lg:text-xl 2xl:text-[21px]">
                <p>Monday – Friday</p>
                <p>10am – 6pm</p>
              </div>
            </div>
          </div>

          <div className={`relative w-full aspect-934/506 ${fadeIn}`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d90325.77072132952!2d-93.34400312031309!3d44.970488873642566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b333909377bbbd%3A0x939fc9842f7aee07!2sMinneapolis%2C%20MN%2C%20USA!5e0!3m2!1sen!2sin!4v1771218922334!5m2!1sen!2sin"
              style={{ border: 0, filter: "grayscale(100%)" }}
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
