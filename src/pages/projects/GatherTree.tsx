import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import jslogo from "../../assets/JavaScript.svg";
import vitelogo from "../../assets/Vite.js.svg";
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
        <div className="flex items-start gap-[2rem]">
          <p>주요 기능</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>사용자 참여형 Canvas 인터랙션 (픽셀 아트)</li>
            <li>URL 기반의 간편한 협업 및 공유 프로세스</li>
            <li>
              OpenAI API를 활용한 맞춤형 트리 분석 및 제목 생성 (순한맛/매운맛)
            </li>
            <li>가벼운 웹 환경을 지향하는 최적화된 이벤트 페이지</li>
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
            데이터 통신 및 상태 관리: Axios를 활용하여 트리/장식 데이터의 CRUD를
            구현하고, 비회원 기반의 UUID 식별 로직 처리
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
              title: "커스텀 픽셀 아트 편집 및 레이어 시스템",
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
                      HTML5 Canvas API를 활용하여 160×192(트리), 32×32(장식)
                      규격의 픽셀 편집기를 구현했습니다. 단순 드로잉을 넘어 기본
                      트리 이미지와 사용자 드로잉 레이어를 비동기 파이프라인으로
                      합성하는 시스템을 구축했으며, 선형 보간 알고리즘을 적용해
                      빠른 마우스 이동 시에도 선이 끊기지 않는 매끄러운 드로잉
                      경험을 제공했습니다.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "비회원 공유 시스템 및 수학적 좌표 매핑",
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
                      별도의 회원가입 없이 UUID 식별자가 포함된 URL로 트리
                      주인과 참여자의 권한을 동적으로 분기하여 접근성을
                      높였습니다. 특히 트리의 피라미드 구조를 고려해 센터 정렬
                      및 행별 좌표 산출 공식을 직접 설계했습니다. 10개의 고정
                      슬롯 좌표를 수학적으로 계산하고, 트리 주인이 장식 순서를
                      변경할 때마다 데이터의 인덱스를 좌표 배열에 실시간
                      매핑하여 별도의 레이아웃 수정 없이도 트리가 즉각적으로
                      재구성되도록 구현했습니다.
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "AI 멀티 페르소나 평가 및 SNS 최적화 공유",
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
                      OpenAI GPT-4o API를 연동하여 사용자의
                      선택(순한맛/매운맛)에 따른 맞춤형 트리 분석 결과를
                      제공합니다. 특히 뷰포트 외부에 가상 렌더링 영역을
                      설계하여, 현재 화면과 관계없이 인스타그램 스토리
                      규격(9:16)에 맞춘 고해상도 합성 이미지를 추출 및
                      다운로드할 수 있는 환경을 구축했습니다.
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
                    4(GA4)를 연동하여 실사용자 지표를 추적 했습니다. 이벤트
                    기간(3일) 동안 193명의 활성 사용자를 기록했으며, 유입된 모든
                    사용자가 실제 상호작용으로 이어지는{" "}
                    <strong>활성 전환율 100%</strong>와{" "}
                    <strong>94.12%의 높은 참여율</strong>을 달성했습니다. 이를
                    통해 Direct 및 Social 채널 중심의 유입 구조를 파악하고,
                    직관적인 UI/UX 설계가 사용자 이탈 방지와 전환에 미치는
                    긍정적인 영향을 데이터로 확인하는 경험을 쌓았습니다.
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
                      마우스를 빠르게 움직일 경우, mousemove 이벤트 샘플링
                      한계로 인해 선이 끊긴 점 형태로 그려지는 현상이
                      발생했습니다.
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      이전 좌표와 현재 좌표 사이의 거리를 계산하는 선형
                      보간(Linear Interpolation) 알고리즘 적용하였습니다.
                      mousemove 이벤트 사이의 공백을 수학적으로 계산된 좌표로
                      채워 넣는 drawLine 로직을 구현하여 끊김 없는 드로잉 환경을
                      구축하였습니다.
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      하드웨어 및 브라우저의 성능 한계를 알고리즘적 사고로
                      극복하여 사용자 경험을 개선했습니다.
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "CORS 정책 대응을 통한 Canvas 오염 문제 해결",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      브라우저에서 S3로 이미지를 직접 업로드한 뒤 해당 이미지를
                      다시 불러와 Canvas에 렌더링하여 캡처하는 과정에서 CORS
                      정책으로 인해 Canvas가 Tainted 상태가 되어 저장이 차단되는
                      문제가 발생했습니다.
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        백엔드와 협업하여 S3 버킷 CORS Policy를 명확히 설정
                        (AllowedOrigins, AllowedMethods 등)
                      </li>
                      <li>
                        이미지 로드 시 crossOrigin="anonymous" 속성을 명시하여
                        보안 컨텍스트 내에서 리소스를 정상적으로 로드
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        Canvas 오염 문제 없이 이미지 캡처 및 저장 기능 정상 동작
                      </li>
                      <li>
                        프론트엔드에서도 클라우드 리소스를 다룰 때 보안 정책과
                        브라우저 동작을 함께 고려해야 함을 경험
                      </li>
                    </ul>
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
                      초기에는 빈 캔버스에 트리를 직접 그리는 방식이었으나 QA
                      과정에서 “시작이 어렵다”, “되돌릴 수 없다”는 피드백을
                      받았습니다.
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
                        <strong>선언적 상태 초기화:</strong> Canvas 내부 API를
                        수동으로 조작하는 대신, React의 <code>key</code> 속성을
                        변경하여 컴포넌트를 재마운트 시키는 방식으로 초기화 로직
                        단순화
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
                    <p className="text-[#000000]">결과 및 배운 점</p>
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
              title: "사용자 맞춤형 결과물 공유 캡처 환경 구축",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      실제 웹 화면과 공유용 결과 이미지(9:16 인스타그램 스토리
                      비율)의 레이아웃이 달라 일반적인 캡처 방식으로는 해결이
                      불가능했습니다.
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>Viewport 밖에 캡처 전용 Hidden 렌더링 영역 설계</li>
                      <li>트리 장식 좌표 및 AI 텍스트를 해당 영역에 재배치</li>
                      <li> html2canvas를 사용해 고해상도 PNG 추출</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        실제 화면과 무관하게 공유에 최적화된 결과 이미지 생성
                        가능
                      </li>
                      <li>
                        사용자에게 보여지는 화면과 데이터로 저장되는 화면을
                        분리하는 ‘가상 렌더링 캐싱’ 개념을 실무적으로 경험
                      </li>
                    </ul>
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
