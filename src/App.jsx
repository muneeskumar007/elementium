import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tomorrow from "./components/Tomorrow";
// import Progress from "./components/Progress";

import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import NewsletterAndFooter from "./components/NewsletterAndFooter";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <div className="fade-in"><Hero /></div>
        <div className="fade-in"><Tomorrow /></div>
        {/* <div className="fade-in"><Progress /></div> */}
        <div className="fade-in"><Services /></div>
        <div className="fade-in"><Testimonials /></div>
      </main>
      <NewsletterAndFooter />
    </div>
  );
}
