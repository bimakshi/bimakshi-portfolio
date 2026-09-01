import Image from "next/image";

import { PROFILE } from "@/data/profile";

interface ProfilePhotoProps {
  className?: string;
  size?: "xs" | "welcome" | "transition" | "sm" | "md" | "lg";
  variant?: "default" | "onAccent";
}

const sizeClasses = {
  xs: "h-24 w-24",
  welcome: "h-40 w-40 sm:h-52 sm:w-52",
  transition: "h-32 w-32",
  sm: "h-48 w-48 sm:h-56 sm:w-56",
  md: "h-56 w-56 sm:h-64 sm:w-64 md:h-72 md:w-72",
  lg: "h-64 w-64 sm:h-72 sm:w-72 md:h-80 md:w-80",
} as const;

const variantClasses = {
  default: "border-4 border-accent/30 shadow-lg ring-4 ring-accent/10",
  onAccent: "border-4 border-white/40 shadow-lg ring-4 ring-white/20",
} as const;

export default function ProfilePhoto({
  className = "",
  size = "md",
  variant = "default",
}: ProfilePhotoProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        className={`pointer-events-none absolute inset-0 scale-110 rounded-full blur-2xl ${
          variant === "onAccent" ? "bg-white/10" : "bg-accent/10"
        }`}
        aria-hidden
      />
      <div
        className={`relative mx-auto overflow-hidden rounded-full ${variantClasses[variant]} ${sizeClasses[size]}`}
      >
        <Image
          src={PROFILE.image}
          alt={`${PROFILE.name} profile photo`}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 224px, (max-width: 768px) 256px, 288px"
        />
      </div>
    </div>
  );
}
