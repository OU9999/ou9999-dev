"use client";

import { useEffect, useRef, useState } from "react";

interface IHeadingElement {
  id: string;
  nodeName: string;
  textContent: string | null;
}

const observerOption = {
  threshold: 0.4,
  rootMargin: "-200px 0px 0px",
};

const useTocObserver = () => {
  const [currentId, setCurrentId] = useState<string>("");
  const [headingEls, setHeadingEls] = useState<IHeadingElement[]>([]);
  const dirRef = useRef<string>("");
  const prevYpos = useRef<number>(0);

  const checkScrollDirection = (prevY: number) => {
    if (window.scrollY === 0 && prevY === 0) return;
    dirRef.current = window.scrollY > prevY ? "down" : "up";
    prevYpos.current = window.scrollY;
  };

  /**
   * 본문 heading 요소를 관찰해 현재 TOC 활성 항목을 스크롤 방향에 맞춰 갱신함.
   */
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        checkScrollDirection(prevYpos.current);
        if (
          (dirRef.current === "down" && !entry.isIntersecting) ||
          (dirRef.current === "up" && entry.isIntersecting)
        ) {
          setCurrentId(entry.target.id);
        }
      });
    }, observerOption);

    const els = document.querySelectorAll("h2, h3");
    setHeadingEls(
      Array.from(els).map(({ id, nodeName, textContent }) => ({
        id,
        nodeName,
        textContent,
      }))
    );
    els.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, []);

  return { currentId, headingEls };
};

export { useTocObserver };
