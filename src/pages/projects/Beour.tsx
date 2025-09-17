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
import beour from "../../assets/beour.png";
import beour_2 from "../../assets/beour_2.png";
import beour_3 from "../../assets/beour_3.png";
import beour_4 from "../../assets/beour_4.png";
import beour_5 from "../../assets/beour_5.png";
import beour_7 from "../../assets/beour_7.png";

import { BsFillLightningFill } from "react-icons/bs";
import { IoMdLeaf } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { PiPencilSimpleFill } from "react-icons/pi";

const Beour = () => {
  const nav = useNavigate();
  const [showIframe, setShowIframe] = useState(false);

  return (
    <div>
      <div className="px-[3rem] pt-[4rem] flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={back}
            onClick={() => nav(-1)}
            className="cursor-pointer w-[2.3rem]"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="text-[2.4rem] font-bold mr-[1rem]">BE:OUR</div>
          <img src={reactlogo} className="w-[1.5rem]" />
          <img src={tslogo} className="w-[1.5rem]" />
          <img src={tailwind} className="w-[1.5rem]" />
          <img src={vite} className="w-[1.5rem]" />
        </div>

        <div className="w-[2rem]"></div>
      </div>

      <div className="text-center text-[#A4A4A4] text-[1.3rem]">
        2025-05 ~ 진행 중
      </div>
      <div className="mx-[6rem] my-[2rem] text-[#303030] text-[1.3rem]">
        브레이크타임이나 휴무일에 잠시 비어있는 점포 공간을 활용하여 수익을
        창출할 수 있도록 돕는 B2C 웹앱입니다. 유휴 공간의 활용도를 높여 점포에는
        추가 수익을, 사용자에게는 다양한 활동 공간을 제공하는 것을 목표로
        합니다.
      </div>

      <div className="mx-[6rem] text-[1.3rem]">
        <div className="flex items-center gap-[2rem]">
          <p>참여 인원</p>
          <p className="text-[#3D3D3D]">6명 (UI/UX 1, FE 3, BE 2)</p>
        </div>
        <div className="flex items-start gap-[1rem] my-[1rem]">
          <p>관련 링크</p>
          <img
            src={urlgray}
            className="cursor-pointer w-[1.8rem] ml-[1rem]"
            onClick={() =>
              window.open("https://frontend.beour.store/", "_blank")
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
        <div className="flex items-start gap-[2rem]">
          <p>주요 기능</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>메인: 추천 공간, 최신 리뷰, 카테고리별 공간 필터링/슬라이더</li>
            <li>공간 상세: 공간 정보, 리뷰, 위치 조회, 공유/즐겨찾기</li>
            <li>공간 예약: 날짜·시간 선택, 목적/요청 사항 입력, 예약 신청</li>
            <li>
              나의 예약: 진행/완료/취소 관리, 리뷰 작성 , 예약 공간 지도 조회
            </li>
            <li>내 주변 공간: 현재 위치 기반 탐색 (Kakao Map API)</li>
          </ul>
        </div>
      </div>
      <hr className="mx-[6rem] border-t-1 border-gray-300 my-[3rem]" />

      <div className="mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <IoMdLeaf />
          담당 역할 및 기여
        </div>

        <ul className="list-disc pl-5 m-0 leading-[2.7rem] text-[1.3rem] text-[#303030] marker:text-[#679258]">
          <li>프론트엔드 개발 담당 - 게스트 화면 구현 80%</li>
          <li>Figma기반 와이어프레임 제작 및 UX 개선 피드백</li>
          <li>React Query로 API 연동, 전역 상태 관리 및 에러 핸들링</li>
          <li>TypeScript + Tailwind CSS로 타입 안정성과 UI 일관성 확보</li>
          <li>Git 협업 & 코드 리뷰 참여 (가독성·유지보수성 향상)</li>
          <li>Notion을 통한 일정 관리 및 팀 커뮤니케이션</li>
        </ul>
      </div>

      <div className="mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <FaLightbulb />
          주요 기능 상세 구현
        </div>
        <Accordion
          items={[
            {
              title: "게스트 메인 페이지",
              content: (
                <div className="flex items-center justify-center gap-[3rem]">
                  <img src={beour} className="w-[23rem]" />
                  <img src={beour_2} className="w-[20rem]" />
                  <ul className="list-disc pl-5 leading-[2.2rem]">
                    <li>
                      keen-slider로 메인 배너·공간/리뷰 슬라이더 구현 (자동 전환
                      효과)
                    </li>
                    <li>
                      React Query로 공간/리뷰 데이터 캐싱 및 로딩 성능 최적화
                    </li>
                    <li>
                      카테고리별 공간 필터링 및 반응형 UI 구축 (Tailwind CSS)
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: "공간 상세 페이지",
              content: (
                <div className="flex items-center justify-center gap-[5rem]">
                  <img src={beour_3} className="w-[20rem]" />
                  <ul className="list-disc pl-5 leading-[2.2rem]">
                    <li>동적 라우팅으로 개별 공간 상세 정보 렌더링</li>
                    <li>별점 평균 포함 리뷰 리스트 슬라이더 구현</li>
                    <li>공간 공유 및 즐겨찾기 기능 제공</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "게스트 공간 예약 페이지",
              content: (
                <div className="flex items-center justify-center gap-[5rem]">
                  <img src={beour_4} className="w-[20rem]" />
                  <ul className="list-disc pl-5 leading-[2.2rem]">
                    <li>직접 구현한 DayPicker·시간 버튼 UI로 예약 입력</li>
                    <li>state 관리 → 최종 예약 정보 POST 전송</li>
                    <li>인원·시간 단위에 따른 실시간 가격 계산</li>
                    <li>예약 확인 모달로 절차 명확성 향상</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "나의 예약 페이지",
              content: (
                <div className="flex items-center justify-center gap-[5rem]">
                  <img src={beour_5} className="w-[20rem]" />
                  <ul className="list-disc pl-5 leading-[2.2rem]">
                    <li>진행/완료/취소 상태별 필터링 및 조건부 렌더링</li>
                    <li>리뷰 작성 전·후 UI를 색상 차이로 구분</li>
                    <li>Kakao Map API로 예약 공간 위치 시각화</li>
                  </ul>
                </div>
              ),
            },
            {
              title: "내 주변 공간 페이지",
              content: (
                <div className="flex items-center justify-center gap-[5rem]">
                  <img src={beour_7} className="h-[30rem]" />
                  <ul className="list-disc pl-5 leading-[2.2rem]">
                    <li>Geolocation API 기반 현재 위치 탐색</li>
                    <li>Kakao Map API로 주변 공간 마커 표시</li>
                    <li>주소 기반 검색어 입력으로 위치별 공간 탐색</li>
                  </ul>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <BsFillLightningFill />
          트러블 슈팅
        </div>
        <Accordion
          items={[
            {
              title: "GitHub Actions CI/CD 배포 문제 해결",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    초기 배포 과정에서 TypeScript 타입 에러, 미사용 코드, 의존성
                    불일치로 배포가 자주 실패했습니다. 이로 인해 개발 생산성이
                    저하되고 안정적인 배포 환경이 필요했습니다.
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        TypeScript 엄격 모드 적용 및 ESLint/Prettier 규칙 강화로
                        코드 품질 향상
                      </li>
                      <li>
                        GitHub Actions에서 빌드 전 타입·Lint 검증으로 오류 차단
                      </li>
                      <li>
                        react·react-dom 버전 고정으로 일관된 node_modules 환경
                        유지
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>배포 실패율 감소, 안정적인 CI/CD 환경 확보</li>
                      <li>
                        자동화된 코드 품질 관리와 의존성 고정의 중요성 이해
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },

            {
              title: "Kakao Map API 초기 환경 설정 및 기능 안정화",
              content: (
                <div className="text-[#303030]">
                  <div>
                    Kakao Map API 연동 시 지도 화면이 로드되지 않고 흰색 빈
                    공간으로 표시되었습니다. 특히 배포 환경 전환 시 서버 도메인
                    설정 누락으로 JavaScript API 키 에러 발생, Geolocation API
                    위치 정보 획득 실패 및 HTTPS 미지원 환경으로 인해 사용자
                    위치 서비스 제공에 어려움이 있었습니다.
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        API 키와 도메인 검증: Kakao 개발자 콘솔에서 모든
                        개발/배포 도메인을 등록하여 도메인 불일치 문제 해결
                      </li>
                      <li>
                        지도 컨테이너 크기 명시: width·height 지정으로 지도 로드
                        공간 확보
                      </li>
                      <li>
                        브라우저 호환성 및 예외 처리: Geolocation 지원 여부 확인
                        후 경고 처리
                      </li>
                      <li>HTTPS 환경 전환: 위치 정보 접근 제한 문제 해결</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000] font-semibold">
                      결과 및 배운 점
                    </p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        Kakao Map API 및 Geolocation API 초기화와 환경 설정 이해
                      </li>
                      <li>
                        HTTPS, 도메인 관리, 브라우저 보안 이슈 선제 처리 경험
                      </li>
                      <li>
                        안정적인 지도 초기 로딩과 핵심 기능 동작 기반 확보
                      </li>
                    </ul>
                  </div>
                </div>
              ),
            },

            {
              title: "Kakao Map 마커 위치 오차 및 이벤트 미작동 문제 해결",
              content: (
                <div className="text-[#303030]">
                  <div>
                    CustomOverlayMap을 이용해 지도 위 마커를 표시했으나, 마커
                    위치가 실제 좌표와 약간 어긋나고 클릭 이벤트가 동작하지 않아
                    사용자 상호작용이 불가능했습니다.
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000] font-semibold">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        마커 위치 조정: yAnchor 속성을 수정하여 이미지 하단이
                        실제 좌표와 일치하도록 기준점 설정
                      </li>
                      <li>
                        이벤트 리스너 직접 부착: CustomOverlayMap 내부 div에
                        onClick 이벤트 구현
                      </li>
                      <li>
                        데이터 연동 및 시각적 피드백: 클릭 시 공간 ID 전달 확인,
                        선택 마커 색상/크기 변동으로 사용자 인지 개선
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000] font-semibold">
                      결과 및 배운 점
                    </p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        CustomOverlayMap 기준점(Anchor) 설정과 React 이벤트 관리
                        중요성 학습
                      </li>
                      <li>
                        Kakao Map API low-level 기능을 React 환경에 맞게
                        커스터마이징 경험
                      </li>
                      <li>사용자 상호작용과 UI 구현 능력 향상</li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      {/* <div className="mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <RiTreeFill />
          결과 화면
        </div>
        <video
          src={gt_video}
          controls
          className="w-full h-[450px] rounded-xl border"
        />
      </div> */}

      <div className="mx-[6rem] mt-[2rem] pb-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <PiPencilSimpleFill />
          기획 자료
        </div>
        <div className="flex items-center gap-3">
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
      </div>
    </div>
  );
};
export default Beour;
