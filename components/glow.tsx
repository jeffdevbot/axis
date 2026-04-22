type Position = "top-right" | "bottom-left" | "bottom-center";

const POSITIONS: Record<Position, string> = {
  "top-right": "top-[-20%] right-[-10%]",
  "bottom-left": "bottom-[-30%] left-[-20%]",
  "bottom-center": "bottom-[-40%] left-1/2 -translate-x-1/2",
};

export function Glow({
  position,
  size = "70vw",
  maxSize = 900,
  alpha = 0.22,
}: {
  position: Position;
  size?: string;
  maxSize?: number;
  alpha?: number;
}) {
  return (
    <div
      aria-hidden
      className={`absolute pointer-events-none ${POSITIONS[position]}`}
      style={{
        width: size,
        height: size,
        maxWidth: `${maxSize}px`,
        maxHeight: `${maxSize}px`,
        background: `radial-gradient(closest-side, rgba(29, 78, 216, ${alpha}), rgba(29, 78, 216, 0) 70%)`,
      }}
    />
  );
}
