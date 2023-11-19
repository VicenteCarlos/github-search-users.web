interface IDataPropsProfile {
  profile: {
    avatar_url: string;
    login: string;
    name: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    blog: string;
  };
}

interface IProfileProps {
  avatar_url: string;
  login: string;
  name: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string;
  blog: string;
}

export type { IDataPropsProfile, IProfileProps };
