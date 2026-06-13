"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";

const GiscusComment = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();
  const isProduction = process.env.NODE_ENV === "production";

  const theme = resolvedTheme === "dark" ? "dark" : "light";

  /**
   * production에서만 Giscus 스크립트를 한 번 주입해 댓글 iframe을 생성함.
   */
  useEffect(() => {
    if (!isProduction) return;
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "OU9999/ou9999-dev");
    scriptElem.setAttribute("data-repo-id", "R_kgDOLGbLOA");
    scriptElem.setAttribute("data-category", "General");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOLGbLOM4Ccupn");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", theme);
    scriptElem.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isProduction]);

  /**
   * next-themes 변경을 Giscus iframe에 전달해 댓글 테마를 현재 블로그 테마와 동기화함.
   * https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
   */
  useEffect(() => {
    if (!isProduction) return;

    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }, [isProduction, theme]);

  return <section ref={ref} />;
};

export { GiscusComment };
