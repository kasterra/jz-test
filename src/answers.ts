type answerType = {
  name: string;
  answersList: (0 | 1)[];
  whatWeDo: string[];
  whenWeMeet: string[];
  whatWeWant: string[];
  tel: string;
  imageURL?: string;
  lastWord: string;
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
    whenWeMeet: ["매주 토요일 오후 2시 (교육관 401호)"],
    whatWeWant: [
      "디자인 : Ai, Photoshop 등...",
      "문서작업 : 한글, 엑셀 능력 등 우대",
    ],
    tel: "010-8954-4854",
    lastWord: "하나님이 주시는 섬김의 마음만 있다면 누구든 함께할 수 있어요",
  },
  {
    name: "하인워십",
    answersList: [0, 1, 0, 0, 1, 0, 1],
    whatWeDo: ["야베스의 모든 찬양"],
    whenWeMeet: [
      "매주 금요일 오후 6시 (7층 제자홀)",
      "매주 토요일 오전 11시 (B1 사랑홀)",
      "매주 주일 오후 4시 (B1 밴드연습실)",
    ],
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
  },
  {
    name: "새가족국",
    answersList: [0, 1, 1, 1, 1, 0, 0],
    whatWeDo: [
      "(새) 가족을 반길 수 있어요☺️",
      "(가) 까이서 복음을 전해요📢",
      "(조)금 에너지가 필요해요🔋",
      "(국) 원끼리 사랑이 넘쳐요💓",
    ],
    whenWeMeet: ["매주 토요일 오후 2시 -교육관 117호"],
    whatWeWant: ["적당한 텐션", "나름의 재치", "웃는 얼굴"],
    tel: "010-2542-3717",
    lastWord: "저희와 함께 새가족을 섬길분을 진심으로 기다립니다🤗",
  },
];
