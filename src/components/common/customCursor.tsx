import React, { useEffect, useState } from "react";

interface CustomCursorProps {
  active: boolean;
  x: number;
  y: number;
}

const CustomCursor: React.FC<CustomCursorProps> = ({ active, x, y }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setVisible(true);
    } else {
      const timeout = setTimeout(() => setVisible(false), 150);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:flex"
      style={{
        transform: `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`,
        opacity: active && visible ? 1 : 0,
        transition: "opacity 200ms ease",
      }}
    >
      <div className="flex h-[120px] w-[120px] flex-col items-center justify-center rounded-full bg-[#684B62] text-[#F5E7D3] shadow-lg">
        <span className="font-serif text-[32px] leading-tight">देखें</span>

        <span className="mt-1 text-[16px] font-semibold tracking-[2px]">
          VIEW
        </span>
      </div>
    </div>
  );
};

export default CustomCursor;
