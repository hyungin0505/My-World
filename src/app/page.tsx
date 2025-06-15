// import "./../styles/globals.css";
// import "./../styles/mainPage.css"

// export default function Home() {
//   return (
//     <h1 className="main-welcome">Hello, World!!</h1>
//   );
// }

"use client"
import "./../styles/globals.css";
import "./../styles/mainPage.css"

import { useState, useEffect } from "react";

/* eslint-disable @typescript-eslint/no-unused-vars */

export default function Home() {
  const fullText = "Hello World!!";
  const [text, setText] = useState("");
  const [isBlinking, setIsBlinking] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // 글자가 깜빡이도록 추가

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);

        // 타이핑 끝나면 깜빡이기 시작
        setIsBlinking(true);
        let blinkCount = 0;
        const blinkInterval = setInterval(() => {
          setIsVisible(prev => !prev); // 글자 자체를 깜빡이게 함
          blinkCount++;
          if (blinkCount >= 8) { // 3번 깜빡이면 초기화
            clearInterval(blinkInterval);
            setIsBlinking(false);
            setText("");
            setIsVisible(true);
            setTimeout(() => {
              startTyping();
            }, 800);
          }
        }, 500);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const startTyping = () => {
    setText("");
    setIsBlinking(false);
    setIsVisible(true);
    let i = 0;
    const typingInterval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(typingInterval);
        setIsBlinking(true);
        let blinkCount = 0;
        const blinkInterval = setInterval(() => {
          setIsVisible(prev => !prev);
          blinkCount++;
          if (blinkCount >= 8) {
            clearInterval(blinkInterval);
            setIsBlinking(false);
            setText("");
            setIsVisible(true);
            setTimeout(() => {
              startTyping();
            }, 1000);
          }
        }, 300);
      }
    }, 150);
  };

  return (
    <div className="main-welcome">
      <h1 className={`text-5xl text-white ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-300`}>
        {text}
      </h1>
    </div>
  );
}