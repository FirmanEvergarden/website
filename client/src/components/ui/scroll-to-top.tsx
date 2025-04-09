import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mengoptimalkan dengan throttling
  const toggleVisibility = useCallback(() => {
    const shouldBeVisible = window.scrollY > 500;
    if (isVisible !== shouldBeVisible) {
      setIsVisible(shouldBeVisible);
    }
  }, [isVisible]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Menggunakan throttling untuk performance
    let throttleTimer: number | null = null;
    const throttledScroll = () => {
      if (!throttleTimer) {
        throttleTimer = window.setTimeout(() => {
          throttleTimer = null;
          toggleVisibility();
        }, 150); // Throttle 150ms
      }
    };

    window.addEventListener("scroll", throttledScroll);
    // Panggil awal untuk menentukan status tombol
    toggleVisibility();
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (throttleTimer) window.clearTimeout(throttleTimer);
    };
  }, [toggleVisibility]);

  // Jika tidak terlihat, tidak perlu render apapun
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        size="icon"
        onClick={scrollToTop}
        className="rounded-full bg-primary hover:bg-primary/90 shadow"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ScrollToTop;
