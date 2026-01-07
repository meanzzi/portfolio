import Contact from "./Contact";
import Header from "./Header";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const MainPage = () => {
  return (
    <div className="bg-[#679258] p-4 md:p-10 lg:px-[10rem] lg:py-[4rem] scroll-smooth min-h-screen">
      <div className="bg-white rounded-[1rem] overflow-hidden">
        <Header />

        <div className="mx-4 md:mx-[5rem] lg:mx-[10rem] my-[2rem] md:my-[3rem] py-[3rem] md:py-[5rem]">
          <Profile />
        </div>

        <div className="mx-4 md:mx-[6rem] lg:mx-[9rem]">
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
