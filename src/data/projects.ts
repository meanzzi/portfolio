import gt from "../assets/gt.png";
import beour from "../assets/beour.png";
import treeTn from "../assets/tree_tn.png";

export interface Project {
  id: number;
  img: string;
  alt: string;
  name: string;
  tag: string;
  date: string;
  description: string;
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
  },
  {
    id: 2,
    img: beour,
    alt: "Be:our",
    name: "Be:our",
    tag: "Team",
    date: "2025-05 ~ 2025-10",
    description: "비어 있는 공간이 우리(BE OUR)의 기회로",
  },
  {
    id: 3,
    img: treeTn,
    alt: "GatherTree",
    name: "GatherTree",
    tag: "Team",
    date: "2025-12 ~ 2025-12",
    description: "픽셀 아트로 함께 완성하는 참여형 크리스마스 트리 웹앱",
  },
];
