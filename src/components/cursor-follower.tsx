"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Lightweight custom cursor: a precise dot plus a springy trailing ring
 * that expands over interactive elements. Replaces the old WebGL fluid cursor.
 */
export default function CursorFollower() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const ringX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.4 });
  const ringY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.4 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!finePointer || reduced) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const interactiveSelector =
      'a, button, [role="button"], input, textarea, select, label, summary, .cursor-pointer';

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(Boolean(target?.closest(interactiveSelector)));
    };
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const ringScale = pressed ? 0.7 : hovering ? 1.8 : 1;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* trailing ring */}
      <motion.div
        className="absolute h-8 w-8 rounded-full border border-accent"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovering
            ? "hsl(var(--accent) / 0.12)"
            : "transparent",
        }}
        animate={{ scale: ringScale }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      />
      {/* precise dot */}
      <motion.div
        className="absolute h-1.5 w-1.5 rounded-full bg-accent"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: pressed ? 1.8 : 1, opacity: hovering ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      />
    </div>
  );
}
