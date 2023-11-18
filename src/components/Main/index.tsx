import { useState } from "react";
import { api, token } from "../../services/api";
import { CardUser } from "./components/CardUser";
import { StyledMain } from "./style";
import { IoIosSearch } from "react-icons/io";
import { useQuery } from "react-query";

const Main = () => {
  const [text, setText] = useState<string>("");

  const { data } = useQuery("user", async () => {
    const { data } = await api.get(`/${text}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const {
      avatar_url,
      login,
      name,
      public_repos,
      followers,
      following,
      location,
      blog,
    } = data;

    return {
      avatar_url,
      login,
      name,
      public_repos,
      followers,
      following,
      location,
      blog,
    };
  });

  console.log(data);

  return (
    <StyledMain>
      <div id="input-bar">
        <IoIosSearch />
        <input
          placeholder="Pesquisar Usuário"
          onChange={(e) => setText(e.target.value)}
        />
        <button>Pesquisar</button>
      </div>
      <CardUser data={data} />
    </StyledMain>
  );
};

export { Main };
