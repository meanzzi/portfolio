import Card from "./Card";
import { projects } from "../data/projects";

const ProjectCardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] md:gap-[3rem] w-full justify-items-center">
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectCardList;
