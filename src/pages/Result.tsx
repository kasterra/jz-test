import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { answers } from "../answers";

const Result = () => {
  const [idx] = useSearchParams();
  const answer = answers[Number(idx.get("idx")) || 0];
  const navigate = useNavigate();
  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={
              answer.imageURL ||
              "https://images.unsplash.com/photo-1596516109370-29001ec8ec36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyODE1MDl8MHwxfGFsbHx8fHx8fHx8fDE2Mzg5MzY2MzE&ixlib=rb-1.2.1&q=80&w=1080"
            }
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: "md", sm: "2xl", lg: "5xl" }}
            >
              나의 사역국은?
            </Heading>
            <Heading
              lineHeight={1.5}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {answer.name}
            </Heading>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text fontSize={"2xl"} fontWeight={"300"}>
                {answer.name}은 이런 일을 해요
              </Text>
            </VStack>
            <Stack>
              {answer.whatWeDo.map((value) => (
                <Text fontSize={"lg"}>{value}</Text>
              ))}
            </Stack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                우리는 이렇게 모여요
              </Text>

              <List spacing={2}>
                {answer.whenWeMeet.map((_, index) => (
                  <>
                    <ListItem>
                      <Box>
                        <Text as={"span"} fontWeight={"bold"}>
                          모이는 날짜:
                        </Text>{" "}
                        {answer.whenWeMeet[index]}
                      </Box>
                      <Box>
                        <Text as={"span"} fontWeight={"bold"}>
                          모이는 장소:
                        </Text>{" "}
                        {answer.whereWeMeet[index]}
                      </Box>
                    </ListItem>
                  </>
                ))}
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                있으면 좋은 능력들!
              </Text>

              <List spacing={2}>
                {answer.whatWeWant.map((value) => (
                  <ListItem as="li">{value}</ListItem>
                ))}
              </List>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                지원 시 참고사항
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    국장 연락처
                  </Text>{" "}
                  {answer.tel}
                </ListItem>
              </List>
            </Box>
            <Text as={"span"} fontWeight={"bold"} fontSize={{ base: "2xl" }}>
              {answer.lastWord}
            </Text>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
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
          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={() => navigate("/results")}
          >
            다른 국에 대해서도 알아보기
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Result;
