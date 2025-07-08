import type { JSX } from "react";
import type { CellData, Data } from "../../../../constants/mockData";
import type { CellContext } from "@tanstack/react-table";


export function CurrencyCell(props: JSX.IntrinsicAttributes & CellData & { info: CellContext<Data, unknown> | undefined }) {
    const { value  } = props;
    return (
      <div className=" px-[8px] py-[4px] flex items-center gap-[8px]  h-full w-full">
        <span className="flex  justify-end text-[12px] w-full   leading-[16px] font-[400]  ">
          {value ? value.toLocaleString("en", { useGrouping: true }) : ""}
        </span>
        <span className="justify-end text-[#AFAFAF]">{value && "₹"}</span>
      </div>
    );
}