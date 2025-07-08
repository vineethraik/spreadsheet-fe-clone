import type { HTMLAttributes, JSX } from "react";
import type { HeaderData } from "../../../../constants/mockData";
import { Icons } from "../../../Icons/Icons";

export function LinkToSheet(
  props: JSX.IntrinsicAttributes &
    HeaderData &
    HTMLAttributes<HTMLElement> & {
      handleRefresh?: (id: string) => void;
    }
) {
  const {
    className,
    style,
    prefix_icon_id,
    prefix_icon_style,
    allowRefresh = false,
    text,
    handleRefresh
  } = props;
  return (
    <div
      className={`flex bg-[#E2E2E2] gap-[8px] whitespace-nowrap  items-center w-full p-[4px] h-full text-left ${
        className || ""
      }`}
      style={style}
    >
      <span className="flex  text-[12px] leading-[16px] font-[400] p-[4px] gap-[4px] rounded-[4px] bg-[#EEEEEE] flex-row items-center">
        {prefix_icon_id && (
          <Icons iconId={prefix_icon_id} style={prefix_icon_style} />
        )}
        {"text" in props ? text : ""}
      </span>
      {allowRefresh && (
        <Icons className="cursor-pointer" onClick={() => {if(handleRefresh) handleRefresh("link_to_sheet")}} iconId="refresh" style={prefix_icon_style} />
      )}
    </div>
  );
}
