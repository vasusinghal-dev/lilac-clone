"use client";

import Image from "next/image";
import { useInView } from "../../lib/useInView";

const specialties = [
  {
    title: "Anxiety & Panic",
    description:
      "If you feel constantly worried, tense, or on edge, therapy can help you calm your mind and body and learn ways to manage anxiety in daily life.",
    imageURL:
      "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1500w",
  },
  {
    title: "Trauma & Past Experiences",
    description:
      "Past experiences can affect your sleep, confidence, and relationships. Therapy offers a safe, steady way to process those memories and feel more secure again.",
    imageURL:
      "https://images.unsplash.com/photo-1533764637442-ef6943191102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBhc3R8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Burnout & Stress",
    description:
      "If work pressure or perfectionism has left you exhausted, therapy can help you slow down, set healthy boundaries, and find a more balanced way to live and work.",
    imageURL:
      "https://images.unsplash.com/photo-1613520439218-a69db537ea1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D",
  },
];

export default function Specialties() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  return (
    <section ref={ref} className="py-12 sm:py-18 lg:py-24 2xl:py-33.75">
      <div className="px-4 sm:px-8 lg:px-12 2xl:px-19.25">
        <div className="text-center mt-2 mb-10 lg:mb-14 2xl:mt-2.75 2xl:mb-16">
          <h2 className="text-3xl lg:text-5xl 2xl:text-[65px] font-medium mb-4">
            My Specialties
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-5">
          {specialties.map((specialty, index) => (
            <div key={index} className="bg-secondary shadow-sm border">
              <div className="w-full p-4 sm:p-5 text-left flex flex-col justify-between items-start gap-8 lg:gap-10 2xl:gap-14">
                <h3
                  className={`text-lg lg:text-[19px] 2xl:text-[20.5px] font-medium ${fadeInUp}`}
                >
                  {specialty.title}
                </h3>

                <p
                  className={`text-sm lg:text-[13px] 2xl:text-[13.5px] ${fadeIn}`}
                >
                  {specialty.description}
                </p>

                <div
                  className={`relative mx-auto w-full max-w-64 lg:max-w-80 2xl:max-w-107.5 aspect-square overflow-hidden ${slideIn}`}
                  style={
                    {
                      "--animation-delay": "0.4s",
                      "--animation-duration": "1s",
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={specialty.imageURL}
                    alt="Life section image"
                    fill
                    className={`rounded-full object-cover ${
                      index === 1 ? "object-[14%_99%]" : "object-[14%_50%]"
                    }`}
                    priority
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
