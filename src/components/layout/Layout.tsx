import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export function Layout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-[73px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
