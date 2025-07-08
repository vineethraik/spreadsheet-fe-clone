import type { JSX } from "react";
import type { CellData, Data } from "../../../../constants/mockData";
import type { CellContext } from "@tanstack/react-table";

const statusMap: {
  [key: string]: { text: string; color: string; backgroundColor: string };
} = {
  complete: {
    text: "Complete",
    color: "#0A6E3D",
    backgroundColor: "#D3F2E3",
  },
  blocked: {
    text: "Blocked",
    color: "#C22219",
    backgroundColor: "#FFE1DE",
  },
  in_progress: {
    text: "In Progress",
    color: "#85640B",
    backgroundColor: "#FFF3D6",
  },
  need_to_start: {
    text: "Need to Start",
    color: "#475569",
    backgroundColor: "#E2E8F0",
  },
};

export function StatusPill(
  props: JSX.IntrinsicAttributes &
    CellData & { info: CellContext<Data, unknown> | undefined }
) {
  const { value = "" } = props;
  const { text, color, backgroundColor } = statusMap[value]
    ? statusMap[value]
    : {};
  return (
    <div className="flex justify-center  h-full w-full">
      {statusMap[value] && (
        <span
          className="rounded-[50px] text-[12px]   leading-[16px] font-[500]  px-[8px] py-[4px]"
          style={{ color: color, backgroundColor: backgroundColor }}
        >
          {" "}
          {text}
        </span>
      )}
    </div>
  );
}
