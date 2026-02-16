"use client";

import Image from "next/image";
import { useInView } from "@/src/lib/useInView";

export default function OurOffice() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section
      ref={ref}
      className="bg-secondary py-20 sm:py-24 lg:py-28 2xl:py-36"
    >
      <div className="px-6 sm:px-8 lg:px-12 2xl:px-16 max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-20 2xl:mb-24">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-light tracking-tight mb-6 ${fadeInUp}`}
          >
            A Calm Space for Healing
          </h2>

          <p
            className={`max-w-3xl mx-auto text-base sm:text-lg lg:text-xl 2xl:text-2xl text-gray-600 leading-relaxed ${fadeIn}`}
          >
            Dr. Maya Reynolds offers in-person therapy from a quiet, private
            office in Santa Monica, California. The space is designed to feel
            calm, comfortable, and grounding, with natural light and a welcoming
            atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 2xl:gap-20 items-center">
          <div className="space-y-8">
            <p
              className={`text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed text-gray-700 ${fadeIn}`}
            >
              Many clients say they begin to relax the moment they walk in.
              Sessions are paced gently, with a focus on safety and comfort so
              you can talk openly and feel supported.
            </p>

            <p
              className={`text-base sm:text-lg lg:text-xl 2xl:text-2xl leading-relaxed text-gray-700 ${fadeIn}`}
            >
              In-person therapy is available in Santa Monica, and secure
              telehealth sessions are offered for clients across California.
            </p>

            <div className={`pt-6 space-y-2 ${fadeIn}`}>
              <p className="font-medium text-lg 2xl:text-xl text-gray-900">
                Office Location
              </p>
              <p className="text-gray-600">123th Street 45 W</p>
              <p className="text-gray-600">Santa Monica, CA 90401</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div
              className={`relative aspect-square overflow-hidden rounded-2xl ${slideIn}`}
            >
              <Image
                src="https://plus.unsplash.com/premium_photo-1683133976227-955341ed26b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGhlcmFweSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Therapy office seating area with natural light"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`relative aspect-square overflow-hidden rounded-2xl mt-8 ${slideIn}`}
            >
              <Image
                src="https://images.unsplash.com/photo-1754037783933-c25ff9f68f87?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRoZXJhcHklMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D"
                alt="Calm counseling office interior"
                fill
                className="object-cover"
              />
            </div>

            <div
              className={`relative col-span-2 aspect-2/1 overflow-hidden rounded-2xl ${slideIn}`}
            >
              <Image
                src="https://images.unsplash.com/photo-1541533260371-b8fc9b596d84?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGhlcmFweSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Private therapy office in Santa Monica"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
