import { useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  useEffect(() => {
    // Always set dark mode
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <div
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full",
        "focus:outline-hidden"
      )}
    >
    </div>
  );
};