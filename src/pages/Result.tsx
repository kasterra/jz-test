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

const Result = () => {
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
              문서출판국
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
                문서출판국은 이런 일을 해요
              </Text>
              <Text fontSize={"lg"}>주보 디자인 및 인쇄</Text>
              <Text fontSize={"lg"}>수련회 책자 작업</Text>
              <Text fontSize={"lg"}>각종 행사 포스터 디자인</Text>
              <Text fontSize={"lg"}>매주 예배 광고 ppt</Text>
            </VStack>
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
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    모이는 날짜:
                  </Text>{" "}
                  매주 토요일 오후 2시
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    모이는 장소:
                  </Text>{" "}
                  교육관 401호
                </ListItem>
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
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    디자인
                  </Text>{" "}
                  Ai, photoshop 등...
                </ListItem>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    문서작업
                  </Text>{" "}
                  한글, 엑셀등 능력 우대
                </ListItem>
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
                지원시 참고사항
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    국장 연락처
                  </Text>{" "}
                  010-1234-5678
                </ListItem>
              </List>
            </Box>
            <Text as={"span"} fontWeight={"bold"} fontSize={{ base: "2xl" }}>
              하나님이 주시는 섬김의 마음만 있다면 누구든 함께할 수 있어요!
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
          >
            다른 국에 대해서도 알아보기
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default Result;
