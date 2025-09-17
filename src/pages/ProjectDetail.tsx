import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Gt from "./projects/Gt";
import Beour from "./projects/Beour";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  // 페이지 진입 시 스크롤 맨 위로
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-8">프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="bg-[#679258] px-[10rem] py-[4rem]">
      <div className="bg-white rounded-[1rem]">
        {projectId === 1 && <Gt />}
        {projectId === 2 && <Beour />}
      </div>
    </div>
  );
};
export default ProjectDetail;
