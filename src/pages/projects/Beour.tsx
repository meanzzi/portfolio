import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import tslogo from "../../assets/TypeScript.svg";
import tailwind from "../../assets/Tailwind.svg";
import vite from "../../assets/Vite.js.svg";
import gitgray from "../../assets/github_gray.svg";
import notion from "../../assets/notion.svg";
import figma from "../../assets/figma.svg";

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
        유휴 점포 공간을 활용해 호스트에게 수익 창출 기회를 제공하고,
        게스트에게는 맞춤형 활동 공간을 연결하는 B2C 공간 중개 플랫폼
      </div>

      <div className="px-5 md:mx-[6rem] text-[1rem] md:text-[1.3rem]">
        <div className="flex items-center gap-[1rem] md:gap-[2rem]">
          <p className="min-w-[4rem]">참여 인원</p>
          <p className="text-[#3D3D3D]">6명 (UI/UX 1, FE 3, BE 2)</p>
        </div>
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>관련 링크</p>
          <img
            src={gitgray}
            className="cursor-pointer w-[1.8rem]"
            onClick={() =>
              window.open("https://github.com/beour-team", "_blank")
            }
          />
        </div>
      </div>

      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />
      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030]">
          본 프로젝트는 실제 서비스 운영을 가정하여 설계한 공간 예약
          플랫폼입니다. <br />
          단순 기능 구현보다{" "}
          <strong>서버 데이터 기반 구조 설계와 사용자 탐색 경험 개선</strong>에
          집중했으며, 협업 환경에서 유지보수가 가능한 코드 구조를 고려하여
          개발했습니다.
        </div>
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          담당 역할
        </div>

        <p className="text-[1rem] md:text-[1.3rem] text-[#303030] leading-[2rem] md:leading-[2.7rem]">
          프론트엔드 개발 (게스트 페이지 중심 개발)
        </p>
        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>페이지 UI 설계 및 퍼블리싱</li>
          <li>REST API 연동 및 서버 상태 관리 구조 설계</li>
          <li>예약 기능 구현 및 상태 동기화</li>
          <li>검색 페이지 필터 / 페이지네이션 구조 구현</li>
          <li>공간 상세 페이지 개발</li>
          <li>Kakao Map API 기반 지도 기능 커스터마이징</li>
        </ul>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <FaLightbulb />
          주요 기능
        </div>
        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>공간 검색 기반 탐색 시스템</li>
          <li>시간 선택 기반 예약 시스템</li>
          <li>지도 기반 공간 시각화</li>
        </ul>
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <BsFillLightningFill />
          문제 및 해결 과정
        </div>
        <Accordion
          items={[
            {
              title: "서버 상태 관리 구조 개선",
              content: (
                <div>
                  <p className="text-[#000000]">문제</p>
                  <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                    <li>
                      서버 데이터 관리 시 useState 기반으로 직접 상태를 관리할
                      경우 캐싱, 동기화, 재요청 로직을 직접 구현해야 하는 구조적
                      한계 존재
                    </li>
                    <li>
                      Redux 도입도 고려했으나 서버 상태 관리 특화 기능이
                      부족하다고 판단
                    </li>
                  </ul>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    <ul className="list-disc marker:text-[#679258] leading-[2.3rem]">
                      React Query 도입
                      <ul className="list-disc pl-10  text-[#303030]">
                        <li>useQuery / useMutation 활용</li>
                        <li>
                          queryKey에 page값을 포함하여 페이지별 예약 데이터
                          캐싱하도록 구현
                        </li>
                        <li>staleTime 설정을 통해 불필요한 API 요청 줄임</li>
                        <li>
                          retry 옵션을 설정하여 API 요청 실패 시 재시도 횟수
                          제어
                        </li>
                      </ul>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    API 호출 구조 단순화 및 불필요한 상태 중복 관리 제거
                  </div>
                </div>
              ),
            },

            {
              title: "페이지네이션 설계",
              content: (
                <div className="text-[#303030]">
                  <p className="text-[#000000] font-semibold">문제</p>
                  검색 결과를 무한 스크롤 형태로 노출했을 경우, 데이터가
                  많아질수록 탐색 위치 파악이 어려워 사용자 불편 발생
                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>버튼 기반 페이지네이션으로 구조 변경</li>
                      <li>서버 page 파라미터 기반 데이터 분할 로딩 구현</li>
                      <li>
                        URL과 page 상태를 동기화하여 새로고침 시 상태 유지
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-[#000000] font-semibold">결과</p>
                    사용자가 원하는 페이지로 빠르게 이동 가능, 데이터 규모가
                    커져도 구조 유지 가능
                  </div>
                </div>
              ),
            },
            {
              title: "지도 UX 개선",
              content: (
                <div className="text-[#303030]">
                  <div>
                    <p className="text-[#000000] font-semibold">문제</p>
                    지도 API 기본 기능만으로는 서비스 흐름에 맞는 UX 구성 어려움
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        Kakao Map API 커스터마이징 : 마커 클릭 → 공간 상세
                        페이지 연결
                      </li>
                      <li>검색 결과 변경 시 지도 중심 자동 이동</li>
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

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          배운 점
        </div>

        <ul className="list-disc pl-5 m-0 leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>React Query를 활용한 서버 상태 관리 구조 설계 경험</li>
          <li>
            외부 API를 서비스 요구사항에 맞게 확장 및 커스터마이징하는 과정 학습
          </li>
          <li>
            서버 데이터와 UI 상태를 일관되게 유지하는 구조 설계의 중요성 이해
          </li>
        </ul>
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
                "noopener,noreferrer",
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
