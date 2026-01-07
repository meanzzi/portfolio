import { useState, useRef } from "react";
import type { ReactNode } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

interface AcdItem {
  title: string;
  content: string | ReactNode;
}

interface AccordionProps {
  items: AcdItem[];
}

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const refs = useRef<HTMLDivElement[]>([]);

  const toggle = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <ul className="flex flex-col gap-4 p-0 list-none">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <li
            key={index}
            className={`relative bg-white rounded-xl overflow-hidden transition-shadow duration-300 ${
              isActive
                ? "shadow-lg border border-[#679258]/30"
                : "border border-gray-100"
            }`}
          >
            <div
              className="p-4 pr-12 cursor-pointer flex items-center min-h-[4rem]"
              onClick={() => toggle(index)}
            >
              <h3 className="text-[1.1rem] md:text-[1.3rem] font-semibold text-[#303030]">
                {item.title}
              </h3>
            </div>

            <div
              ref={(el) => {
                if (el) refs.current[index] = el;
              }}
              style={{
                maxHeight: isActive
                  ? `${refs.current[index]?.scrollHeight}px`
                  : "0px",
                borderTop: isActive
                  ? "1px solid #e5e7eb"
                  : "0px solid transparent",
              }}
              className="overflow-hidden transition-[max-height] duration-500 ease-in-out border-gray-200"
            >
              <div className="p-4 md:p-6 text-[#303030] text-[0.95rem] md:text-[1.1rem] leading-[1.8rem] md:leading-[2.2rem]">
                {item.content}
              </div>
            </div>

            <button
              className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center rounded-full text-2xl text-gray-400 focus:outline-none"
              onClick={() => toggle(index)}
            >
              {isActive ? (
                <MdKeyboardArrowUp className="text-[#679258]" />
              ) : (
                <MdKeyboardArrowDown />
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
