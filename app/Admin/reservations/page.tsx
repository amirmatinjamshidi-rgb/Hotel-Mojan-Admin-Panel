import React from "react";
import CustomSearchInput from "@/features/components/SearchInput";
import ReservationInfoTable from "@/features/Tables/ReservationTable";
import UserStatics from "@/features/dashboard/userStatics";
import ListPagination from "@/features/components/Listpagination";
import CustomFilterByUser from "@/features/components/filterbyuser";
import { Circle, Plus } from "lucide-react";
// import Link from "next/link";

import { CalendarDays } from "lucide-react";
import { House } from "lucide-react";
import { Timer } from "lucide-react";
import Button from "@/features/components/Button";
const item = ["جستحو براساس نام مهمان"];
const filterItems = [
  { id: 1, name: "رزروهای فعال" },
  { id: 2, name: "رزروهای غیرفعال" },
  { id: 3, name: "رزروهای گذشته" },
];
const Statics = [
  {
    id: 1,
    name: "تعداد کل رزروها",
    icon: <CalendarDays />,
    number: 4210,
  },
  {
    id: 2,
    name: "تعداد رزروهای فعال",
    icon: <House />,
    number: 273,
  },
  { id: 3, name: "رزروهای امروز", icon: <Timer />, number: 38 },
];
function page() {
  return (
    <main className="flex flex-col gap-7 w-full max-w-254 mr-12">
      <UserStatics items={Statics} />
      <div className="flex flex-row items-center justify-between">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          لیست رزروها
        </h1>
        {/* <Link href="/rooms"> */}
        <Button
          color="blue2"
          radius="none"
          size="small"
          className="text-white text-md p-2"
        >
          <Plus />
          افزودن اتاق جدید
        </Button>
        {/* </Link> */}
      </div>
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
