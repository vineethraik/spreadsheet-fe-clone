import type { JSX } from "react";
import "./CustomButton.scss";

function CustomButton({
  name = "Button",
  nameStyle,
  nameClassName,
  style,
  skipName = false,
  className,
  onClick,
  PrefixIcon,
  SuffixIcon,
}: {
  name?: string;
  style?: React.CSSProperties;
  nameStyle?: React.CSSProperties;
  nameClassName?: string;
  skipName?: boolean;
  className?: string;
  onClick?: (event: React.MouseEvent) => void;
  PrefixIcon?: ({
    style,
    className,
  }: {
    style?: React.CSSProperties;
    className?: string;
  }) => JSX.Element;
  SuffixIcon?: ({
    style,
    className,
  }: {
    style?: React.CSSProperties;
    className?: string;
  }) => JSX.Element;
}): JSX.Element {
  return (
    <span
      style={style}
      onClick={onClick}
      className={`custom_button flex flex-row items-center ${className}`}
    >
      {PrefixIcon && <PrefixIcon className="custom_button_icon_prefix" />}
      {!skipName && (
        <span style={nameStyle} className={`custom_button_name ${nameClassName}`}>
          {name}
        </span>
      )}
      {SuffixIcon && <SuffixIcon className="custom_button_icon_suffix" />}
    </span>
  );
}

export default CustomButton;
