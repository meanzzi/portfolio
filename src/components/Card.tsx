import { useNavigate } from "react-router-dom";
import type { Project } from "../data/projects";

const Card = ({ id, img, alt, name, tag, date, description }: Project) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/project/${id}`)}
      className="w-full max-w-[25rem] h-auto min-h-[25rem] rounded-[1rem] shadow-lg p-[1.5rem] cursor-pointer bg-white transition-transform hover:scale-[1.02] flex flex-col"
    >
      <div className="mb-[1rem] w-full h-[12rem] md:h-[15rem] flex-shrink-0 overflow-hidden rounded-[0.5rem]">
        <img src={img} alt={alt} className="w-full h-full object-cover" />
      </div>

      <div className="flex justify-between items-start gap-2 overflow-hidden">
        <div className="font-bold text-[1.1rem] sm:text-[1.2rem] md:text-[1.4rem] leading-tight truncate flex-1">
          {name}
        </div>

        <div className="px-2 py-1 bg-[#6274A1] rounded-lg text-white flex items-center justify-center text-[0.7rem] sm:text-[0.75rem] md:text-[0.8rem] whitespace-nowrap flex-shrink-0">
          {tag}
        </div>
      </div>

      <div className="text-gray-500 text-[0.8rem] md:text-[0.9rem] mt-1">
        {date}
      </div>
      <div className="mt-2 text-[0.9rem] md:text-[1rem] line-clamp-2 text-gray-700">
        {description}
      </div>
    </div>
  );
};

export default Card;
