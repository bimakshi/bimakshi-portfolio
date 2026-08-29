import { ReactNode } from "react";

import { Schibsted_Grotesk } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import WelcomeScreen from "@/components/welcome-screen";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";

// Alpino is a commercial typeface; Schibsted Grotesk is a close, free
// grotesque available through next/font.
const displayFont = Schibsted_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export interface MainLayoutProps {
  children: ReactNode;
  onWelcomeFinished?: () => void;
}

export default function MainLayout(props: MainLayoutProps) {
  const handleWelcomeFinished = () => {
    props.onWelcomeFinished?.();
  };

  return (
    <>
      <WelcomeScreen onFinished={handleWelcomeFinished} />
      {/* Skip to content link for accessibility */}
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-50 focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-foreground"
      >
        Skip to content
      </a>
      <div
        className={classNames(
          "flex min-h-screen flex-col",
          displayFont.className
        )}
      >
        <Navbar routes={routes} />
        <main id="content" className="flex-1">
          {props.children}
        </main>
        <Footer />
      </div>
    </>
  );
}
