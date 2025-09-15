import Card from "./Card";
import { projects } from "../data/projects";

const ProjectCardList = () => {
  return (
    <div className="flex flex-wrap gap-[3rem]">
      {projects.map((project) => (
        <Card key={project.id} {...project} />
      ))}
    </div>
  );
};

export default ProjectCardList;
