import React from "react";

import { Table, Column } from "./Tables";
type RoomReservationList = {
  id: number;
  radif: number;
  otaghName: string;
  peygiriCode: string;
  chechIn: string;
  checkOut: string;
  stayDays: string;
  Quantity: string;
  status: "رزرو آتی" | "لغو شده" | "پایان یافته";
  price: string;
};

const info: RoomReservationList[] = [
  {
    id: 1,
    radif: 1,
    otaghName: "سوئیت ساحلی موجان",
    peygiriCode: "۱۴۰۵۱۰",
    chechIn: "۱۴۰۴/۰۵/۱۰",
    checkOut: "۱۴۰۴/۰۵/۱۰",
    stayDays: "۵ شب",
    Quantity: "1 بزرگسال و 2 کودک",
    status: "رزرو آتی",
    price: "23.000.000 تومان",
  },
  {
    id: 2,
    radif: 2,
    otaghName: "سوئیت ساحلی موجان",
    peygiriCode: "۱۴۰۵۱۰",
    chechIn: "۱۴۰۴/۰۵/۱۰",
    checkOut: "۱۴۰۴/۰۵/۱۰",
    stayDays: "۵ شب",
    Quantity: "1 بزرگسال و 2 کودک",
    status: "لغو شده",
    price: "23.000.000 تومان",
  },
  {
    id: 3,
    radif: 3,
    otaghName: "سوئیت ساحلی موجان",
    peygiriCode: "۱۴۰۵۱۰",
    chechIn: "۱۴۰۴/۰۵/۱۰",
    checkOut: "۱۴۰۴/۰۵/۱۰",
    stayDays: "۵ شب",
    Quantity: "1 بزرگسال و 2 کودک",
    status: "پایان یافته",
    price: "23.000.000 تومان",
  },
  {
    id: 4,
    radif: 4,
    otaghName: "سوئیت ساحلی موجان",
    peygiriCode: "۱۴۰۵۱۰",
    chechIn: "۱۴۰۴/۰۵/۱۰",
    checkOut: "۱۴۰۴/۰۵/۱۰",
    stayDays: "۵ شب",
    Quantity: "1 بزرگسال و 2 کودک",
    status: "پایان یافته",
    price: "23.000.000 تومان",
  },
  {
    id: 5,
    radif: 5,
    otaghName: "سوئیت ساحلی موجان",
    peygiriCode: "۱۴۰۵۱۰",
    chechIn: "۱۴۰۴/۰۵/۱۰",
    checkOut: "۱۴۰۴/۰۵/۱۰",
    stayDays: "۵ شب",
    Quantity: "1 بزرگسال و 2 کودک",
    status: "پایان یافته",
    price: "23.000.000 تومان",
  },
];

const passengerColumns: Column<RoomReservationList>[] = [
  {
    key: "radif",
    header: " ردیف",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.radif,
  },
  {
    key: "otaghName",
    header: "نام اتاق",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.otaghName,
  },
  {
    key: "peygiriCode",
    header: () => <span>کد پیگیری</span>,
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName:
      "px-10 py-3.5 border-b border-primaryBorder text-center whitespace-nowrap",
    cell: (row) => row.peygiriCode,
  },
  {
    key: "chechIn",
    header: "تاریخ ورود",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.chechIn,
  },
  {
    key: "checkOut",
    header: "تاریخ خروج",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.checkOut,
  },
  {
    key: "stayDays",
    header: "مدت اقامت",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.stayDays,
  },
  {
    key: "Quantity",
    header: () => <span> تعداد میهمانان</span>,
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName:
      "px-10 py-3.5 border-b border-primaryBorder text-center whitespace-nowrap",
    cell: (row) => row.Quantity,
  },
  {
    key: "status",
    header: "وضعیت رزرو ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: `px-10 py-3.5 border-b border-primaryBorder text-center `,
    cell: (row) => row.status,
  },
  {
    key: "price",
    header: "مبلغ ",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.price,
  },
];

const ReservationListTable = ({ className = "" }) => {
  return (
    <div className="bg-primaryBG text-textPrimary">
      <div className={`w-full flex flex-col gap-10 ${className}`}>
        <div className="border border-primaryBorder rounded-lg overflow-hidden">
          <Table data={info} columns={passengerColumns} />
        </div>
      </div>
    </div>
  );
};

export default ReservationListTable;
