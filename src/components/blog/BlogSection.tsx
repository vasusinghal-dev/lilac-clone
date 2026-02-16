"use client";

import Link from "next/link";
import Image from "next/image";
import { useInView } from "@/src/lib/useInView";

export default function BlogSection() {
  const { ref, isVisible } = useInView();
  const fadeIn = `opacity-0 ${isVisible ? "animate-fade-in" : ""}`;
  const fadeInUp = `opacity-0 ${isVisible ? "animate-fade-in-up" : ""}`;
  const slideIn = `opacity-0 ${isVisible ? "animate-slide-in-up" : ""}`;

  const blogPosts = [
    {
      id: 1,
      date: "3/11/19",
      title: "Why Anxiety Feels So Overwhelming (and What Helps)",
      image:
        "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/166607b6-21a7-4e30-8c74-9c911c9f33fb/milles-studio-GU-Q4-SQFTg-unsplash.jpg?format=1500w",
    },
    {
      id: 2,
      date: "3/11/19",
      title: "Understanding Burnout in High-Achieving Professionals",
      image:
        "https://images.unsplash.com/photo-1613520439218-a69db537ea1d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN0cmVzc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 3,
      date: "3/11/19",
      title: "How Past Experiences Can Affect You Today",
      image:
        "https://images.unsplash.com/photo-1533764637442-ef6943191102?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFBhc3R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 4,
      date: "3/11/19",
      title: "Simple Ways to Calm Your Mind and Body",
      image:
        "https://images.unsplash.com/photo-1533162507191-d90c625b2640?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2FsbXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <section
      ref={ref}
      className="
        p-6 sm:p-10 lg:p-14
        2xl:p-19
        bg-secondary
      "
    >
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-2
          gap-y-10 sm:gap-y-12 lg:gap-y-15
          gap-x-6 sm:gap-x-10 lg:gap-x-20
          2xl:gap-x-30
        "
      >
        {blogPosts.map((post) => {
          const slug = post.title.toLowerCase().replace(/\s+/g, "-");

          return (
            <article key={post.id} className="max-w-full 2xl:max-w-221.25">
              <Link href={`/blog/${slug}`}>
                <div
                  className={`relative overflow-hidden w-full aspect-3/2 mb-3 ${slideIn}`}
                  style={
                    {
                      "--animation-delay": "0.2s",
                      "--animation-duration": "1s",
                    } as React.CSSProperties
                  }
                >
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <time className={`text-xs font-medium mb-1 block ${fadeIn}`}>
                {post.date}
              </time>

              <Link href={`/blog/${slug}`}>
                <h3
                  className={`
                    text-xl sm:text-2xl lg:text-3xl
                    2xl:text-[52px]
                    mb-2
                   ${fadeInUp}`}
                >
                  {post.title}
                </h3>
              </Link>

              <Link
                href={`/blog/${slug}`}
                className={`
                  text-sm sm:text-base
                  2xl:text-[16px]
                  font-medium border-b pt-3 sm:pt-4 lg:pt-5 pb-0.5 inline-block
                ${fadeIn}`}
              >
                Read More
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
