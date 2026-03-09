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
        머신러닝 기반 가격 예측 결과를 슬라이더 UI로 시각화하여 사용자
        의사결정을 돕는 C2C 중고거래 웹 서비스
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
      </div>
      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />

      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="leading-[2rem] md:leading-[2.7rem] text-[1rem] md:text-[1.3rem] text-[#303030]">
          중고 거래에서는 판매자가 책정한 가격이 적정한지 판단하기 어렵다는
          문제에 주목했습니다. 단순히 머신러닝 예측값을 보여주는 것보다,
          사용자가 가격의 합리성을 직관적으로 이해하고 스스로 판단할 수 있는
          구조가 중요하다고 생각했습니다. <br />
          따라서 예측 결과를 단일 수치가 아닌 범위로 시각화하고, 사용자 입력에
          따라 실시간 피드백을 제공하는 인터페이스 설계에 집중했습니다.
        </div>
      </div>

      <hr className="mx-5 md:mx-[6rem] border-t-1 border-gray-300 my-[2rem] md:my-[3rem]" />
      <div className="px-5 md:mx-[6rem] my-[2rem]">
        <div className="text-[#679258] font-bold text-[1.4rem] md:text-[1.8rem] mb-[1rem] flex items-center gap-2">
          <FaLightbulb />
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
        <div className="my-[1.5rem]">
          <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              <div className="flex flex-col">
                <span className="font-medium">
                  예측 가격 반응형 슬라이더 UI
                </span>
                <span className=" text-[#303030] ml-1">
                  ML 모델의 예측값 ± MAE 범위를 시각적으로 표현하고, 사용자 입력
                  가격이 적정 범위인지 실시간으로 안내
                </span>
              </div>
            </li>
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              상품 등록 및 이미지 업로드 시스템
            </li>
            <li className="text-[1rem] md:text-[1.3rem] text-[#303030]">
              JWT 기반 로그인 및 세션 유지
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
              title: "예측 가격 표현 방식 개선",
              content: (
                <div className="text-[#303030]">
                  <div>
                    <p className="text-[#000000]">문제</p>
                    <p>
                      텍스트 기반 가격 범위 표기 방식은 사용자에게 직관적인 판단
                      기준을 제공하지 못함
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        가격의 ‘위치’를 시각적으로 전달하기 위해 Range Slider
                        기반 시각화로 변경
                      </li>
                      <li>범위 내/외 상태를 색상으로 구분</li>
                      <li>동적 스케일 확장 로직 추가</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    ML 결과를 직관적으로 표현하여 사용자 이해도 향상
                  </div>
                </div>
              ),
            },
            {
              title: "JWT 인증 구조 개선",
              content: (
                <div className="text-[#303030]">
                  <div>
                    <p className="text-[#000000]">문제</p>
                    <p>
                      API 요청마다 토큰을 직접 관리, 토큰 만료 시 예외 처리 구조
                      부재
                    </p>
                  </div>

                  <div className="my-[1.5rem]">
                    <p className="text-[#000000]">해결</p>
                    <ul className="list-disc pl-5 marker:text-[#679258] leading-[2.3rem]">
                      <li>
                        토큰을 중앙에서 관리하여 API 요청 간 인증 상태 일관성
                        확보
                      </li>
                      <li>
                        401 에러 발생 시 자동 로그아웃 처리 구조 설계, 만료
                        토큰으로 인한 불필요한 요청 방지
                      </li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-[#000000]">결과</p>
                    인증 흐름 안정화 및 구조 확장 가능성 확보
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
          <li>
            ML 예측 결과를 단순 데이터가 아닌 사용자 경험 중심 UI로 해석하는
            방법을 학습
          </li>
          <li>데이터 흐름을 구조적으로 설계한 경험 </li>
          <li>
            JWT 기반 인증 구조를 직접 구현하며 토큰 관리 및 예외 처리 흐름 이해
          </li>
          <li>
            API 통신에서 인증 상태에 따른 에러 처리 및 구조 확장의 중요성 인지
          </li>
          <li>
            배포 환경에서 실제 서비스 동작까지 연결하는 전체 파이프라인 경험
          </li>
        </ul>
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
                "noopener,noreferrer",
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
