import { IoIosSunny } from "react-icons/io";
import { StyledHeader } from "./style";

const Header = () => {
  return (
    <StyledHeader>
      <div id="content-header">
        <h1>Header</h1>
        <div id="dark-mode">
          <span>LIGHT</span>
          <IoIosSunny />
        </div>
      </div>
    </StyledHeader>
  );
};

export { Header };
