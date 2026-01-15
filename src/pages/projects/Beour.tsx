import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import tslogo from "../../assets/TypeScript.svg";
import tailwind from "../../assets/Tailwind.svg";
import vite from "../../assets/Vite.js.svg";
import urlgray from "../../assets/url_gray.svg";
import gitgray from "../../assets/github_gray.svg";
import notion from "../../assets/notion.svg";
import figma from "../../assets/figma.svg";
import beour_4 from "../../assets/beour_4.png";
import beour_6 from "../../assets/beour_6.png";
import beour_7 from "../../assets/beour_7.png";
import beour_8 from "../../assets/beour_8.png";

import { BsFillLightningFill } from "react-icons/bs";
import { IoMdLeaf } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { PiPencilSimpleFill } from "react-icons/pi";

const Beour = () => {
  const nav = useNavigate();
  const [showIframe, setShowIframe] = useState(false);

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
            BE:OUR
          </div>
          <img src={reactlogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={tslogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={tailwind} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={vite} className="w-[1.2rem] md:w-[1.5rem]" />
        </div>

        <div className="w-[1.8rem] md:w-[2rem]"></div>
      </div>

      <div className="text-center text-[#A4A4A4] text-[1.3rem]">
        2025-05 ~ 2025-10
      </div>
      <div className="px-5 md:mx-[6rem] my-[2rem] text-[#303030] text-[1rem] md:text-[1.3rem] leading-relaxed">
        유휴 점포 공간을 활용해 호스트에게는 수익을, 게스트에게는 맞춤형 활동
        공간을 제공하는 B2C 유휴 공간 중개 플랫폼입니다.
      </div>

      <div className="px-5 md:mx-[6rem] text-[1rem] md:text-[1.3rem]">
        <div className="flex items-center gap-[1rem] md:gap-[2rem]">
          <p className="min-w-[4rem]">참여 인원</p>
          <p className="text-[#3D3D3D]">6명 (UI/UX 1, FE 3, BE 2)</p>
        </div>
        <div className="flex items-start gap-[1rem] my-[1rem]">
          <p>관련 링크</p>
          <img
            src={urlgray}
            className="cursor-pointer w-[1.8rem]"
            onClick={() =>
              // window.open("https://frontend.beour.store/", "_blank")
              window.alert("현재 배포가 종료되었습니다.")
            }
          />
          <img
            src={gitgray}
            className="cursor-pointer w-[1.8rem]"
            onClick={() =>
              window.open("https://github.com/beour-team", "_blank")
            }
          />
        </div>
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>핵심 기술</p>
          TypeScript, React Query, GitHub Actions, Kakao Map API, Tailwind CSS
        </div>
        <div className="flex items-start gap-[2rem]">
          <p>핵심 성과</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>
              <strong>React Query</strong>를 도입하여 서버 데이터 캐싱 및 상태
              관리를 효율화하고, 불필요한 API 재요청을 줄여{" "}
              <strong>로딩 성능 최적화</strong>
            </li>
            <li>
              GitHub Actions 기반의 CI/CD 환경을 활용하여 빌드 및 타입·린트 검증
              결과를 기준으로 배포 실패 원인·분석·개선, 배포 과정의 안정성
              체감적으로 향상
            </li>
            <li>
              Kakao Map API 커스터마이징을 통해 마커 오차 보정 및 동적 UI
              피드백을 구현하여 게스트의 탐색 경험 개선
            </li>
          </ul>
        </div>
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          담당 역할 및 기여
        </div>

        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>게스트 관련 화면의 80% 이상을 구현 및 공통 컴포넌트 설계</li>
          <li>
            Figma 와이어프레임을 기반으로 실무적인 웹 UI/UX 개선 피드백 및
            Tailwind CSS 적용
          </li>
          <li>
            TypeScript 엄격 모드 적용 및 코드 리뷰 주도로 유지보수성이 높은
            코드베이스 유지
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
              title: "지능형 공간 탐색",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={beour_7}
                      className="w-[46%] md:max-w-[16rem] lg:max-w-[20rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      Geolocation API와 Kakao Map을 연동하여 '내 주변 공간' 탐색
                      및 검색어 기반 위치 필터링 구현
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "실시간 예약 시스템",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={beour_6}
                      className="w-[46%] md:max-w-[16rem] lg:max-w-[20rem] h-auto rounded-lg shadow-md"
                    />
                    <img
                      src={beour_8}
                      className="w-[48%] md:max-w-[18rem] lg:max-w-[22rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      커스텀 DayPicker와 시간 선택 로직을 연동하여 인원·시간에
                      따른 실시간 가격 계산 및 예약 정보 POST 전송
                    </p>
                  </div>
                </div>
              ),
            },
            {
              title: "데이터 기반 대시보드",
              content: (
                <div className="flex flex-col gap-6">
                  <div className="flex gap-4 justify-center items-center w-full">
                    <img
                      src={beour_4}
                      className="w-[46%] md:max-w-[16rem] lg:max-w-[20rem] h-auto rounded-lg shadow-md"
                    />
                  </div>

                  <div className="w-full">
                    <p className="text-[1rem] md:text-[1.15rem] leading-[1.8] text-[#3D3D3D] bg-gray-50 p-4 md:p-6 rounded-xl">
                      React Query의 캐싱 데이터를 활용하여 진행/완료/취소 등
                      상태별 예약 현황을 조건부 렌더링으로 구현
                    </p>
                  </div>
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
              title:
                "GitHub Actions 기반 CI/CD 환경을 활용한 배포 실패 원인 및 분석 개선",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    TypeScript 타입 에러 및 의존성 불일치로 인해 배포 실패가
                    빈번히 발생하여 개발 생산성 저하
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        GitHub Actions CI 실행 로그를 기반으로 빌드·타입·린트
                        오류 원인 분석, 관련 코드 및 타입 정의 수정
                      </li>
                      <li>
                        react, react-dom 등 핵심 라이브러리 버전을 고정하여 환경
                        불일치 문제 해결
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        배포 실패 주요 원인을 제거하여 배포 성공 여부 예측 가능
                      </li>
                      <li>
                        CI 로그 활용한 문제 분석과 수정 과정을 통해 실무적 배포
                        흐름 이해
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },

            {
              title:
                "Geolocation API 기반 사용자 위치 추적 및 Kakao Map 로딩 지연 해결",
              content: (
                <div className="text-[#303030]">
                  <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                    <li>
                      로컬 환경과 달리 배포 서버에서 지도 화면이 로드되지 않고
                      흰색 빈 공간으로 표시되는 현상이 발생
                    </li>
                    <li>
                      보안 정책으로 인해 사용자의 현재 위치를 가져오는
                      Geolocation API가 호출되지 않아 핵심 기능인 '내 주변 공간
                      탐색' 제공 문제 발생
                    </li>
                  </ul>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        Geolocation API가 보안상 HTTPS 환경에서만 동작함을
                        파악하여, 배포 환경을 HTTPS로 전환하고 브라우저 권한
                        획득 프로세스 최적화
                      </li>
                      <li>
                        Kakao 개발자 콘솔에서 개발/배포 도메인을 분리 등록하여
                        도메인 불일치로 인한 JavaScript SDK 로드 에러 해결
                      </li>
                      <li>
                        지도 컨테이너의 동적 크기 할당 시점 문제를 해결하기 위해
                        렌더링 후 크기를 명시적으로 지정하여 초기 로딩 가시성
                        확보
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000] font-semibold">결과</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        로컬 환경과 실제 배포 환경의 차이를 이해하고 이를
                        선제적으로 처리하는 능력 습득
                      </li>
                      <li>
                        브라우저가 사용자 위치 정보와 같은 민감한 리소스를
                        보호하는 메커니즘을 심도 있게 학습
                      </li>
                      <li>
                        어떤 네트워크 환경에서도 안정적으로 지도 초기 화면을
                        제공할 수 있는 기반 확보
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title:
                "Kakao Map CustomOverlayMap의 좌표 오차 및 인터랙션 이슈 해결",
              content: (
                <div className="text-[#303030]">
                  <div>
                    커스텀 마커 이미지의 하단이 실제 좌표와 어긋나고, React의{" "}
                    <code>onClick</code> 이벤트가 정상적으로 동작하지 않는 문제
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        <code>yAnchor</code> 속성을 정밀하게 수정하여 마커의
                        기준점을 이미지 하단 중앙으로 보정
                      </li>
                      <li>
                        Overlay 내부 엘리먼트에 직접 이벤트 리스너를 부착하여
                        클릭 시 공간 ID 전달 및 시각적 피드백(색상/크기 변경)
                        구현
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000] font-semibold">결과</p>
                    정확한 위치 정보 제공 및 상호작용이 가능한 지도 인터페이스
                    완성
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="px-5 md:mx-[6rem] mt-[2rem] pb-[4rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <PiPencilSimpleFill />
          기획 자료
        </div>
        <div className="flex items-center gap-4 md:gap-6">
          <img
            src={notion}
            alt="노션"
            className="cursor-pointer w-[3rem]"
            onClick={() =>
              window.open(
                "https://www.notion.so/BE-OUR-1e77d6e83faf819e8d5bde72a3fcbbe4",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <img
            src={figma}
            alt="피그마"
            className="cursor-pointer w-[4rem]"
            onClick={() => setShowIframe((prev) => !prev)}
          />
        </div>

        {showIframe && (
          <div className="w-full h-[40rem] rounded-xl overflow-hidden mt-[2rem]">
            <iframe
              src="https://embed.figma.com/design/e0zDkXPpcfPwQ1RPFtyeNt/Be-our?node-id=0-1&embed-host=share"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}
        {/* 결과 화면 캡처본 추가하기 (서버 닫혀서 추가해야함) */}
      </div>
    </div>
  );
};
export default Beour;
