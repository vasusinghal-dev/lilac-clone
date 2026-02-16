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
      title: "Blog Post One",
      image:
        "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/87fa2310-36df-4a24-a9e9-1b74df73f150/tanya-trukyr-ornZV1YJNNo-unsplash.jpg?format=1500w",
    },
    {
      id: 2,
      date: "3/11/19",
      title: "Blog Post Two",
      image:
        "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/a77b422e-33ac-47b2-825f-293d33884041/valeriia-miller-5jR4rAMs5tk-unsplash+%281%29.jpg?format=2500w",
    },
    {
      id: 3,
      date: "3/11/19",
      title: "Blog Post Three",
      image:
        "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9f889e1b-ba2b-4a6d-92e9-767dd3db67ae/lilac+template+white+lilac.jpeg?format=2500w",
    },
    {
      id: 4,
      date: "3/11/19",
      title: "Blog Post Four",
      image:
        "https://images.squarespace-cdn.com/content/v1/65d10c6adcfabe1819ed4e07/9a77a6f2-1c50-4582-a5c1-5ec0dc2e94e8/daiga-ellaby-Ct6LBZHaOSc-unsplash.jpg?format=2500w",
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
