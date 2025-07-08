import type { CellContext, HeaderContext } from "@tanstack/react-table";
import type { CellData, Data, HeaderData } from "../../constants/mockData";
import { HeaderText } from "./cellComponents/HeaderText/HeaderText";
import { LinkToSheet } from "./cellComponents/LinkToSheet/LinkToSheet";
import { ActionHeader } from "./cellComponents/ActionHeader/ActionHeader";
import { StatusPill } from "./cellComponents/StatusPill/StatusPill";
import { PriorityPill } from "./cellComponents/PriorityPill/PriorityPill";
import { CurrencyCell } from "./cellComponents/CurrencyCell/CurrencyCell";
import { TextCell } from "./cellComponents/TextCell/TextCell";
import { DateCell } from "./cellComponents/DateCell/DateCell";
import { UrlCell } from "./cellComponents/UrlCell/UrlCell";

export const cellFactory = (
  props:
    | (HeaderData & { type: string } & { info?: HeaderContext<Data, unknown> })
    | (CellData & { info: CellContext<Data, unknown> })
) => {
  switch (props.type) {
    case "header_text": {
      const headerTextProps = props as HeaderData & { type: string } & {
        info?: HeaderContext<Data, unknown>;
      };
      return (
        <HeaderText
          handleSort={(id) => {
            console.log(id);
          }}
          {...headerTextProps}
          info={headerTextProps.info}
        />
      );
    }
    case "link_to_sheet": {
      const linkToSheetProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return (
        <LinkToSheet
          handleRefresh={(id) => console.log(`Refresh ${id}`)}
          {...linkToSheetProps}
        />
      );
    }
    case "action_text": {
      const actionHeaderProps = props as HeaderData & { type: string } & {
        info?: HeaderContext<Data, unknown>;
      };
      return (
        <ActionHeader
          onMoreOptionsClick={(id) => console.log(`No Actions available ${id}`)}
          {...actionHeaderProps}
          info={actionHeaderProps.info}
        />
      );
    }
    case "status": {
      const statusProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return <StatusPill {...statusProps} />;
    }
    case "priority": {
      const priorityProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return <PriorityPill {...priorityProps} />;
    }
    case "currency": {
      const currencyProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
     
      return <CurrencyCell {...currencyProps} />;
    }
    case "text":{
      const textProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
     
      return <TextCell {...textProps} />;
    }

    case "date": {
      const dateProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return <DateCell {...dateProps} />;
    }
    case "url": {
      const urlProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return (
        <UrlCell
          {...urlProps}
        />
      );
    }
    default: {
      const defaultCellProps = props as CellData & {
        info: CellContext<Data, unknown>;
      };
      return (
        <span
          {...defaultCellProps}
          className={`flex whitespace-nowrap w-full p-[4px] h-full bg-gray text-left ${
            "className" in props ? props.className : ""
          }`}
        >{`${
          "value" in defaultCellProps
            ? defaultCellProps.value
            : "text" in defaultCellProps
            ? defaultCellProps.text
            : "valueFn" in defaultCellProps &&
              defaultCellProps.info &&
              defaultCellProps.valueFn
            ? defaultCellProps.valueFn(
                defaultCellProps.info,
                defaultCellProps.info.row.index
              )
            : ""
        }`}</span>
      );
    }
  }
};
