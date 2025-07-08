import { useEffect, type JSX } from "react";

import "./CustomTable.scss";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { mockData } from "../../constants/mockData";
import { useTableData } from "../../utility/table";
// import { mockData } from "../../constants/mockData";

function CustomTable({ pageData = mockData.pages[0] }): JSX.Element {
  const { columns, data, setPageData } = useTableData();
  // const [data, ] = useState(mockData.pages[0].table.data);
  const table = useReactTable({
    columns: columns,
    data: data,
    getCoreRowModel: getCoreRowModel(),
  });

  useEffect(() => {
    setPageData({
      ...pageData,
      table: {
        ...pageData.table,
        data: [
          ...pageData.table.data,
          ...Array.from({ length: 50 }, () => ({})),
        ],
        columnData: [
          ...pageData.table.columnData,
          //add last addition column
          {
            type: "add_column",
            columns: [
              {
                type: "empty",
                headerData: {
                  text: "",
                  style: {
                    height: "32px",
                    borderInline: "1px dashed lightgray",
                  },
                  sortable: false,
                },
                cellData: {
                  type: "empty",
                  style: {
                    height: "32px",
                    borderInline: "1px dashed lightgray",
                  },
                },
              },
            ],
            headerData: {
              style: { width: "100px", borderInline: "1px dashed lightgray" },
              className: "w-[32px] flex items-center justify-center ",
              text: "+",
              sortable: false,
            },
          },
        ],
      },
    });
  }, [pageData]);

  return (
    <div className=" custom_table hide-scrollbar text-black  ">
      <table>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th colSpan={header.colSpan} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
