import React from "react";
import { Column, Table } from "./Tables";

type TransactionList = {
  id: number;
  radif: number;
  transactionNumber: string;
  date: string;
  place: string;
  status: boolean;
  price: string;
  resid: string;
};

const info: TransactionList[] = [
  {
    id: 1,
    radif: 1,
    transactionNumber: "۱۴۰۵۱۰",
    date: "۱۴۰۴/۰۵/۱۰",
    price: "23.000.000 تومان",
    place: "هتل",
    status: true,
    resid: "دانلود رسید",
  },
  {
    id: 2,
    radif: 2,
    transactionNumber: "۱۴۰۵۱۰",
    date: "۱۴۰۴/۰۵/۱۰",
    price: "23.000.000 تومان",
    place: "هتل",
    status: true,
    resid: "دانلود رسید",
  },
  {
    id: 3,
    radif: 3,
    transactionNumber: "۱۴۰۵۱۰",
    date: "۱۴۰۴/۰۵/۱۰",
    price: "23.000.000 تومان",
    place: "هتل",
    status: true,
    resid: "دانلود رسید",
  },
  {
    id: 4,
    radif: 4,
    transactionNumber: "۱۴۰۵۱۰",
    date: "۱۴۰۴/۰۵/۱۰",
    price: "23.000.000 تومان",
    place: "هتل",
    status: true,
    resid: "دانلود رسید",
  },
];

const transactionsColumns: Column<TransactionList>[] = [
  {
    key: "radif",
    header: " ردیف",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.radif,
  },
  {
    key: "transactionNumber",
    header: "شماره تراکنش ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.transactionNumber,
  },
  {
    key: "date",
    header: () => <span>کد پیگیری</span>,
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName:
      "px-10 py-3.5 border-b border-primaryBorder text-center whitespace-nowrap",
    cell: (row) => row.date,
  },
  {
    key: "price",
    header: " مبلغ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.price,
  },
  {
    key: "place",
    header: "تاریخ خروج",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.place,
  },
  {
    key: "status",
    header: "مدت اقامت",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.status,
  },
  {
    key: "resid",
    header: () => <span> تعداد میهمانان</span>,
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName:
      "px-10 py-3.5 border-b border-primaryBorder text-center whitespace-nowrap",
    cell: (row) => row.resid,
  },
];

const TransactionListTable = ({ className = "" }) => {
  return (
    <div className="bg-primaryBG text-textPrimary">
      <div className={` flex flex-col gap-10 ${className}`}>
        <div className="border border-primaryBorder rounded-lg overflow-hidden">
          <Table data={info} columns={transactionsColumns} />
        </div>
      </div>
    </div>
  );
};

export default TransactionListTable;
