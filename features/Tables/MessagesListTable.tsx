import React from "react";
import { Column, Table } from "./Tables";

type MessagesList = {
  id: number;
  radif: number;
  message: string;
  status: "خوانده شده" | "خوانده نشده";
  date: string;
  hour: string;
  payam: "مشاهده پیام";
};

const info: MessagesList[] = [
  {
    id: 1,
    radif: 1,
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ... تایپ شت میدونی من کلا خیلی وقتا به این موضوع فکر میکنم که",
    status: "خوانده شده",
    date: "۱۴۰۴/۰۵/۱۰",
    hour: "11:45",
    payam: "مشاهده پیام",
  },
  {
    id: 2,
    radif: 2,
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ... تایپ شت میدونی من کلا خیلی وقتا به این موضوع فکر میکنم که",
    status: "خوانده شده",
    date: "۱۴۰۴/۰۵/۱۰",
    hour: "11:45",
    payam: "مشاهده پیام",
  },
  {
    id: 3,
    radif: 3,
    message:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت ... تایپ شت میدونی من کلا خیلی وقتا به این موضوع فکر میکنم که",
    status: "خوانده شده",
    date: "۱۴۰۴/۰۵/۱۰",
    hour: "11:45",
    payam: "مشاهده پیام",
  },
];

const messagesColumns: Column<MessagesList>[] = [
  {
    key: "radif",
    header: " ردیف",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.radif,
  },
  {
    key: "message",
    header: "پیام  ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.message,
  },
  {
    key: "status",
    header: "مدت اقامت",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.status,
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
    key: "hour",
    header: " مبلغ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.hour,
  },
  {
    key: "payam",
    header: "تاریخ خروج",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.payam,
  },
];

const MessagesListTable = ({ className = "" }) => {
  return (
    <div className="bg-primaryBG text-textPrimary">
      <div className={`w-full flex flex-col gap-10 ${className}`}>
        <div className="border border-primaryBorder rounded-lg overflow-hidden">
          <Table data={info} columns={messagesColumns} />
        </div>
      </div>
    </div>
  );
};

export default MessagesListTable;
