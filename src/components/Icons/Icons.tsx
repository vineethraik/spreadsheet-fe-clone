import hash_tag from "../../assets/Hash_tag.svg";
import job from "../../assets/Briefcase.svg";
import calender from "../../assets/Calendar.svg";
import avatar from "../../assets/Avatar.svg";
import link from "../../assets/Link.svg";
import globe from "../../assets/Globe.svg";
import image_hi_fi from "../../assets/EmojiHiFi.svg";
import downArrow from "../../assets/DownArrowFill.svg";
import dropdown from "../../assets/Dropdown.svg";
import type { HTMLAttributes } from "react";

const IconUrls: { [key: string]: string } = {
  hash_tag: hash_tag,
  link: link,
  job: job,
  calender: calender,
  in_fill_down_arrow: downArrow,
  avatar: avatar,
  globe: globe,
  downward_forked_arrow_gray: "downward_forked_arrow_gray",
  emoji_hi_five: image_hi_fi,
  dropdown: dropdown,
};

export const Icons = ({
  iconId,
  style,
  className,
  onClick
}: {
  iconId: string;
  style?: React.CSSProperties;
  className?: string;
} &HTMLAttributes<HTMLImageElement>) => {
  const iconSrc = `${IconUrls?.[iconId]}`;
  return (
    iconSrc && (
      <img onClick={onClick} className={className} style={style} src={iconSrc} alt="" />
    )
  );
};
