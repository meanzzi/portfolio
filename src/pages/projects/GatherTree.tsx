import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import jslogo from "../../assets/JavaScript.svg";
import vitelogo from "../../assets/Vite.js.svg";
import csslogo from "../../assets/CSS3.svg";
import gitgray from "../../assets/github_gray.svg";

import tree_video from "../../assets/tree_video.mp4";
import { useNavigate } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { IoMdLeaf } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { RiTreeFill } from "react-icons/ri";

const GatherTree = () => {
  const nav = useNavigate();

  return (
    <div>
      <div className="px-4 md:px-[3rem] pt-[4rem] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={back}
            onClick={() => nav(-1)}
            className="cursor-pointer w-[1.8rem] md:w-[2.3rem]"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="text-[1.5rem] md:text-[2.4rem] font-bold mr-[0.5rem] md:mr-[1rem]">
            GatherTree
          </div>
          <img src={reactlogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={jslogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={vitelogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={csslogo} className="w-[1.2rem] md:w-[1.5rem]" />
        </div>

        <div className="w-[1.8rem] md:w-[2rem]"></div>
      </div>

      <div className="text-center text-[#A4A4A4] text-[1.3rem]">
        2025-12 ~ 2025-12
      </div>
      <div className="px-5 md:mx-[6rem] my-[2rem] text-[#303030] text-[1rem] md:text-[1.3rem] leading-relaxed">
        회원가입 없이 링크로 함께 트리를 완성하는 이벤트형 드로잉 웹앱
      </div>

      <div className="px-5 md:mx-[6rem] text-[1rem] md:text-[1.3rem]">
        <div className="flex items-center gap-[1rem] md:gap-[2rem]">
          <p className="min-w-[4rem]">참여 인원</p>
          <p className="text-[#3D3D3D]">2명 (FE 1, BE 1)</p>
        </div>
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>관련 링크</p>
          <img
            src={gitgray}
            className="cursor-pointer w-[1.8rem]"
            onClick={() =>
              window.open(
                "https://github.com/semInDev/gathertree-demo-frontend.git",
                "_blank",
              )
            }
          />
        </div>
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />
      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030]">
          이 서비스는 이벤트성 프로젝트였기 때문에 얼마나 많은 사람이 부담 없이
          참여하느냐가 가장 중요하다고 생각했습니다. 단순히 기능을 구현하는
          것보다 사용자의 방해 요소를 개선하는 것에 집중했습니다.
        </div>
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          담당 역할
        </div>
        <p className="text-[1rem] md:text-[1.3rem] text-[#303030]">
          프론트엔드 개발 전담
        </p>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <FaLightbulb />
          주요 기능
        </div>
        <div className="mb-[1.5rem]">
          <ul className="list-disc pl-5 marker:text-[#679258] space-y-3">
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              <div className="flex flex-col">
                <span className="font-medium leading-[2.3rem]">
                  Canvas 기반 드로잉 기능
                </span>
                <span className=" text-[#303030] ml-1 ">
                  트리와 장식을 직접 그릴 수 있는 인터랙티브 환경 구현
                </span>
              </div>
            </li>
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              <div className="flex flex-col">
                <span className="font-medium leading-[2.3rem]">
                  장식 추가/삭제 및 위치 조정 기능
                </span>
                <span className=" text-[#303030] ml-1">
                  장식을 자유롭게 배치하고 수정할 수 있도록 설계
                </span>
              </div>
            </li>
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              <div className="flex flex-col">
                <span className="font-medium leading-[2.3rem]">
                  완성된 트리 이미지 저장 기능
                </span>
                <span className=" text-[#303030] ml-1">
                  캔버스를 이미지로 변환하여 서버에 저장
                </span>
              </div>
            </li>
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              <div className="flex flex-col">
                <span className="font-medium leading-[2.3rem]">
                  AI 평가 기능
                </span>
                <span className=" text-[#303030] ml-1">
                  완성된 트리를 분석해 결과 제공
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <BsFillLightningFill />
          문제 및 해결 과정
        </div>
        <Accordion
          items={[
            {
              title: "드로잉 선이 끊기는 문제",
              content: (
                <div>
                  <p className="text-[#000000]">문제</p>
                  마우스를 빠르게 움직이면 <code>mousemove</code> 이벤트 간격
                  때문에 선이 끊겨 보이는 현상이 발생
                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    이벤트 빈도를 늘리는 방식은 근본적인 해결이 아니라고 판단 →
                    이전 좌표와 현재 좌표 사이의 공백을 직접 채우는 방식으로
                    수정
                    <br />
                    선형 보간을 적용해 중간 좌표를 계산하도록 구현
                  </div>
                  <div>
                    <p className="text-[#000000]">결과</p>
                    빠른 드로잉에서도 자연스러운 선 표현 가능
                  </div>
                </div>
              ),
            },
            {
              title: "CORS 문제로 인해 저장이 되지 않던 문제",
              content: (
                <div>
                  <p className="text-[#000000]">문제</p>
                  장식 저장 및 트리 이미지 변환 과정에서 CORS 오류가 발생해
                  기능이 정상적으로 동작하지 않음
                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    <code>crossOrigin="anonymous"</code> 적용, 이미지 로딩 방식
                    수정 등 프론트엔드 단에서 가능한 설정 점검 <br />→ canvas
                    보안 정책상 서버의 CORS 헤더 허용이 필요함을 확인 <br />→
                    인프라 설정 변경을 요청해 협업으로 해결
                  </div>
                  <div>
                    <p className="text-[#000000]">결과</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>이미지 변환 및 저장 정상화</li>
                      <li>AI 평가까지 포함한 전체 사용자 흐름 복구</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "트리 복구 버튼 추가",
              content: (
                <div>
                  <p className="text-[#000000]">문제</p>
                  <div className="text-[#303030]">
                    <p>
                      QA 과정에서 트리를 수정한 뒤 초기 트리 상태로 되돌릴 수
                      없어 부담스럽다는 피드백 발생
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    이벤트성 서비스 특성상 자유로운 시도가 중요하다고 판단{" "}
                    <br />→ 초기 트리 상태로 언제든 복구 가능하도록 버튼 추가
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    사용자가 실패를 걱정하지 않고 자유롭게 수정·참여할 수 있는
                    환경 마련
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          배운 점
        </div>
        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>사용자 흐름을 방해하는 요소를 제거하는 것이 더 중요함을 경험</li>
          <li>
            Canvas는 명령형 API이기 때문에 React의 선언적 상태 관리 구조와
            그대로 결합할 경우 충돌 가능
          </li>
          <li>
            드로잉 로직은 <code>ref</code> 기반으로 분리, React 상태는 UI 및
            사용자 흐름 제어에만 사용하도록 역할 구분
          </li>
          <li>명령형 API와 선언형 구조를 분리해 설계하는 방법 경험</li>
        </ul>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          서비스 운영 및 사용자 지표
        </div>
        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>AWS 환경에서 서비스 배포 및 운영</li>
          <li>
            실제 사용자 행동 분석을 위해 <strong>Google Analytics 4 </strong>{" "}
            연동
          </li>
          <li>
            이벤트 기간 <strong>3일 동안 193명의 활성 사용자 확보 </strong>
          </li>
          <li>
            사용자 참여 기반 <strong>94.12% 기능 참여율 확인</strong>
          </li>
        </ul>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem] pb-[4rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <RiTreeFill />
          결과 화면
        </div>
        <video
          src={tree_video}
          controls
          className="w-full h-auto max-h-[300px] md:max-h-[450px] rounded-xl shadow-md"
        />
      </div>
      <p> </p>
    </div>
  );
};
export default GatherTree;
