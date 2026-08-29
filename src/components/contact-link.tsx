import { PROFILE } from "@/data/profile";

interface ContactLinkProps {
  className?: string;
}

/** Simple mailto action used in the navbar and mobile menu. */
export default function ContactLink({ className = "" }: ContactLinkProps) {
  return (
    <a
      href={`mailto:${PROFILE.email}`}
      className={`inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-transform duration-150 hover:scale-[1.05] ${className}`}
    >
      Contact Me
    </a>
  );
}
