interface HamburgerIconProps {
  isOpen: boolean;
  className?: string;
}

export default function HamburgerIcon({
  isOpen,
  className = "",
}: HamburgerIconProps) {
  return (
    <svg
      className={`${className}`}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="0.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d={`${isOpen ? "M1 16H28" : "M1 12H28"}`}
        className={`transition-all duration-300 origin-center transform-fill ${
          isOpen ? "-rotate-135" : ""
        }`}
      />

      <path
        d={`${isOpen ? "M1 16H28" : "M1 20H28"}`}
        className={`transition-all duration-300 origin-center transform-fill ${
          isOpen ? "rotate-135" : ""
        }`}
      />
    </svg>
  );
}
