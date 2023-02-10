import Routes from "./pages/Routes";
import { ChakraProvider, extendTheme, Text } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "*": {
        wordBreak: "keep-all",
      },
    },
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Routes />
      <footer style={{ display: "flex", justifyContent: "center" }}>
        <Text>
          본 검사는 야베스 공동체를 위한 자체제작 검사로 검증되지 않았습니다.
          참고용으로만 사용해주세요
        </Text>
      </footer>
    </ChakraProvider>
  );
};

export default App;
