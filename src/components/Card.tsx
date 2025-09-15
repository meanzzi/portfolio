import { useNavigate } from "react-router-dom";
import type { Project } from "../data/projects";

const Card = ({ id, img, alt, name, tag, date, description }: Project) => {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/project/${id}`)}
      className="w-[25rem] h-[25rem] rounded-[1rem] shadow-lg p-[1rem] cursor-pointer"
    >
      <div className="my-[1rem] w-full h-[15rem] overflow-hidden">
        <img src={img} alt={alt} className="object-cover" />
      </div>
      <div className="flex justify-between">
        <div className="font-bold text-[1.4rem]">{name}</div>
        <div className="w-[4rem] h-[1.3rem] bg-[#6274A1] rounded-lg text-white flex items-center justify-center text-[1rem] mr-[0.5rem]">
          {tag}
        </div>
      </div>
      <div className="text-gray-500">{date}</div>
      <div>{description}</div>
    </div>
  );
};
export default Card;
