import type { JSX } from "react";
import type { CellData, Data } from "../../../../constants/mockData";
import type { CellContext } from "@tanstack/react-table";

export function UrlCell(
  props: JSX.IntrinsicAttributes &
    CellData & { info: CellContext<Data, unknown> | undefined }
) {
  const { value } = props;
  return (
    <div className=" px-[8px] py-[4px] flex items-center gap-[8px]  h-full w-full">
      <span
        onClick={() =>
          window.open(new URL(getUrlString(String(value))), "_blank")
        }
        className=" cursor-pointer max-w-[150px] truncate  justify-start underline text-[12px] w-full   leading-[16px] font-[400]  "
      >
        {value ? value : ""}
      </span>
    </div>
  );
}

function getUrlString(url: string) {
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
}
