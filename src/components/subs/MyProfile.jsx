import { Links } from "./Links";
import { MyProfileData } from "./MyProfileData";

export const MyProfile = () => {
  return (
    <div className="my-profile">
      Course by :
      <Links address="https://github.com/john-smilga" text="John Smilga" />
      Coded by :
      <Links href="https://aeorherhe.netlify.app" text="Abraham Orherhe" />
      <div className="my-profile-icons">
        {MyProfileData.map(({ icon, id, href }) => (
          <Links key={id} address={href} text={<i className={icon}></i>} />
        ))}
      </div>
    </div>
  );
};
