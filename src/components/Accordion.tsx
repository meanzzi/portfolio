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
    <ul className=" flex flex-col gap-4 p-0 list-none">
      {items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
          <li
            key={index}
            className={`relative bg-white rounded-xl overflow-hidden transition-shadow duration-300 ${
              isActive ? "shadow-lg" : ""
            }`}
          >
            <div className="p-4 cursor-pointer" onClick={() => toggle(index)}>
              <h3 className="text-[1.3rem]">{item.title}</h3>
            </div>

            <div
              ref={(el) => {
                if (el) refs.current[index] = el;
              }}
              style={{
                maxHeight: isActive
                  ? `${refs.current[index]?.scrollHeight}px`
                  : "0px",
              }}
              className="overflow-hidden transition-[max-height] duration-500 border-t border-gray-300"
            >
              <p className="p-4 text-[#303030] text-[1.3rem] leading-[2.2rem]">
                {item.content}
              </p>
            </div>

            <button
              className="absolute top-4 right-4 w-8 h-8 flex justify-center items-center rounded-full text-xl focus:outline-none"
              onClick={() => toggle(index)}
            >
              {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Accordion;
