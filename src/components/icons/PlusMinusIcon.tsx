interface PlusMinusIconProps {
  isOpen: boolean;
  className?: string;
}

export default function PlusMinusIcon({
  isOpen,
  className = "",
}: PlusMinusIconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 16H28" />
      <path
        d="M16 4V28"
        className={`transition-all duration-300 ease-in-out origin-center ${
          isOpen
            ? "opacity-0 scale-0 -rotate-180"
            : "opacity-100 scale-100 rotate-0"
        }`}
      />
    </svg>
  );
}
