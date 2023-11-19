import { useState, useEffect } from "react";
import { api, token } from "../../services/api";
import { CardUser } from "./components/CardUser";
import { StyledMain } from "./style";
import { IoIosSearch } from "react-icons/io";
import { TailSpin } from "react-loader-spinner";
import { IProfileProps } from "../../interfaces";
import { ToastContainer, toast } from "react-toastify";
import { configToast } from "./configToast";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const [text, setText] = useState<string>("vicentecarlos");
  const [state, setState] = useState<boolean>(false);
  const [profile, setProfile] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const handleState = () => setState(!state);

  const getProfile = async (): Promise<IProfileProps> => {
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
  };

  useEffect(() => {
    getProfile()
      .then((res) => {
        setProfile(res);
        setIsLoading(false);
        toast.success("Usuário encontrado!", configToast);
      })
      .catch((err) => toast.error("Usuário inválido!", configToast));
  }, [state]);

  return (
    <StyledMain>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div id="input-bar">
        <IoIosSearch />
        <input
          placeholder="Pesquisar Usuário"
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleState}>Pesquisar</button>
      </div>
      {isLoading ? (
        <TailSpin height="80" width="80" color="#1F2A48" ariaLabel="loading" />
      ) : (
        <CardUser profile={profile} />
      )}
    </StyledMain>
  );
};

export { Main };
