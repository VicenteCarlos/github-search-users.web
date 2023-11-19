import { IDataPropsProfile } from "../../../../interfaces";
import { Container } from "./style";
import { IoIosMap, IoIosLink } from "react-icons/io";

const CardUser = ({ profile }: IDataPropsProfile) => {
  const moreData = [
    { title: "Repos", count: profile.public_repos },
    { title: "Seguidores", count: profile.followers },
    { title: "Seguindo", count: profile.following },
  ];

  return (
    <Container>
      <img src={profile.avatar_url} alt="user" />
      <div id="content-infos">
        <div className="content-title">
          <hgroup>
            <h2>{profile.login}</h2>
            <h4>@{profile.name}</h4>
          </hgroup>
        </div>
        <p>This profile has no bio</p>
        <div className="github-infos">
          {moreData.map((item, i) => (
            <div className={`box ${i + 1}`}>
              <h5>{item.title}</h5>
              <span>{item.count}</span>
            </div>
          ))}
        </div>
        <div className="information">
          <div className="localization">
            <IoIosMap />
            <a href="#">{profile.location}</a>
          </div>
          <div className="linK">
            <IoIosLink />
            <a href={profile.blog}>Link.com</a>
          </div>
        </div>
      </div>
    </Container>
  );
};

export { CardUser };
