import { GlobalStyle } from "./styles/global";
import { Header, Main } from "./components/";
import { Container } from "./style";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export { App };
