interface HeroIllustrationProps {
  className?: string;
}

/**
 * Flat vector illustration of a developer at her desk.
 * Accent shapes use `currentColor`, so set a text color on the element
 * (e.g. `text-accent`) to theme it.
 */
export default function HeroIllustration({
  className = "",
}: HeroIllustrationProps) {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Illustration of a developer working at a laptop"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* backdrop */}
      <circle cx="210" cy="205" r="180" fill="currentColor" opacity="0.08" />
      <circle cx="210" cy="205" r="130" fill="currentColor" opacity="0.06" />

      {/* floating code card */}
      <g opacity="0.9">
        <rect
          x="40"
          y="70"
          width="120"
          height="74"
          rx="12"
          fill="currentColor"
          opacity="0.14"
        />
        <rect x="56" y="88" width="60" height="8" rx="4" fill="currentColor" />
        <rect
          x="56"
          y="104"
          width="86"
          height="8"
          rx="4"
          fill="currentColor"
          opacity="0.55"
        />
        <rect
          x="56"
          y="120"
          width="44"
          height="8"
          rx="4"
          fill="currentColor"
          opacity="0.55"
        />
      </g>

      {/* floating chip */}
      <g opacity="0.9">
        <rect
          x="292"
          y="96"
          width="86"
          height="34"
          rx="17"
          fill="currentColor"
          opacity="0.16"
        />
        <circle cx="311" cy="113" r="8" fill="currentColor" />
        <rect
          x="326"
          y="109"
          width="40"
          height="8"
          rx="4"
          fill="currentColor"
          opacity="0.6"
        />
      </g>

      {/* desk */}
      <rect x="70" y="300" width="280" height="16" rx="6" fill="#2E2A45" />
      <rect x="88" y="316" width="12" height="52" rx="4" fill="#2E2A45" />
      <rect x="320" y="316" width="12" height="52" rx="4" fill="#2E2A45" />

      {/* plant */}
      <g>
        <path
          d="M292 300c0-16 6-30 18-38-2 14-6 26-18 38z"
          fill="currentColor"
          opacity="0.55"
        />
        <path
          d="M300 300c4-14 14-24 28-27-6 12-14 22-28 27z"
          fill="currentColor"
        />
        <path d="M286 300h34l-5 22a6 6 0 0 1-6 5h-12a6 6 0 0 1-6-5z" fill="#E4874F" />
      </g>

      {/* chair back */}
      <path
        d="M150 250c0-40 20-60 60-60s60 20 60 60v46h-120z"
        fill="currentColor"
        opacity="0.22"
      />

      {/* figure */}
      <g>
        {/* legs */}
        <path
          d="M176 300c-2-24 2-44 10-52h44c6 10 8 30 6 52h-18l-4-34-6 34z"
          fill="#3B3560"
        />
        {/* torso / top */}
        <path
          d="M168 250c0-30 18-48 42-48s42 18 42 48c0 8-2 16-4 22h-76c-2-6-4-14-4-22z"
          fill="currentColor"
        />
        {/* arm to laptop */}
        <path
          d="M238 236c14 4 26 14 30 30l-16 6c-6-12-14-20-24-24z"
          fill="currentColor"
        />
        {/* neck + head */}
        <rect x="202" y="176" width="16" height="20" rx="7" fill="#E8B18C" />
        <circle cx="210" cy="164" r="24" fill="#E8B18C" />
        {/* hair */}
        <path
          d="M186 166c0-18 10-32 26-32s26 12 26 30c-4-6-10-9-16-9 4 6 4 14-2 18 0-8-4-12-10-12-8 0-12 6-12 16-8-6-12-12-12-19z"
          fill="#2E2440"
        />
        <path
          d="M188 160c-4 18-4 34 2 50-10-4-16-16-16-30 0-9 5-16 14-20z"
          fill="#2E2440"
        />
      </g>

      {/* laptop */}
      <g>
        <path d="M250 296l-14-40h44l14 40z" fill="#4A4470" />
        <path d="M254 290l-9-28h30l9 28z" fill="currentColor" opacity="0.35" />
        <rect x="238" y="296" width="80" height="10" rx="5" fill="#5A5488" />
      </g>

      {/* baseline shadow */}
      <ellipse
        cx="210"
        cy="374"
        rx="120"
        ry="10"
        fill="currentColor"
        opacity="0.1"
      />
    </svg>
  );
}
