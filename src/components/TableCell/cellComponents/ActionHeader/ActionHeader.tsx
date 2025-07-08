import type { JSX } from "react";
import type {
  CellData,
  Data,
  HeaderData,
} from "../../../../constants/mockData";
import type { CellContext, HeaderContext } from "@tanstack/react-table";
import { Icons } from "../../../Icons/Icons";

export function ActionHeader(
  props: JSX.IntrinsicAttributes &
    HeaderData &
    CellData & {
      info?:
        | CellContext<Data, unknown>
        | HeaderContext<Data, unknown>
        | undefined;
    } & { onMoreOptionsClick?: (id: string)  => void }
) {
  const {
    className,
    style,
    text,
    prefix_icon_id,
    prefix_icon_style,
    enableMoreOptions,
    onMoreOptionsClick,
  } = props;

  const onMoreClick = () => {
    if (onMoreOptionsClick && text) {
      onMoreOptionsClick(text);
    }
  };
  return (
    <div
      style={style}
      className={` h-[32px] grow justify-center    px-[16px] flex bg-[#E2E2E2] gap-[8px] whitespace-nowrap  items-center w-full  items-center ${
        className || ""
      }`}
    >
      <div className="px-[4px] py-[2px] flex justify-center  items-center gap-[4px] w-max">
        {prefix_icon_id && (
          <Icons style={prefix_icon_style} iconId={prefix_icon_id} />
        )}
        <span className="flex text-[14] leading-[20px] text-[500] justify-center     flex-row items-center">
          {"text" in props ? text : ""}
        </span>
        {enableMoreOptions && (
          <Icons
            onClick={() => {
              onMoreClick();
            }}
            className="cursor-pointer"
            iconId={"more_options"}
            style={prefix_icon_style}
          />
        )}
      </div>
    </div>
  );
}
