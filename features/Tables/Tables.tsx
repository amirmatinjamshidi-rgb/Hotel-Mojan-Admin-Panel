import React from "react";

export type Column<T> = {
  key: string;
  header: React.ReactNode | (() => React.ReactNode);
  cell: (row: T, index: number) => React.ReactNode;
  thClassName?: string;
  tdClassName?: string | ((row: T, index: number) => string);
};

type TableProps<T> = {
  data: T[];
  columns: Column<T>[];
  zebra?: boolean;
  rowClassName?: (row: T, index: number) => string;
};

export function Table<T>({
  data,
  columns,
  zebra = true,
  rowClassName,
}: TableProps<T>) {
  return (
    <table className="w-full text-[15px] sm:text-sm border border-collapse">
      <thead className="bg-primaryThead">
        <tr>
          {columns.map((col) => (
            <th key={col.key} className={col.thClassName}>
              {typeof col.header === "function" ? col.header() : col.header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {data.map((row, index) => {
          const zebraClass =
            zebra && !rowClassName
              ? index % 2 === 0
                ? "bg-zebra1"
                : "bg-zebra2"
              : undefined;

          return (
            <tr
              key={index}
              className={rowClassName ? rowClassName(row, index) : zebraClass}
            >
              {columns.map((col) => {
                const tdClass =
                  typeof col.tdClassName === "function"
                    ? col.tdClassName(row, index)
                    : col.tdClassName;

                return (
                  <td key={col.key} className={tdClass}>
                    {col.cell(row, index)}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
