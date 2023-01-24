import { useState } from "react";
import styled from "styled-components";
import questionList from "../question";
import { Button, Heading } from "@chakra-ui/react";

const Questions = () => {
  const [curPage, setCurPage] = useState(0);
  const [answerList, setAnswerList] = useState<number[]>([]);
  console.log(answerList);
  return (
    <Slider>
      <Slides curPage={curPage}>
        {questionList.map((element, questionIdx) => (
          <Slide>
            <Heading>{element.question}</Heading>
            <Buttons>
              {element.answers.map((answer, answerIdx) => (
                <Button
                  colorScheme="teal"
                  size="md"
                  onClick={() => {
                    setAnswerList((prev) => {
                      let ret = [...prev];
                      ret[questionIdx] = answerIdx;
                      return ret;
                    });
                    setCurPage((prev) => prev + 1);
                  }}
                >
                  {answer}
                </Button>
              ))}
            </Buttons>
          </Slide>
        ))}
      </Slides>
    </Slider>
  );
};

export default Questions;

const Slider = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

const Slides = styled.div<{ curPage: number }>`
  display: flex;
  transition: all 0.25s ease-in-out;
  transform: translateX(${(props) => props.curPage * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
