import React from "react";
import CustomSearchInput from "@/features/components/SearchInput";
import UserStatics from "@/features/dashboard/userStatics";
import ListPagination from "@/features/components/Listpagination";
import CustomFilterByUser from "@/features/components/filterbyuser";
import { Circle } from "lucide-react";
import { Users } from "lucide-react";
import TransactionListTable from "@/features/Tables/TransactionListTable";
import { SquareActivity } from "lucide-react";
import { UserPlus } from "lucide-react";
const item = ["جستجو بر اساس نام کاربر"];
const filterItems = [
  { id: 1, name: "کاربران فعال" },
  { id: 2, name: "کاربران غیرفعال" },
];
const Statics = [
  {
    id: 1,
    name: "مجموع کاربران ثبت‌نام‌شده",
    icon: <Users />,
    number: 12450,
  },
  {
    id: 2,
    name: "کاربران فعال در ۳۰ روز اخیر",
    icon: <SquareActivity />,
    number: 4320,
  },
  { id: 3, name: "کاربران جدید این ماه", icon: <UserPlus />, number: 230 },
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

      <TransactionListTable />
      <ListPagination />
    </main>
  );
}

export default page;
