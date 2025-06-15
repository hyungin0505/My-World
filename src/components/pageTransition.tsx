"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../styles/globals.css"; // CSS 파일 추가

export default function PageTransition() {
  const pathname = usePathname(); // 현재 경로 감지
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // 페이지 변경 시 로딩 상태 활성화

    const timer = setTimeout(() => {
      setLoading(false); // 애니메이션 후 로딩 종료
    }, 200); // 0.5초 후 종료 (애니메이션과 동일하게 맞춤)

    return () => clearTimeout(timer); // 이전 타이머 제거
  }, [pathname]); // 경로가 변경될 때 실행

  return loading ? <div className="page-transition" /> : null;
}