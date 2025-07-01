import type { JSX } from "react";
import "./Breadcrumbs.scss";
import chevron from "../../assets/Chevron.svg";
import more_options from "../../assets/More.svg";

function Breadcrumbs({
  path,
  separator = "/",
  separatorElement = (
    <img
      src={chevron}
      className="breadcrumbs_path_separator"
      alt="more options"
    />
  ),
  onPathClick = (path: string) => {
    console.log("Can't move to path:", path, " Because No Actions Configured");
  },
  onMoreOptionsClick = () => {
    console.log("No Actions available (More Options Click)");
  },
}: {
  path: string;
  separator?: string;
  separatorElement?: JSX.Element;
  onPathClick?: Function;
  onMoreOptionsClick?: Function;
}): JSX.Element {
  const paths = path.split(separator);
  return (
    <div className="breadcrumbs flex flex-row items-center justify-start">
      {paths.map((_path: string, index: number) => {
        return (
          <>
            <span
              key={index}
              className="breadcrumbs_path font-bold"
              onClick={() => onPathClick(path.split(_path)[0] + _path)}
            >
              {_path}
            </span>
            {index !== paths.length - 1 && separatorElement}
          </>
        );
      })}
      <img
        className="breadcrumbs_more_options ml-3 hover:brightness-75"
        onClick={() => onMoreOptionsClick()}
        src={more_options}
        alt=""
      />
    </div>
  );
}

export default Breadcrumbs;
