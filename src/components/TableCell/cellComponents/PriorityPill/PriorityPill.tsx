import type { JSX } from "react";
import type { CellData, Data } from "../../../../constants/mockData";
import type { CellContext } from "@tanstack/react-table";


const priorityMap: {
  [key: string]: { text: string; color: string };
} = {
  low: {
    text: "Low",
    color: "#1A8CFF",
  },
  medium: {
    text: "Medium",
    color: "#C29210",
  },
  high: {
    text: "High",
    color: "#EF4D44",
  },
};

export function PriorityPill(props: JSX.IntrinsicAttributes & CellData & { info: CellContext<Data, unknown> | undefined }) {
    const { value = "" } = props;
    const { text, color } = priorityMap[value] ? priorityMap[value] : {};
    return (
      <div className="flex justify-center  h-full w-full">
        {priorityMap[value] && (
          <span
            className=" text-[12px]   leading-[16px] font-[600]  px-[8px] py-[4px]"
            style={{ color: color}}
          >
            {" "}
            {text}
          </span>
        )}
      </div>
    );
}