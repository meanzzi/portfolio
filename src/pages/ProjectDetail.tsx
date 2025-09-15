import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();

  const projectId = Number(id);
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <div className="p-8">프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="bg-[#679258] p-[2rem]">
      <div className="bg-white rounded-[1rem]">
        <div onClick={() => nav(-1)} className="cursor-pointer">
          뒤로가기
        </div>
        <div className="mx-[8rem] my-[5rem]">
          <h2 className="text-xl font-semibold">역할</h2>
          <p>{project.detail.role}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">기여도</h2>
          <p>{project.detail.contribution}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">트러블슈팅</h2>
          <p>{project.detail.troubleshooting}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold">구현 화면</h2>
        </div>
      </div>
    </div>
  );
};
export default ProjectDetail;

// 프로젝트명, 기간, 프로젝트 개요, 사용 스택
// 내 역할(맡은 업무 및 기여도), 트러블 슈팅, 구현 화면(결과물), 기획 자료(노션, 피그마)
// => 중요한 것 : 역할, 기여도, 트러블슈팅, 구현화면, 기획, 배운점
