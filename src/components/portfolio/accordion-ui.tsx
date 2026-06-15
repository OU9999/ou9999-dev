"use client";
import { useState } from "react";
import { AccordionIconDown, AccordionIconUp } from "../svg/accordion-icon";

interface AccordionTriggerProps {
  triggerText: string;
  clickFn: () => void;
  isOpen: boolean;
}

const AccordionTrigger = ({
  triggerText,
  clickFn,
  isOpen,
}: AccordionTriggerProps) => {
  return (
    <button
      type="button"
      onClick={clickFn}
      className="flex cursor-pointer hover:text-mineral-blue hover:underline"
    >
      <p>{triggerText}</p>
      <div className="w-3 h-3">
        {isOpen ? <AccordionIconUp /> : <AccordionIconDown />}
      </div>
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
}

const AccordionContent = ({ children }: AccordionContentProps) => {
  return <div className="">{children}</div>;
};

interface AccordionProps {
  triggerText: string;
  children?: React.ReactNode;
}
const Accordion = ({ triggerText, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const changeOpenState = (): void => setIsOpen((prev) => !prev);

  return (
    <div className="flex flex-col">
      <AccordionTrigger
        triggerText={triggerText}
        clickFn={changeOpenState}
        isOpen={isOpen}
      />
      {isOpen && <AccordionContent>{children}</AccordionContent>}
    </div>
  );
};

export { Accordion };
