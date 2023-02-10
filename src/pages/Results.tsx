import { answers } from "../answers";
import {
  Heading,
  VStack,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

const Results = () => {
  const navigate = useNavigate();
  return (
    <VStack pt={10} gap={6}>
      <Heading>모든 결과 보기</Heading>
      <Stack>
        {answers.map((_, idx) => (
          <ResultComponent idx={idx} />
        ))}
      </Stack>
      <Button
        w={"205px"}
        mt={18}
        size={"lg"}
        py={"7"}
        bg={useColorModeValue("gray.900", "gray.50")}
        color={useColorModeValue("white", "gray.900")}
        textTransform={"uppercase"}
        _hover={{
          transform: "translateY(2px)",
          boxShadow: "lg",
        }}
        onClick={() => navigate("#")}
      >
        사역국 지원하러 가기
      </Button>
    </VStack>
  );
};

export default Results;

interface Props {
  idx: number;
}

const ResultComponent = ({ idx }: Props) => {
  return (
    <Flex mt={6} width={360} justifyContent="space-between" align="center">
      <Stack>
        <Text size="xs">{answers[idx].oneLine}</Text>
        <Heading size="lg" mt={0}>
          {answers[idx].name}
        </Heading>
      </Stack>
      <Link to={`/result?idx=${idx}`}>
        <Button colorScheme="teal">자세히 보기</Button>
      </Link>
    </Flex>
  );
};
