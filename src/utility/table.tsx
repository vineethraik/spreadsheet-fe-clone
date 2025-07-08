import {
  createColumnHelper,
  type ColumnDef,
} from "@tanstack/react-table";
import type {
  Column,
  Data,
  HeaderData,
  PageData,
} from "../constants/mockData";
import { useState } from "react";
import { generateHexId } from "./crypto";
import { cellFactory } from "../components/TableCell/TableCell";

export const useTableData = () => {
  const [pageData, setPageData] = useState<PageData>({
    id: "empty",
    title: "Sheet",
    table: { columnData: [], data: [] },
  });

  const columns = pageData.table.columnData.map((column: Column) =>
    getColumnFromData(column)
  );
  const data = pageData.table.data;

  return {
    columns,
    data,
    setPageData,
  };
};

const columnBuilder = createColumnHelper<Data>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getColumnFromData = (data: Column): ColumnDef<Data, any> => {
  let headerData: HeaderData & { type: string };
  headerData = { type: data.type, ...data.headerData };

  switch (true) {
    case Object.keys(data).includes("columns"):
      headerData = { type: data.type, ...data.headerData };
      return columnBuilder.group({
        id: `${data.type}-group-${generateHexId()}`,
        header: (info) => cellFactory({...headerData,info: info}),
        columns: data?.columns?.map((column: Column) =>
          getColumnFromData(column)
        ),
      });
    case Object.keys(data).includes("accessor"):
      headerData = { type: data.type, ...data.headerData };
      return columnBuilder.accessor(String(data.accessor!), {
        id: `${data.type}-${data.accessor}-${generateHexId()}`,

        header: (info) => cellFactory({ ...headerData, info: info }),
        cell: (
          info
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ) => cellFactory({ ...(info.getValue() as any), ...data.cellData }),
      });

    default:
      return columnBuilder.display({
        id: `${data.type}-display-${generateHexId()}`,
        header: (info) => cellFactory({ ...data.headerData, type: data.type, info }),
        cell: (info) => cellFactory({ ...data.cellData, info }), 
      });
  }
};


