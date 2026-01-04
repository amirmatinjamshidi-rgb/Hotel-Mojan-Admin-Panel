import React from "react";
import dynamic from "next/dynamic";
import { CalendarDays } from "lucide-react";
import { HotelStatic } from "@/features/components/HotelPerformance";
import { Circle } from "lucide-react";
const Occupancystatistics = dynamic(
  () => import("@/features/dashboard/Barchart")
);

const OccupancyGauge = dynamic(
  () => import("@/features/dashboard/progressBar")
);

const HotelPerformance = dynamic(
  () => import("@/features/components/HotelPerformance")
);

const LinearChartMonthly = dynamic(
  () => import("@/features/dashboard/LinearChartMonthly")
);

const LineaChartYearly = dynamic(
  () => import("@/features/dashboard/LinearChartYearly")
);

const UserStatics = dynamic(() => import("@/features/dashboard/userStatics"));
const items: HotelStatic[] = [
  { id: 1, name: "تمیز", info: 30, type: "empty" },
  { id: 2, name: "کثیف", info: 19, type: "empty" },
  { id: 3, name: "بازبینی‌شده", info: 30, type: "empty" },

  { id: 4, name: "تمیز", info: 90, type: "occupied" },
  { id: 5, name: "کثیف", info: 4, type: "occupied" },
  { id: 6, name: "بازبینی‌شده", info: 60, type: "occupied" },
];
const Statics = [
  { id: 1, name: "رزروهای امروز", icon: <CalendarDays />, number: 25 },
  { id: 2, name: "اتاق‌های خالی", icon: <CalendarDays />, number: 5 },
  { id: 3, name: "اتاق‌های پر", icon: <CalendarDays />, number: 55 },
  { id: 4, name: "تعداد مهمانان حاضر", icon: <CalendarDays />, number: 140 },
  {
    id: 5,
    name: "تعداد کاربران جدید امروز",
    icon: <CalendarDays />,
    number: 23,
  },
  { id: 6, name: "درآمد امروز (تومان)", icon: <CalendarDays />, number: 12 },
];
function page() {
  return (
    <main className="flex flex-col gap-12 w-full max-w-254 mr-12">
      <div className=" flex flex-col gap-4">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />{" "}
          نمای کلی
        </h1>
        <UserStatics items={Statics} />
      </div>
      <div className="flex flex-row gap-18 align-middle items-center">
        {" "}
        <LinearChartMonthly />
        <LineaChartYearly />
      </div>
      <div className="flex flex-row gap-18 align-middle items-center">
        <HotelPerformance information={items} />
        <OccupancyGauge />
      </div>
      <Occupancystatistics />
    </main>
  );
}

export default page;
