import ProjectCardList from "../components/ProjectCardList";

const Project = () => {
  return (
    <div id="projects" className="my-[8rem] mx-[6rem]">
      <div className="font-sora text-[3rem] text-center mb-[3rem] text-[#679258]">
        PROJECTS
      </div>
      {/* <div>토글</div> */}

      <div className="flex justify-start items-center gap-[3rem]">
        <ProjectCardList />
      </div>
    </div>
  );
};
export default Project;
