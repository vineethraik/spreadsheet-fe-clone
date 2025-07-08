import type { JSX } from "react";
import type { CellData, Data } from "../../../../constants/mockData";
import type { CellContext } from "@tanstack/react-table";

export function TextCell(
  props: JSX.IntrinsicAttributes &
    CellData & { info: CellContext<Data, unknown> | undefined }
) {
  const { value,className,style } = props;
  return (
    <div
      className={`  px-[8px] py-[4px]  flex items-center  gap-[8px]  h-full w-full ${className || ""}`}
      style={style}
    >
      <span className="  w-fit max-w-[200px]  truncate   justify-start text-[12px]    leading-[16px] font-[400]  ">
        {value ? value : ""}
      </span>
    </div>
  );
}
