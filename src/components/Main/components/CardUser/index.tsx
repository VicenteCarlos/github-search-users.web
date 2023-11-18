import { Container } from "./style";
import { IoIosMap, IoIosLink } from "react-icons/io";


const CardUser = () => {
  return (
    <Container>
      <img src="../../../../../public/assets/img/perfil.png" alt="#" />
      <div id="content-infos">
        <div className="content-title">
          <hgroup>
            <h2>Name</h2>
            <h4>@name</h4>
          </hgroup>
        </div>
        <p>This profile has no bio</p>
        <div className="github-infos">
          {new Array(3).fill(0).map((item, i) => (
            <div className={`box-${i+1}`}>
              <h5>repos</h5>
              <span>count</span>
            </div>
          ))}
        </div>
        <div className="profile">
          <div className="localization">
            <IoIosMap />
            <p className="p">San Francisco</p>
          </div>
          <div className="linK">
            <IoIosLink />
            <p className="p">Link.com</p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CardUser };
