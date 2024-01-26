"use client";

import { useTocObserver } from "@/hooks/useTocObserver";

const TOCList = () => {
  const { headingEls, currentId } = useTocObserver();

  return (
    <>
      {headingEls.map(({ id, textContent, nodeName }) => (
        <li key={id}>
          <a
            href={`#${id}`}
            className={`inline-block  hover:underline
                ${
                  currentId === id
                    ? "text-gradient-end dark:text-gradient-start"
                    : "text-slate-500 dark:text-slate-400"
                }
                ${nodeName === "H3" && "pl-4"}
                `}
          >
            {textContent}
          </a>
        </li>
      ))}
    </>
  );
};

export default TOCList;
