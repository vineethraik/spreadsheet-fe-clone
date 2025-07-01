import type { JSX } from "react";
import "./UserCard.scss";
import profile from "../../assets/avatar.png";

function UserCard({
  name = "John Doe",
  email = "john.doe@companyname.com",
  profilePicUrl = profile,
}: {
  name?: string;
  email?: string;
  profilePicUrl?: string;
}): JSX.Element {
  return (
    <div className="user_card flex flex-row items-center">
      <img className="user_card_profile_pic" src={profilePicUrl} alt="User" />
      <div className="user_card_details flex flex-col ">
        <span className="user_card_details_name truncate ">{name}</span>

        <span className="user_card_details_email truncate  ">{email}</span>
      </div>
    </div>
  );
}

export default UserCard;
