"use client";

import { useTocObserver } from "@/hooks/use-toc-observer";
import { cn } from "@/utils/tailwind-util";

const TOCList = () => {
  const { headingEls, currentId } = useTocObserver();

  const handleTocClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
    event.preventDefault();

    const id = event.currentTarget.dataset.headingId;

    if (!id) return;

    const element = document.getElementById(id);

    if (!element) return;

    window.scrollTo({
      top: element.offsetTop + 300,
      behavior: "smooth",
    });
  };

  return (
    <>
      {headingEls.map(({ id, textContent, nodeName }) => (
        <li key={id}>
          <a
            data-heading-id={id}
            onClick={handleTocClick}
            className={cn(
              "inline-block cursor-pointer pl-2 py-1 border-l-2 hover:underline",
              currentId === id
                ? "text-gradient-start border-gradient-start"
                : "text-slate-400",
              nodeName === "H3" && "pl-4"
            )}
          >
            {textContent}
          </a>
        </li>
      ))}
    </>
  );
};

export { TOCList };
