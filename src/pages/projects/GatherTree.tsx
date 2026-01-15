import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import jslogo from "../../assets/JavaScript.svg";
import vitelogo from "../../assets/Vite.js.svg";
import csslogo from "../../assets/CSS3.svg";
import gitgray from "../../assets/github_gray.svg";

import tree_video from "../../assets/tree_video.mp4";
import tree_1 from "../../assets/tree_1.png";
import tree_2 from "../../assets/tree_2.png";
import tree_3 from "../../assets/tree_3.png";
import tree_4 from "../../assets/tree_4.png";
import tree_5 from "../../assets/tree_5.png";
import tree_6 from "../../assets/tree_6.png";
import tree_GA from "../../assets/tree_GA.png";

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
        유저가 직접 트리를 그리고, 친구에게 공유 URL을 보내 장식을 받아 함께
        꾸미는 이벤트형 웹앱입니다. 완성된 트리는 AI에게 순한맛/매운맛 평가를
        받을 수 있고, 결과 이미지를 다운로드 할 수 있습니다.
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
                "_blank"
              )
            }
          />
        </div>
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>핵심 기술</p>
          Nes.css (Retro UI), Canvas API, Linear Interpolation, GA4 Analytics,
          GPT-4o Vision
        </div>
        <div className="flex items-start gap-[2rem]">
          <p>핵심 성과</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>
              <strong>선형 보간 알고리즘</strong>을 적용하여 브라우저 이벤트
              샘플링 한계로 인한 <strong>드로잉 끊김 문제를 해결</strong>하고
              매끄러운 UX 제공
            </li>
            <li>
              GA4 분석 결과,{" "}
              <strong>이벤트 기간 내 활성 전환율 100% 및 참여율 94.12%</strong>
              를 기록하며 직관적인 UI 설계의 유효성을 정량적으로 증명
            </li>
            <li>
              <strong>Hidden Layer</strong>를 활용해 서비스 화면과 별개인{" "}
              <strong>9:16 비율의 인스타그램 스토리용 이미지 추출 기능</strong>
              을 구현
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          담당 역할 및 기여 (Frontend Developer)
        </div>

        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>
            커스텀 픽셀 편집기 개발: Canvas API를 활용하여 픽셀 단위 드로잉,
            레이어 합성, 초기화 기능을 포함한 편집 시스템 구축
          </li>
          <li>
            데이터 통신 및 상태 관리: 비회원 기반 UUID 식별 로직을 처리하고
            트리/장식 데이터의 CRUD 파이프라인 설계
          </li>
          <li>
            AI 분석 결과 시각화: OpenAI API 응답 데이터를 가공하여 트리 이미지와
            병합하고, 공유용 고해상도 이미지를 추출하는 프로세스 설계
          </li>
          <li>
            트러블슈팅 및 최적화: 캔버스 점 끊김 현상 해결, S3 CORS 보안 이슈
            대응, 공유용 9:16 비율 가상 레이아웃 구현
          </li>
        </ul>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <FaLightbulb />
          주요 기능 상세 구현
        </div>
        <Accordion
          items={[
            {
              title: "픽셀 아트 편집 및 레이어 시스템",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={tree_1}
                      alt="트리 편집 화면"
                      className="w-[46%] md:max-w-[16rem] lg:max-w-[20rem] h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={tree_2}
                      alt="트리 편집 화면"
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      160×192(트리), 32×32(장식) 규격의 편집기를 구현하고, 기본
                      가이드와 사용자 드로잉을 비동기( <code>img.decode()</code>{" "}
                      )로 합성하는 시스템 구축
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "수학적 좌표 매핑",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={tree_3}
                      alt="장식 관리 화면"
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={tree_4}
                      alt="장식 관리 화면"
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      트리의 피라미드 구조를 고려한{" "}
                      <strong>슬롯 좌표 산출 공식</strong>을 직접 설계하여,
                      데이터 인덱스에 따라 장식이 실시간으로 정렬되는 동적
                      재구성 로직 구현
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "AI 멀티 페르소나 평가 및 SNS 공유",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={tree_5}
                      alt="AI 평가 결과 화면"
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={tree_6}
                      alt="AI 평가 결과 화면"
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      GPT-4o API를 연동한 맞춤형 평가 결과를 제공하고, 뷰포트
                      외부 가상 영역을 활용해 인스타그램 스토리 규격에 최적화된
                      결과물 생성
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "GA4 기반 데이터 분석 및 사용자 지표 최적화",
              content: (
                <div>
                  <img
                    src={tree_GA}
                    alt="GA4 분석 결과 대시보드"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-[0.95rem] md:text-[1.1rem]">
                    서비스의 확산력을 객관적으로 검증하기 위해 Google Analytics
                    4(GA4)를 연동하여 실사용자 지표를 추적. 기간(3일) 동안
                    193명의 활성 사용자를 기록했으며, 유입된 모든 사용자가 실제
                    상호작용으로 이어지는 <strong>활성 전환율 100%</strong>와{" "}
                    <strong>94.12%의 높은 참여율</strong>을 달성
                  </p>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <BsFillLightningFill />
          트러블 슈팅
        </div>
        <Accordion
          items={[
            {
              title: "선형 보간을 활용한 캔버스 드로잉 끊김 현상 개선",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      마우스 이동 속도가 빠를 때 mousemove 이벤트 호출 간격으로
                      인해 선이 끊긴 점 형태로 그려지는 문제 발생
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      이전 좌표와 현재 좌표 사이의 거리를 계산하여 빈 공백을
                      수학적으로 채워 넣는{" "}
                      <strong>선형 보간(Linear Interpolation) 알고리즘</strong>{" "}
                      적용
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      하드웨어 성능 한계를 알고리즘적 사고로 극복하여 끊김 없는
                      부드러운 드로잉 환경 구축
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "CORS 정책 대응을 통한 Canvas 오염(Tainted) 문제 해결",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      S3에서 불러온 이미지를 Canvas에 렌더링 후 캡처 시,
                      브라우저 보안 정책(CORS)으로 인해 저장 기능이 차단되는
                      문제 발생
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    S3 버킷의 CORS Policy를 설정하고, 이미지 로드 시
                    <code>crossOrigin="anonymous"</code> 속성을 명시하여 보안
                    컨텍스트 내 리소스 로드 허용
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    캔버스 오염 없이 정상적인 이미지 캡처 및 저장 기능 구현
                  </div>
                </div>
              ),
            },
            {
              title: "QA 피드백을 반영한 캔버스 편집 시스템 개선",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      "시작이 어렵다", "되돌릴 수 없다"는 피드백을 바탕으로
                      사용자 심리적 허들 감소 필요성 확인
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        <strong>다중 레이어 렌더링:</strong> 기본 트리
                        가이드(baseImage)와 사용자 드로잉 데이터를{" "}
                        <code>img.decode()</code> 비동기 파이프라인을 통해
                        순차적으로 합성
                      </li>
                      <li>
                        <strong>선언적 상태 초기화:</strong> React의{" "}
                        <code>key</code> 속성을 변경하여 컴포넌트를 재마운트
                        시키는 방식으로 초기화 로직 단순화
                      </li>
                      <li>
                        <strong>픽셀 아트 스타일 최적화:</strong>{" "}
                        <code>imageSmoothingEnabled = false</code>와 CSS{" "}
                        <code>pixelated</code> 속성을 적용해 저해상도 이미지의
                        선명도 유지
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        트리 복구 기능 도입으로 드로잉 실패에 대한 사용자 심리적
                        허들 감소 및 UX 개선
                      </li>
                      <li>
                        명령형 API인 Canvas를 React의 선언적 렌더링 전략 내에서
                        효율적으로 제어하는 경험
                      </li>
                      <li>
                        편집 데이터를 Base64로 실시간 동기화하여 클라이언트와
                        서버 간 상태 정합성 확보
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "캡처 전용 Hidden 영역 설계를 통한 결과물 공유 최적화",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      웹 화면의 레이아웃과 인스타그램 스토리용(9:16) 공유 이미지
                      레이아웃이 달라 일반 캡처가 불가능한 상황
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    뷰포트 밖에 <strong>캡처 전용 가상 렌더링 영역</strong>을
                    설계하고 트리 데이터와 AI 텍스트를 재배치하여 고해상도 PNG
                    추출
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    실제 화면과 무관하게 공유에 최적화된 결과물 생성이 가능한
                    '가상 렌더링 캐싱' 환경 구축
                  </div>
                </div>
              ),
            },
          ]}
        />
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
