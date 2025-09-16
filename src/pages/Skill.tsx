import SkillCard from "../components/SkillCard";
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
    <div id="skills">
      <div className="font-sora text-[3rem] text-center mt-[5rem] mb-[6rem] text-[#679258]">
        SKILLS
      </div>
      <div className="flex flex-wrap justify-start gap-[2rem]">
        <SkillCard img={HTML5} alt="HTML5" description="웹표준·시맨틱 마크업" />
        <SkillCard img={CSS3} alt="CSS3" description={"반응형 UI \n구현"} />
        <SkillCard
          img={Tailwind}
          alt="Tailwind"
          description="Utility-first 스타일링"
        />
        <SkillCard img={Js} alt="Js" description="동적 인터랙션 개발" />
        <SkillCard img={Ts} alt="Ts" description="타입 안정성 기반 개발" />
        <SkillCard
          img={ReactLogo}
          alt="React"
          description={"컴포넌트 \n설계,\n 상태 관리"}
        />
        <SkillCard
          img={ViteJs}
          alt="Vite"
          description={"빠른 개발 \n환경 세팅"}
        />
        <SkillCard img={Git} alt="Git" description={"Git Flow \n협업"} />
        <SkillCard img={GitHub} alt="GitHub" description={"Git Flow \n협업"} />
        <SkillCard
          img={Postman}
          alt="Postman"
          description="API 테스트, 디버깅"
        />
        <SkillCard img={AWS} alt="AWS" description={"클라우드 \n배포 경험"} />
        <SkillCard img={MySQL} alt="MySQL" description="데이터 연동 경험" />
        <SkillCard img={NodeJs} alt="NodeJs" description={"서버 환경 \n이해"} />
      </div>
    </div>
  );
};

export default Skill;
