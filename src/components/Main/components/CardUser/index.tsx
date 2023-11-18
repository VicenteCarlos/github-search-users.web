import { IDataProps } from "../../../../interfaces";
import { Container } from "./style";
import { IoIosMap, IoIosLink } from "react-icons/io";

const CardUser = ({ data }: IDataProps) => {
  const moreData = [
    { title: "Repos", count: data.public_repos },
    { title: "Seguidores", count: data.followers },
    { title: "Seguindo", count: data.following },
  ];

  return (
    <Container>
      <img src={data.avatar_url} alt="user" />
      <div id="content-infos">
        <div className="content-title">
          <hgroup>
            <h2>{data.login}</h2>
            <h4>@{data.name}</h4>
          </hgroup>
        </div>
        <p>This profile has no bio</p>
        <div className="github-infos">
          {moreData.map((item, i) => (
            <div className={`box-${i + 1}`}>
              <h5>{item.title}</h5>
              <span>{item.count}</span>
            </div>
          ))}
        </div>
        <div className="information">
          <div className="localization">
            <IoIosMap />
            <a href="#">{data.location}</a>
          </div>
          <div className="linK">
            <IoIosLink />
            <a href={data.blog}>Link.com</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CardUser };
