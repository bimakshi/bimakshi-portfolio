import { useState, useEffect, useCallback, useRef } from "react";

import {
  AnimatePresence,
  AnimationProps,
  motion,
  wrap,
  useReducedMotion,
} from "framer-motion";
import { BiSolidLeftArrow } from "react-icons/bi";

import { classNames } from "@/utility/classNames";

const variant: AnimationProps["variants"] = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

/** Encode each path segment so spaces and special chars work on Linux hosts. */
function encodePublicPath(path: string): string {
  return path
    .split("/")
    .map((segment) => (segment ? encodeURIComponent(segment) : segment))
    .join("/");
}

export type CoroselProps = {
  aspectRatio?: number;
  images: string[];
};

/**
 * Preload all images and return a map of src → natural aspect ratio.
 * Falls back to the provided default when an image hasn't loaded yet.
 */
function useImageAspectRatios(srcs: string[], fallback: number) {
  const [ratios, setRatios] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!srcs || srcs.length === 0) return;

    const controllers: Array<() => void> = [];

    srcs.forEach((src) => {
      const img = new Image();
      let cancelled = false;

      img.onload = () => {
        if (cancelled) return;
        if (img.naturalWidth && img.naturalHeight) {
          setRatios((prev) => ({
            ...prev,
            [src]: img.naturalWidth / img.naturalHeight,
          }));
        }
      };
      img.src = encodePublicPath(src);

      controllers.push(() => {
        cancelled = true;
      });
    });

    return () => controllers.forEach((cancel) => cancel());
  }, [srcs]);

  const getAspectRatio = useCallback(
    (src: string) => ratios[src] ?? fallback,
    [ratios, fallback]
  );

  return getAspectRatio;
}

export default function Corosel({ aspectRatio = 1.6, images }: CoroselProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const prefersReducedMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const getAspectRatio = useImageAspectRatios(images, aspectRatio);

  if (!images || images.length === 0) {
    return null;
  }

  const imageIndex = wrap(0, images.length, page);
  const currentAspectRatio = getAspectRatio(images[imageIndex]);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  const goToSlide = (index: number) => {
    if (index === imageIndex) return;
    const dir = index > imageIndex ? 1 : -1;
    setPage([index, dir]);
  };

  return (
    <motion.div
      ref={containerRef}
      className="group relative w-full overflow-hidden rounded-2xl bg-black/40"
      animate={{ aspectRatio: currentAspectRatio }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{ aspectRatio: currentAspectRatio }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          loading="lazy"
          decoding="async"
          draggable={false}
          alt={`Project screenshot ${imageIndex + 1} of ${images.length}`}
          className="absolute inset-0 h-full w-full object-contain"
          src={encodePublicPath(images[imageIndex])}
          custom={direction}
          variants={variant}
          initial="enter"
          animate="center"
          exit="exit"
          transition={
            prefersReducedMotion
              ? { opacity: { duration: 0.2 } }
              : {
                  x: { type: "spring", stiffness: 220, damping: 28 },
                  opacity: { duration: 0.2 },
                }
          }
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            if (prefersReducedMotion) return;
            const swipe = swipePower(offset.x, velocity.x);
            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      {images.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => paginate(-1)}
            className="absolute left-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-md transition hover:bg-accent hover:text-white sm:left-4"
          >
            <BiSolidLeftArrow className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => paginate(1)}
            className="absolute right-3 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-black/50 p-2 text-white/80 backdrop-blur-md transition hover:bg-accent hover:text-white sm:right-4"
          >
            <BiSolidLeftArrow className="h-4 w-4 rotate-180" />
          </button>
        </>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 z-10 flex flex-col items-center justify-center gap-1.5 px-4 sm:bottom-4">
          <div className="flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full bg-black/50 px-3 py-1.5 backdrop-blur-md">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Jump to screenshot ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={classNames(
                  "h-2 rounded-full transition-all duration-300",
                  index === imageIndex
                    ? "w-6 bg-accent"
                    : "w-2 bg-white/40 hover:bg-white/80"
                )}
              />
            ))}
            <span className="ml-2 text-xs font-medium text-white/80">
              {imageIndex + 1} / {images.length}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}
