"use client"
import { useEffect } from "react";

export default function GlobalClickSound() {
  useEffect(() => {
    const playSound = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      
      // 클릭한 요소가 <a> 태그이거나 특정 id를 가진 요소인지 확인
      if (target.tagName.toLowerCase() === "a" || target.id === "list-category" || target.id === "list-title" || target.id === "list-date") {
        const audio = new Audio("/sounds/Click.mp3");
        audio.play().catch((err) => console.error("Audio play error:", err));
      }
    };

    document.addEventListener("click", playSound);
    return () => {
      document.removeEventListener("click", playSound);
    };
  }, []);

  return null;
}