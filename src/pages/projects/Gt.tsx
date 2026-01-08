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
            신뢰장터
          </div>
          <img src={reactlogo} className="w-[1.2rem] md:w-[1.5rem]" />
          <img src={jslogo} className="w-[1.2rem] md:w-[1.5rem]" />
        </div>
        <div className="w-[1.8rem] md:w-[2rem]"></div>
      </div>

      <div className="text-center text-[#A4A4A4] text-[1.3rem]">
        2024-03 ~ 2024-11
      </div>
      <div className="px-5 md:mx-[6rem] my-[2rem] text-[#303030] text-[1rem] md:text-[1.3rem] leading-relaxed">
        C2C 중고 물품의 가격을 예측하고 시각적으로 추천 범위를 제공하는 웹
        서비스입니다. <br />
        머신러닝 모델을 활용하여 입력된 상품의 상태와 카테고리를 기반으로
        합리적인 가격을 예측하고, 이를 직관적인 UI로 시각화하여 사용자 신뢰를
        높이고 거래를 활성화하는 데 목적을 두었습니다.
      </div>

      <div className="px-5 md:mx-[6rem] text-[1rem] md:text-[1.3rem]">
        <div className="flex items-center gap-[1rem] md:gap-[2rem]">
          <p className="min-w-[4rem]">참여 인원</p>
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
        <div className="flex items-start gap-[2rem] my-[1rem]">
          <p>핵심 기술</p>
          Axios Interceptor, JWT, FormData, ML API Integration
        </div>
        <div className="flex items-start gap-[2rem]">
          <p>핵심 성과</p>
          <ul className="text-[#3D3D3D] list-disc pl-5 m-0 leading-[2.2rem]">
            <li>
              머신러닝 예측 가격 데이터를 <strong>슬라이더 UI로 시각화</strong>
              하여 사용자 신뢰도 및 거래 편의성 향상
            </li>
            <li>
              {" "}
              <strong>Axios 인터셉터</strong>를 통한 중앙 집중형 인증 관리로 JWT
              보안 및 세션 유지 로직 최적화
            </li>
            <li>
              {" "}
              <strong>FormData 전송 방식</strong> 도입으로 대용량 이미지 업로드
              실패율 0% 달성 및 전송 속도 개선
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
          <li>프론트엔드 전 과정 주도</li>
          <li>
            프론트-백-ML 간의 데이터 흐름 설계 및 API 인터페이스 조율 주도
          </li>
          <li>Git 기반 버전 관리 및 Notion/Google Sheets를 활용한 일정 준수</li>
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
              title: "실시간 가격 피드백",
              content: (
                <div>
                  <img
                    src={gt_1}
                    className="w-full h-auto rounded-lg mb-4 shadow-sm"
                  />
                  <p>
                    비동기 API 호출과 useState를 연동하여 입력값에 따른 가격
                    적정성을 실시간 슬라이더로 피드백
                  </p>
                </div>
              ),
            },
            {
              title: "데이터 영속성 관리",
              content: (
                <div>
                  <img
                    src={gt_3}
                    className="w-full h-auto rounded-lg mb-4 shadow-sm"
                  />
                  <p>
                    FileReader로 이미지 미리보기를 구현하고, localStorage를
                    활용해 새로고침 시에도 입력 폼 데이터 유지
                  </p>
                </div>
              ),
            },
            {
              title: "지능형 상품 탐색",
              content: (
                <div>
                  <img
                    src={gt_2}
                    className="w-full h-auto rounded-lg mb-4 shadow-sm"
                  />
                  <p>
                    useParams 기반 동적 라우팅과 클라이언트 측 필터링을 통해
                    추천 범위 내 상품에 시각적 강조
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
              title: "Axios 인터셉터 기반의 JWT 중앙 관리 및 인증 만료 자동화",
              content: (
                <div className="text-[#303030]">
                  <div>
                    <p>
                      페이지 새로고침 시 로그인 상태 유실 및 만료된 토큰으로
                      인한 불필요한 API 요청 발생
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        <code>sessionStorage</code>와 만료 시간 체크 로직을
                        결합한 유효성 검사 함수 구현
                      </li>
                      <li>
                        Axios Interceptor를 설정하여 모든 요청에 JWT를 자동으로
                        부착하고, 401 에러 발생 시 자동 로그아웃 처리
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    사용자 인증 상태 유지의 안정성 확보 및 프론트엔드 측 보안
                    로직 강화
                  </div>
                </div>
              ),
            },
            {
              title: "FormData 및 Blob URL 활용을 통한 이미지 전송 최적화",
              content: (
                <div className="text-[#303030]">
                  <div className="">
                    <p>
                      이미지를 Base64로 변환하여 JSON에 포함 시, 대용량 파일에서
                      전송 실패 및 브라우저 성능 저하 발생
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결 과정</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        FormData를 활용해 multipart/form-data 전송 방식으로
                        전환하여 페이로드 최적화
                      </li>
                      <li>
                        <code>URL.createObjectURL</code>을 통한 즉시 미리보기
                        구현으로 메모리 효율 개선
                      </li>
                      <li>
                        S3 저장 구조로 백엔드와 협의하여 DB 부하 감소 유도
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    안정적인 업로드 환경 구축 및 서버-클라이언트 간 효율적인
                    인터페이스 설계 역량 습득
                  </div>
                </div>
              ),
            },
          ]}
        />
      </div>

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.5rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <RiTreeFill />
          결과 화면
        </div>
        <video
          src={gt_video}
          controls
          className="w-full h-auto max-h-[450px] rounded-xl shadow-md"
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
          <div className="w-full h-[25rem] md:h-[40rem] rounded-xl overflow-hidden mt-[2rem]">
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
