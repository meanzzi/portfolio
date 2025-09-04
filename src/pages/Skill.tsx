import HTML5 from "../assets/HTML5.svg";
import CSS3 from "../assets/CSS3.svg";
import Tailwind from "../assets/Tailwind.svg";
import Js from "../assets/JavaScript.svg";
import Ts from "../assets/TypeScript.svg";
import ReactLogo from "../assets/React.svg";
import ViteJs from "../assets/Vite.js.svg";
import Git from "../assets/Git.svg";
import GitHub from "../assets/GitHub.svg";
import Postman from "../assets/Postman.svg";
import AWS from "../assets/AWS.svg";
import MySQL from "../assets/MySQL.svg";
import NodeJs from "../assets/Node.js.svg";

const Skill = () => {
  return (
    <div className="my-[5rem] mx-[6rem]">
      <div className="font-bold text-[2rem] text-center mb-[3rem]">SKILLS</div>
      <div className="flex flex-wrap justify-start gap-[2rem]">
        <img src={HTML5} alt="HTML5" className="size-[6rem]" />
        <img src={CSS3} alt="CSS3" className="size-[6rem]" />
        <img src={Tailwind} alt="Tailwind" className="size-[6rem]" />
        <img src={Js} alt="Js" className="size-[6rem]" />
        <img src={Ts} alt="Ts" className="size-[6rem]" />
        <img src={ReactLogo} alt="React" className="size-[6rem]" />
        <img src={ViteJs} alt="Vite" className="size-[6rem]" />
        <img src={Git} alt="Git" className="size-[6rem]" />
        <img src={GitHub} alt="GitHub" className="size-[6rem]" />
        <img src={Postman} alt="Postman" className="size-[6rem]" />
        <img src={AWS} alt="AWS" className="size-[6rem]" />
        <img src={MySQL} alt="MySQL" className="size-[6rem]" />
        <img src={NodeJs} alt="NodeJs" className="size-[6rem]" />
      </div>
    </div>
  );
};

export default Skill;
