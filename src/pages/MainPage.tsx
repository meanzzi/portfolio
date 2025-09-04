import Contact from "./Contact";
import Header from "./Header";
import Profile from "./Profile";
import Project from "./Project";
import Skill from "./Skill";

const MainPage = () => {
  return (
    // 마진 더 줘야할듯?, profile 내용 늘리기
    <div className="">
      <Header />
      <Profile />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
};
export default MainPage;
