"use client";

import { useEffect, useRef, useState } from "react";
import PlusMinusIcon from "../icons/PlusMinusIcon";
import { useInView } from "../../lib/useInView";

const credentials = [
  {
    question: "Licensed Clinical Psychologist",
    answer:
      "Dr. Maya Reynolds is a licensed clinical psychologist based in Santa Monica, California, providing therapy for adults experiencing anxiety, trauma, panic, and burnout.",
  },
  {
    question: "Therapy Approach",
    answer:
      "Her work combines evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness practices, and body-oriented techniques to support both emotional and physical healing.",
  },
  {
    question: "Practice Style",
    answer:
      "Dr. Reynolds takes a warm, collaborative approach to therapy. Sessions are structured enough to feel supportive, while still allowing space for reflection, safety, and meaningful change.",
  },
];

export default function Profession() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);
  const hasAnimatedRef = useRef<boolean[]>(
    new Array(credentials.length).fill(false),
  );
  const { ref, isVisible } = useInView();
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;

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
      className="bg-secondary py-16 sm:py-20 lg:py-24 2xl:py-34 px-6 sm:px-10 lg:px-16 2xl:px-21"
    >
      <div className="flex justify-center">
        <div className="w-full max-w-xl lg:max-w-4xl 2xl:max-w-231.25">
          <h2
            className={`mb-8 lg:mb-10 text-2xl sm:text-3xl lg:text-4xl 2xl:text-[52px] font-medium text-center ${fadeInUp}`}
          >
            My Professional Background
          </h2>

          <div
            className={`border-b overflow-hidden mb-10 lg:mb-12 2xl:mb-14 ${fadeInUp}`}
            style={{ "--animation-delay": "0.4s" } as React.CSSProperties}
          >
            {credentials.map((credential, index) => {
              const isOpen = expandedIndex === index;
              const shouldAnimate = animatingIndex === index;

              return (
                <div key={index} className="border-t">
                  <button
                    onClick={() => handleToggle(index)}
                    aria-expanded={isOpen}
                    className="w-full py-3 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg sm:text-xl lg:text-2xl 2xl:text-[28px] font-medium leading-tight">
                      {credential.question}
                    </h3>

                    <PlusMinusIcon isOpen={isOpen} className="w-5" />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mb-6 lg:mb-8"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="w-full px-4 sm:px-6">
                        <div className="mx-auto max-w-xl lg:max-w-2xl">
                          <p
                            className={`text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ${
                              shouldAnimate ? "opacity-0 animate-fade-in" : ""
                            }`}
                            style={
                              {
                                "--animation-delay": "0.2s",
                              } as React.CSSProperties
                            }
                          >
                            {credential.answer}
                          </p>
                        </div>
                      </div>
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
