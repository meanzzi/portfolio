import { useState } from "react";
import Accordion from "../../components/Accordion";

import back from "../../assets/back.svg";
import reactlogo from "../../assets/React.svg";
import jslogo from "../../assets/JavaScript.svg";
import gitgray from "../../assets/github_gray.svg";
import notion from "../../assets/notion.svg";
import figma from "../../assets/figma.svg";
import pdf from "../../assets/pdf.svg";
import gt_video from "../../assets/gt_video.mp4";
import gt_1 from "../../assets/gt_1.png";
import gt_2 from "../../assets/gt_2.png";
import gt_3 from "../../assets/gt_3.jpg";
import gt_ppt from "../../assets/gt_ppt.pdf";

import { useNavigate } from "react-router-dom";
import { BsFillLightningFill } from "react-icons/bs";
import { IoMdLeaf } from "react-icons/io";
import { FaLightbulb } from "react-icons/fa6";
import { PiPencilSimpleFill } from "react-icons/pi";
import { RiTreeFill } from "react-icons/ri";

const Gt = () => {
  const nav = useNavigate();
  const [showFigma, setShowFigma] = useState(false);
  const [showPDF, setShowPDF] = useState(false);

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
          <div className="text-[2.4rem] font-bold mr-[1rem]">신뢰장터</div>
          <img src={reactlogo} className="w-[1.5rem]" />
          <img src={jslogo} className="w-[1.5rem]" />
        </div>

        <div className="w-[2rem]"></div>
      </div>

      <div className="text-center text-[#A4A4A4] text-[1.3rem]">
        2024-03 ~ 2024-11
      </div>
      <div className="mx-[6rem] my-[2rem] text-[#303030] text-[1.3rem]">
        C2C 중고 물품의 가격을 예측하고 시각적으로 추천 범위를 제공하는 웹
        서비스입니다. <br />
        머신러닝 모델을 활용하여 입력된 상품의 상태와 카테고리를 기반으로
        합리적인 가격을 예측하고, 이를 직관적인 UI로 시각화하여 사용자 신뢰를
        높이고 거래를 활성화하는 데 목적을 두었습니다.
      </div>

      <div className="mx-[6rem] text-[1.3rem]">
        <div className="flex items-center gap-[2rem]">
          <p>참여 인원</p>
          <p className="text-[#3D3D3D]">4명 (FE 1, BE 2, ML 1)</p>
        </div>
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>관련 링크</p>
          <img
            src={gitgray}
            className="cursor-pointer w-[1.8rem]"
            onClick={() =>
              window.open("https://github.com/PG1tHub/Graduated_Task", "_blank")
            }
          />
        </div>
        <div className="flex items-start gap-[2rem]">
          <p>주요 기능</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>머신러닝 기반 상품 가격 예측 및 추천</li>
            <li>직관적인 상품 검색 및 필터링</li>
            <li>안정적인 상품 등록 및 관리</li>
            <li>JWT 기반 사용자 인증 및 권한 관리</li>
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
          <li>프론트엔드 개발 담당 (UI/UX 설계 및 구현 전반)</li>
          <li>데이터 수집·가공 참여, 머신러닝 모델 개발 방향 제시</li>
          <li>백엔드 및 머신러닝 API 연동, 데이터 흐름·통신 조율</li>
          <li>
            Git 기반 버전 관리 및 코드 리뷰 참여, Google Sheets로 API 명세 및
            일정 관리
          </li>
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
              title: "머신러닝 기반 가격 추천 시스템 연동",
              content: (
                <div>
                  <img src={gt_1} />
                  <p>
                    상품 상태와 카테고리를 입력받아, 머신러닝 모델의 API와
                    연동하여 실시간으로 예측 가격 범위를 제공합니다. React에서
                    useState와 비동기 API 호출을 활용하여 가격 범위를 슬라이더로
                    시각화하고, 입력 가격의 적절성을 즉각 피드백하여 사용자
                    신뢰도를 높였습니다.
                  </p>
                </div>
              ),
            },
            {
              title: "상품 등록 및 이미지 관리",
              content: (
                <div>
                  <img src={gt_3} />
                  <p>
                    FileReader API를 통해 업로드된 이미지를 즉시 미리보기하며,
                    localStorage를 사용해 새로 고침 시에도 임시 저장을
                    유지했습니다. JWT 토큰을 Authorization 헤더에 포함시켜
                    인증된 상태로 fetch API를 통해 상품 등록 요청을 보내고,
                    머신러닝 추천 가격과 비교해 시각적 피드백을 제공하여
                    사용자의 합리적 가격 설정을 지원했습니다.
                  </p>
                </div>
              ),
            },
            {
              title: "다양한 상품 정보 탐색",
              content: (
                <div>
                  <img src={gt_2} />
                  <p>
                    컴포넌트 마운트 시 axios와 useEffect를 활용해 상품 데이터를
                    비동기 호출하며, useState로 로딩 및 에러 상태를
                    관리했습니다. useParams로 URL에서 상품 ID를 추출해 상세
                    정보를 요청하고, 클라이언트 측 필터링과 가격 추천 범위 내
                    상품에 시각적 체크 아이콘 표시로 사용자 편의를
                    극대화했습니다. 또한, localStorage에 저장된 이미지를 불러와
                    상세 페이지에 렌더링하며 사용자 경험을 향상시켰습니다.,
                  </p>
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
              title: "JWT 토큰 유효성 관리 및 사용자 접근 제어",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      페이지 새로고침 시 로그인 상태가 유실되고, 만료된 토큰으로
                      불필요한 API 요청이 발생했습니다.
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        토큰 유효성 검사 함수 구현 → sessionStorage와 만료시간
                        체크
                      </li>
                      <li>
                        axios 인터셉터 설정 → 모든 요청에 JWT 자동 추가, 401
                        발생 시 자동 로그아웃
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>새로고침 시 로그인 유지, 만료 토큰 자동 로그아웃</li>
                      <li>프론트엔드에서 인증/인가 상태 관리 중요성 이해</li>
                    </ul>
                  </div>
                </div>
              ),
            },
            {
              title: "FormData 기반 안정적인 이미지 업로드 및 미리보기",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      상품 등록 시 이미지를 Base64로 변환해 JSON에 포함시키는
                      방식으로 전송했으나 대용량 이미지에서 전송 실패와 성능
                      저하 문제가 발생했습니다.
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        FormData를 활용해 multipart/form-data 방식으로 전송
                      </li>
                      <li>
                        URL.createObjectURL을 통한 즉시 미리보기, 서버 전송 시만
                        File 사용
                      </li>
                      <li>
                        AWS S3에 이미지 저장, DB에는 URL만 저장하는 구조로
                        백엔드와 협의
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과 및 배운 점</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        안정적이고 효율적인 이미지 업로드 구현으로 사용자 경험
                        개선
                      </li>
                      <li>FormData 및 미리보기 최적화에 대한 이해 강화</li>
                      <li>프론트·백엔드 협업 과정에서 문제 해결 능력 향상</li>
                    </ul>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <RiTreeFill />
          결과 화면
        </div>
        <video
          src={gt_video}
          controls
          className="w-full h-[450px] rounded-xl"
        />
      </div>

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
                "https://www.notion.so/2325a4dbd5e480b08bb7e6d5067b1c5b",
                "_blank",
                "noopener,noreferrer"
              )
            }
          />
          <img
            src={figma}
            alt="피그마"
            className="cursor-pointer w-[4rem]"
            onClick={() => setShowFigma((prev) => !prev)}
          />
          <img
            src={pdf}
            alt="pdf"
            className="cursor-pointer w-[2.6rem]"
            onClick={() => setShowPDF((prev) => !prev)}
          />
        </div>

        {showFigma && (
          <div className="w-full h-[40rem] rounded-xl overflow-hidden mt-[2rem]">
            <iframe
              src="https://embed.figma.com/design/YLuwUZKGne2PvO8HilCw54/GT?node-id=0-1&embed-host=share"
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {showPDF && (
          <div className="w-full h-[40rem] rounded-xl overflow-hidden mt-[2rem]">
            <iframe
              src={gt_ppt}
              width="100%"
              height="600px"
              title="프로젝트 발표 자료"
            />
          </div>
        )}
      </div>
    </div>
  );
};
export default Gt;
