interface SkillCardProps {
  img: string;
  alt: string;
  description: string;
}

const SkillCard = ({ img, alt, description }: SkillCardProps) => {
  return (
    <div className="group w-[6rem] h-[6rem] perspective">
      <div className="relative w-full h-full transition-transform duration-500 transform transform-style-preserve-3d group-hover:rotate-y-180">
        <div className="absolute w-full h-full backface-hidden flex items-center justify-center">
          <img src={img} alt={alt} className="size-[6rem]" />
        </div>

        <div className="absolute w-full h-full rotate-y-180 backface-hidden flex items-center justify-center rounded-lg shadow-md p-2 text-center font-school whitespace-pre-line">
          {description}
        </div>
      </div>

      <span className="absolute -top-6 left-1/2 -translate-x-1/2 px-2 py-1 text-xs bg-black text-white rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {alt}
      </span>
    </div>
  );
};
export default SkillCard;
