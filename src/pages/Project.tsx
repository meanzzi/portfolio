import ProjectCardList from "../components/ProjectCardList";

const Project = () => {
  return (
    <div
      id="projects"
      className="my-[5rem] md:my-[8rem] px-6 md:px-[5rem] lg:px-[9rem]"
    >
      <div className="font-sora text-[2rem] md:text-[3rem] text-center mb-[3rem] text-[#679258] font-bold">
        PROJECTS
      </div>

      <div className="flex flex-col items-center justify-center gap-[2rem] md:gap-[3rem]">
        <ProjectCardList />
      </div>
    </div>
  );
};

export default Project;
