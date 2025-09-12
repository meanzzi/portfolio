import Contact from "./Contact";
import Header from "./Header";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const MainPage = () => {
  return (
    <div className="bg-[#679258] p-[2rem]">
      <div className="bg-white rounded-[1rem]">
        <Header />
        <div className="mx-[8rem] my-[5rem]">
          <Profile />
        </div>
        <div className="mx-[6rem]">
          <Skill />
        </div>
        <Project />
        <Contact />
      </div>
    </div>
  );
};
export default MainPage;
