import React from "react";
import CustomSearchInput from "@/features/components/SearchInput";
import ReservationInfoTable from "@/features/Tables/ReservationTable";
import UserStatics from "@/features/dashboard/userStatics";
import ListPagination from "@/features/components/Listpagination";
import CustomFilterByUser from "@/features/components/filterbyuser";
import { Circle } from "lucide-react";
import { Wallet } from "lucide-react";
import { ChartColumnDecreasing } from "lucide-react";
import { ReceiptText } from "lucide-react";
const item = ["جستجو بر اساس شماره تراکنش"];
const filterItems = [
  { id: 1, name: "پرداخت موفق" },
  { id: 2, name: "پرداخت ناموفق" },
];
const Statics = [
  {
    id: 1,
    name: "مجموع درآمد کل (تومان)",
    icon: <Wallet />,
    number: 4850000000,
  },
  {
    id: 2,
    name: "درآمد ماه جاری (تومان)",
    icon: <ChartColumnDecreasing />,
    number: 450000000,
  },
  {
    id: 3,
    name: "آخرین تراکنش ثبت‌شده (تومان)",
    icon: <ReceiptText />,
    number: 2600000,
  },
];
function page() {
  return (
    <main className="flex flex-col gap-4 w-full max-w-254 mr-12">
      <UserStatics items={Statics} />
      <h1 className="flex items-center gap-2">
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />
        لیست رزروها
      </h1>
      <div className=" flex shrink-0 justify-between">
        <CustomSearchInput items={item} />
        <CustomFilterByUser items={filterItems} />
      </div>
      <ReservationInfoTable showButton={false} />
      <ListPagination />
    </main>
  );
}

export default page;
