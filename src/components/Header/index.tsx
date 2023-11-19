import { IoIosSunny, IoIosMoon } from "react-icons/io";
import { StyledHeader } from "./style";
import { useDarkMode } from "../../contexts/DarkModeProvider";

const Header = () => {
  const { isDarkMode, handleDarkMode } = useDarkMode();

  return (
    <StyledHeader isDarkMode={isDarkMode}>
      <div id="content-header">
        <h1>GitHub API</h1>
        <button id="dark-mode" onClick={handleDarkMode}>
          <span>{isDarkMode ? "DARK" : "LIGHT"}</span>
          {isDarkMode ? <IoIosMoon /> : <IoIosSunny />}
        </button>
      </div>
    </StyledHeader>
  );
};

export { Header };
