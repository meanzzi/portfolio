import Card from "../components/Card";
import gt from "../assets/gt.png";
import beour from "../assets/beour.png";

const Project = () => {
  return (
    <div className="my-[8rem] mx-[6rem]">
      <div className="font-sora text-[3rem] text-center mb-[3rem] text-[#679258]">
        PROJECTS
      </div>
      <div>토글</div>

      <div className="flex justify-start items-center gap-[3rem]">
        <Card
          img={gt}
          alt="신뢰장터"
          name="신뢰장터"
          tag="Team"
          date="2024-03 ~ 2024-11"
          description="C2C 중고 물품 가격 예측 웹서비스"
        />
        <Card
          img={beour}
          alt="beour"
          name="Be:our"
          tag="Team"
          date="2025-05 ~ 진행중"
          description="비어 있는 공간이 우리(BE OUR)의 기회로"
        />
      </div>
    </div>
  );
};
export default Project;
