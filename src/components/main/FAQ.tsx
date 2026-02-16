"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import PlusMinusIcon from "../icons/PlusMinusIcon";
import { useInView } from "../../lib/useInView";
import { stagger } from "../../lib/utility";

const faqs = [
  { question: "Do you take insurance?", answer: "Answer goes here." },
  { question: "What are your rates?", answer: "Answer goes here." },
  { question: "Do you have any openings?", answer: "Answer goes here." },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const hasAnimatedRef = useRef<boolean[]>(new Array(faqs.length).fill(false));
  const { ref, isVisible } = useInView();
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  const handleToggle = (index: number) => {
    const isExpanding = expandedIndex !== index;
    setExpandedIndex(isExpanding ? index : null);

    if (isExpanding && !hasAnimatedRef.current[index]) {
      setAnimatingIndex(index);
    }
  };

  useEffect(() => {
    if (animatingIndex !== null) {
      hasAnimatedRef.current[animatingIndex] = true;

      const timer = setTimeout(() => {
        setAnimatingIndex(null);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [animatingIndex]);

  return (
    <section
      ref={ref}
      className="py-12 sm:py-18 lg:py-24 2xl:py-33.25 px-6 sm:px-10 lg:px-16 2xl:px-21"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-6">
        <div
          className={`order-1 lg:order-1 mx-auto w-full max-w-44 sm:max-w-xs4 lg:max-w-md 2xl:max-w-144.5 ${slideIn}`}
        >
          <Image
            src="https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/3a7e28f0-28fd-47cd-9857-6c415afed795/myxa69-APKZU4NJcgs-unsplash.jpg?format=2500w"
            alt="FAQ image"
            width={578}
            height={868}
            className="w-full h-auto rounded-t-full"
            priority
          />
        </div>

        <div className="order-2 relative flex flex-col justify-center py-6 sm:py-8 lg:py-0">
          <div className="mb-8 lg:mb-12 2xl:mb-18">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl 2xl:text-[65px] font-medium ${fadeInUp}`}
            >
              FAQs
            </h2>
          </div>

          <div className="border-b overflow-hidden">
            {faqs.map((faq, index) => {
              const isExpanded = expandedIndex === index;
              const shouldAnimate = animatingIndex === index;

              return (
                <div
                  key={index}
                  className={`border-t  ${slideIn}`}
                  style={
                    {
                      ...stagger(index + 1, 0.05),
                      "--animation-duration": "1s",
                    } as React.CSSProperties
                  }
                >
                  <button
                    onClick={() => handleToggle(index)}
                    className="w-full p-3 flex justify-start items-center"
                  >
                    <PlusMinusIcon isOpen={isExpanded} className="w-10" />

                    <h3 className="text-[28px] sm:text-[35px] lg:text-[44px] 2xl:text-[52px] font-medium text-left">
                      {faq.question}
                    </h3>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96 pb-4 lg:pb-6" : "max-h-0"
                    }`}
                  >
                    <div
                      className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] px-3 ${
                        shouldAnimate ? "opacity-0 animate-fade-in" : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
