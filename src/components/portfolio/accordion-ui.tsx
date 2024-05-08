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
    <div onClick={clickFn} className="flex cursor-pointer hover:underline">
      <p>{triggerText}</p>
      <div className={`w-3 h-3`}>
        {isOpen ? <AccordionIconUp /> : <AccordionIconDown />}
      </div>
    </div>
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

  const changeOpenState = () => setIsOpen((prev) => !prev);

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

export default Accordion;
