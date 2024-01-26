"use client";

import { useTocObserver } from "@/hooks/useTocObserver";

const TOCList = () => {
  const { headingEls, currentId } = useTocObserver();

  const handleClick =
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop + 300,
          behavior: "smooth",
        });
      }
    };

  return (
    <>
      {headingEls.map(({ id, textContent, nodeName }) => (
        <li key={id}>
          <a
            onClick={handleClick(id)}
            className={`inline-block cursor-pointer pl-2 py-1 border-l-2  hover:underline 
                ${
                  currentId === id
                    ? "text-gradient-end border-gradient-end dark:text-gradient-start dark:border-gradient-start "
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
