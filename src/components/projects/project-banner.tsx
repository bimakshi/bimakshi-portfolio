interface ProjectBannerProps {
  name: string;
  category?: string;
  className?: string;
}

// Deterministic gradient per project name so each card looks distinct
// without relying on screenshots. All shades derive from the theme accent.
const GRADIENTS = [
  "bg-gradient-to-br from-accent/25 via-accent/10 to-transparent",
  "bg-gradient-to-tr from-accent/20 via-accent/5 to-accent/15",
  "bg-gradient-to-r from-accent/10 via-accent/20 to-accent/5",
  "bg-gradient-to-bl from-accent/25 via-transparent to-accent/10",
];

function hashString(value: string) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

export function getProjectInitials(name: string) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0]?.toUpperCase())
    .join("");
}

export default function ProjectBanner({
  name,
  category,
  className = "",
}: ProjectBannerProps) {
  const gradient = GRADIENTS[hashString(name) % GRADIENTS.length];

  return (
    <div
      className={`relative flex w-full items-center justify-between overflow-hidden ${gradient} ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
          backgroundSize: "16px 16px",
          color: "hsl(var(--accent))",
        }}
      />
      <span className="relative z-10 pl-5 text-4xl font-black tracking-tight text-accent sm:text-5xl">
        {getProjectInitials(name)}
      </span>
      {category && (
        <span className="relative z-10 pr-5 text-xs font-semibold uppercase tracking-widest text-accent/70">
          {category}
        </span>
      )}
    </div>
  );
}
