import Link from "next/link";

export default function NotFound() {
  return (
    <section className="border-b px-6 sm:px-10 lg:px-16 2xl:px-20 py-20">
      <p className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] animate-fade-in">
        We couldn&apos;t find the page you were looking for. This is either
        because:
      </p>
      <div className="h-4 lg:h-6"></div>
      <ul className="list-disc pl-6 space-y-2 text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] ml-4">
        <li>
          There is an error in the URL entered into your web browser. Please
          check the URL and try again.
        </li>
        <li>The page you are looking for has been moved or deleted.</li>
      </ul>

      <div className="h-4 lg:h-6"></div>

      <p className="text-base sm:text-lg lg:text-[18px] 2xl:text-[21px] animate-fade-in">
        You can return to our homepage by <Link href="/">clicking here</Link>,
        or you can try searching for the content you are seeking by clicking{" "}
        <Link href="/search">clicking here</Link>.
      </p>
    </section>
  );
}
