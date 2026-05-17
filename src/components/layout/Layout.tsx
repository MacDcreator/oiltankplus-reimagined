import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
