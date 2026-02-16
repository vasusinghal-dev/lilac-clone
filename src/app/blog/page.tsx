import BlogSection from "@/src/components/blog/BlogSection";
import Hero from "@/src/components/blog/Hero";
import Subscribe from "@/src/components/blog/Subscribe";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Lilac Template",
  description:
    "Insights on healing, mental health, and personal growth from Lilac Therapy in Minneapolis, MN.",
};

export default function Blog() {
  return (
    <>
      <Hero />
      <BlogSection />
      <Subscribe />
    </>
  );
}
