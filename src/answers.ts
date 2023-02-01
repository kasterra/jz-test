type answerType = {
  name: string;
  answersList: (0 | 1)[];
  whatWeDo: string[];
  whenWeMeet: string[];
  whereWeMeet: string[];
  whatWeWant: string[];
  tel: string;
  imageURL?: string;
  lastWord: string;
  oneLine: string;
};

export const answers: answerType[] = [
  {
    name: "문서출판국",
    answersList: [0, 0, 0, 1, 1, 1, 0],
    whatWeDo: [
      "주보 디자인 및 인쇄",
      "수련회 책자작업",
      "각종 행사 포스터 디자인",
      "매주 예배광고 PPT",
    ],
    whenWeMeet: ["매주 토요일 오후 2시"],
    whereWeMeet: ["교육관 401호"],
    whatWeWant: [
      "디자인 : Ai, Photoshop 등...",
      "문서작업 : 한글, 엑셀 능력 등 우대",
    ],
    tel: "010-8954-4854",
    lastWord: "하나님이 주시는 섬김의 마음만 있다면 누구든 함께할 수 있어요",
    oneLine: "야베스의 디자인 연구소",
  },
  {
    name: "하인워십",
    answersList: [0, 1, 0, 0, 1, 0, 1],
    whatWeDo: ["야베스의 모든 찬양"],
    whenWeMeet: [
      "매주 금요일 오후 6시",
      "매주 토요일 오전 11시",
      "매주 주일 오후 4시",
    ],
    whereWeMeet: ["7층 제자홀", "B1 사랑홀", "B1 밴드연습실"],
    whatWeWant: [
      "노래에 대한 은사",
      "악기에 대한 은사",
      "음향에 대한 은사",
      "율동에 대한 은사",
      "무엇보다 배우고자 하는 은사",
      "성실함",
    ],
    tel: "010-3248-7123",
    lastWord:
      "청년의 때에 하나님의 부르심의 은혜를 기억하며 후회없이 끝장나게 사역할 야베스가 있다면 하인워십으로!!!",
    imageURL: "https://i.postimg.cc/NFYTPBV8/hain.png",
    oneLine: "야베스의 모든 찬양",
  },
  {
    name: "새가족국",
    answersList: [1, 0, 0, 0, 0, 1, 1],
    whatWeDo: [
      "(새) 가족을 반길 수 있어요☺️",
      "(가) 까이서 복음을 전해요📢",
      "(조)금 에너지가 필요해요🔋",
      "(국) 원끼리 사랑이 넘쳐요💓",
    ],
    whenWeMeet: ["매주 토요일 오후 2시"],
    whereWeMeet: ["교육관 117호"],
    whatWeWant: ["적당한 텐션", "나름의 재치", "웃는 얼굴"],
    tel: "010-2542-3717",
    lastWord: "저희와 함께 새가족을 섬길분을 진심으로 기다립니다🤗",
    oneLine: "야베스의 디자인 연구소",
  },
  {
    name: "전도국",
    answersList: [1, 1, 0, 1, 1, 0, 1],
    whatWeDo: ["거리전도", "노방찬양", "아파트 전단지 전도", "취약 계층 도움"],
    whenWeMeet: ["매주 목요일 오후 6시 30분"],
    whereWeMeet: ["교육관 108호 (장소는 때에따라 변경될 수 있습니다)"],
    whatWeWant: ["기타 반주"],
    tel: "010-2661-1913",
    lastWord:
      "지금 이 순간, 주님의 일하심과 값 없는 사랑을 경험하셨다면 누구든지 함께할 수 있어요!",
    imageURL: "https://i.postimg.cc/ydpnMJmh/evan.jpg",
    oneLine: "야베스의 디자인 연구소",
  },
  {
    name: "영상국",
    answersList: [1, 0, 1, 0, 1, 1, 0],
    whatWeDo: [
      "예배 방송 진행 (하트기도회, 리더모임, 야베스 예배 등)",
      "자막 카메라 스위쳐",
      "홍보 영상 제작(수련회, 스마일파티)",
    ],
    whenWeMeet: ["격주 토요일 1:30 ~ 4:00", "하트기도회, 리더모임, 야베스예배"],
    whereWeMeet: ["교육관 101호", "각 예배 시(교육 후 스케줄 조정)"],
    whatWeWant: [
      "영상 편집 프로그램 활용(프리미어 프로, 파이널컷, 에펙 등)",
      "카메라 활용",
    ],
    tel: "010-5498-3962",
    lastWord: "하나님이 주시는 섬김의 마음만 있다면 누구든 함께할 수 있어요",
    imageURL: "https://i.postimg.cc/RZ1dMp1Z/video.jpg",
    oneLine: "야베스의 디자인 연구소",
  },
];
