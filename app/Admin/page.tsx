"use client";

import dynamic from "next/dynamic";
import { CalendarDays, Circle } from "lucide-react";
import type { HotelStatic } from "@/features/components/HotelPerformance";
import type { ReactNode } from "react";

const Occupancystatistics = dynamic(
  () => import("@/features/dashboard/Barchart"),
  {
    ssr: false,
    loading: () => (
      <div className="h-70.5 w-full animate-pulse bg-gray-100 rounded-lg" />
    ),
  },
);

const OccupancyGauge = dynamic(
  () => import("@/features/dashboard/progressBar"),
  { ssr: false },
);

const HotelPerformance = dynamic(
  () => import("@/features/components/HotelPerformance"),
  {
    ssr: false,
  },
);

const LinearChartMonthly = dynamic(
  () => import("@/features/dashboard/LinearChartMonthly"),
  {
    ssr: false,
    loading: () => (
      <div className="h-70.5 w-full animate-pulse bg-gray-100 rounded-lg" />
    ),
  },
);

const LineaChartYearly = dynamic(
  () => import("@/features/dashboard/LinearChartYearly"),
  {
    ssr: false,
    loading: () => (
      <div className="h-70.5 w-full animate-pulse bg-gray-100 rounded-lg" />
    ),
  },
);

const UserStatics = dynamic(() => import("@/features/dashboard/userStatics"), {
  ssr: false,
});

type StatisticItem = {
  id: number;
  name: string;
  icon: ReactNode;
  number: number;
};

const hotelItems: HotelStatic[] = [
  { id: 1, name: "تمیز", info: 30, type: "empty" },
  { id: 2, name: "کثیف", info: 19, type: "empty" },
  { id: 3, name: "بازبینی‌شده", info: 30, type: "empty" },
  { id: 4, name: "تمیز", info: 90, type: "occupied" },
  { id: 5, name: "کثیف", info: 4, type: "occupied" },
  { id: 6, name: "بازبینی‌شده", info: 60, type: "occupied" },
];

const statistics: StatisticItem[] = [
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

function Page() {
  return (
    <main className="flex flex-col gap-12 w-full max-w-254 mr-12">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          نمای کلی
        </h1>
        <UserStatics items={statistics} />
      </section>

      <section className="flex flex-col xl:flex-row gap-18 items-center">
        <LinearChartMonthly />
        <LineaChartYearly />
      </section>

      <section className="flex flex-col xl:flex-row gap-18 items-center">
        <HotelPerformance information={hotelItems} />
        <OccupancyGauge />
      </section>

      <section>
        <Occupancystatistics />
      </section>
    </main>
  );
}

export default Page;
