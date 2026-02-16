export const stagger = (i: number, delay: number) =>
  ({
    "--animation-delay": `${i * delay}s`,
  }) as React.CSSProperties;
