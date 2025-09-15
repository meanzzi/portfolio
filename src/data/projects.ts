import gt from "../assets/gt.png";
import beour from "../assets/beour.png";

export interface Project {
  id: number;
  img: string;
  alt: string;
  name: string;
  tag: string;
  date: string;
  description: string;
  detail: {
    role: string;
    contribution: string;
    troubleshooting: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    img: gt,
    alt: "신뢰장터",
    name: "신뢰장터",
    tag: "Team",
    date: "2024-03 ~ 2024-11",
    description: "C2C 중고 물품 가격 예측 웹서비스",
    detail: {
      role: "프론트엔드 개발 (UI, 상태 관리, API 연동)",
      contribution: "사용자 인증, 상품 리스트/상세 페이지 구현",
      troubleshooting: "가격 예측 API 응답 속도 문제를 로딩 상태 관리로 해결",
    },
  },
  {
    id: 2,
    img: beour,
    alt: "Be:our",
    name: "Be:our",
    tag: "Team",
    date: "2025-05 ~ 진행중",
    description: "비어 있는 공간이 우리(BE OUR)의 기회로",
    detail: {
      role: "UI/UX 설계 및 프론트엔드 메인 담당",
      contribution: "예약 시스템 및 지도 연동 기능 개발",
      troubleshooting: "지도 API 마커 렌더링 성능 문제 최적화",
    },
  },
];
