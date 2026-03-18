"use client";

interface WordRevealProps {
  text: string;
  className?: string;
  isVisible: boolean;
  baseDelay?: number;
  stagger?: number;
}

export default function WordReveal({
  text,
  className = "",
  isVisible,
  baseDelay = 0,
  stagger = 0.04,
}: WordRevealProps) {
  const words = text.split(" ");

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className={`word-reveal ${isVisible ? "visible" : ""}`}>
          <span
            style={
              { "--word-delay": `${baseDelay + i * stagger}s` } as React.CSSProperties
            }
          >
            {word}
          </span>
          {i < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
}
