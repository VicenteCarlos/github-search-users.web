import { CardUser } from "./components/CardUser";
import { StyledMain } from "./style";
import { IoIosSearch } from "react-icons/io";



const Main = () => {
  return (
    <StyledMain>
      <div id="input-bar">
        <IoIosSearch />
        <input  placeholder="Pesquisar Usuário"/>
        <button>Pesquisar</button>
      </div>
      <CardUser />
    </StyledMain>
  );
};

export { Main };
