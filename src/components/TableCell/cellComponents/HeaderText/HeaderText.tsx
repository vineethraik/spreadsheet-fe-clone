import type { HTMLAttributes, JSX } from "react";
import type {
  CellData,
  Data,
  HeaderData,
} from "../../../../constants/mockData";
import type { CellContext, HeaderContext } from "@tanstack/react-table";
import { Icons } from "../../../Icons/Icons";

export function HeaderText(
  props: JSX.IntrinsicAttributes &
    CellData &
    HeaderData & {
      info: CellContext<Data, unknown> | HeaderContext<Data, unknown> | undefined;
    } & HTMLAttributes<HTMLElement> & {
      handleSort?: (id: string) => void;
    }
): JSX.Element {
  const {
    className,
    style,
    prefix_icon_id,
    prefix_icon_style,
    sortable = false,
    handleSort,
    info,
  } = props;

  const onSortClicked = () => {
    console.log("No Actions available (Sort Click)");
   if(handleSort && info){
    // console.log("handleSort:",info.column.id);
    
    handleSort(info.column.id);
   }
  };
  return (
    <div
      style={{ ...style, minWidth: "max-content" }}
      className={` bg-[#EEEEEE] flex gap-[4px] items-center justify-start whitespace-nowrap w-full p-[4px] pl-[8px] h-full bg-gray text-left ${
        "className" in props ? className : ""
      }`}
    >
      {prefix_icon_id && <Icons style={prefix_icon_style} iconId={prefix_icon_id} />}
      {`${"value" in props ? props.value : "text" in props ? props.text : ""}`}
      {sortable && (
        <Icons
          onClick={() => {
            onSortClicked();
          }}
          className="cursor-pointer ml-auto justify-self-end"
          iconId="dropdown"
        />
      )}
    </div>
  );
}
