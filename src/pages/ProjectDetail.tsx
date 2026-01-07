import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Gt from "./projects/Gt";
import Beour from "./projects/Beour";
import GatherTree from "./projects/GatherTree";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-8">프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    // 💡 핵심 수정: px-[10rem]을 반응형으로 바꿉니다.
    // p-4 (모바일: 약 16px) -> md:p-10 (태블릿) -> lg:px-[10rem] (데스크탑)
    <div className="bg-[#679258] p-4 md:p-10 lg:px-[10rem] lg:py-[4rem] min-h-screen">
      <div className="bg-white rounded-[1rem] shadow-2xl min-h-[90vh]">
        {projectId === 1 && <Gt />}
        {projectId === 2 && <Beour />}
        {projectId === 3 && <GatherTree />}
      </div>
    </div>
  );
};
export default ProjectDetail;
