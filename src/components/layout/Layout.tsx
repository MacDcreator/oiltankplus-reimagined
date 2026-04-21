import { Header } from "./Header";
import { Footer } from "./Footer";
import { StickyMobileCTA } from "./StickyMobileCTA";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};
