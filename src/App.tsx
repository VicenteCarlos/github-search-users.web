import { GlobalStyle } from "./styles/global";
import { Header, Main } from "./components/";
import { Container } from "./style";
import { useDarkMode } from "./contexts/DarkModeProvider";

const App = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode}/>
      <Container>
        <Header />
        <Main />
      </Container>
    </>
  );
};

export { App };
