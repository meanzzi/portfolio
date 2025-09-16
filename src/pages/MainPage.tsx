import Contact from "./Contact";
import Header from "./Header";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const MainPage = () => {
  return (
    <div className="bg-[#679258] p-[2rem] scroll-smooth">
      <div className="bg-white rounded-[1rem]">
        <Header />
        <div className="mx-[8rem] my-[3rem] py-[5rem]">
          <Profile />
        </div>
        <div className="mx-[6rem]">
          <Skill />
        </div>
        <Project />
        <div className="mb-[3rem]">
          <Contact />
        </div>
      </div>
    </div>
  );
};
export default MainPage;
