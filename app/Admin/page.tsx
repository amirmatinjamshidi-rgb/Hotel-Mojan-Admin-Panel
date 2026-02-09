import dynamic from "next/dynamic";
import { CalendarDays, Circle } from "lucide-react";
import type { HotelStatic } from "@/features/components/HotelPerformance";

const ChartSkeleton = ({ height }: { height: string }) => (
  <div className={`${height} w-full animate-pulse bg-gray-100 rounded-lg`} />
);

const Occupancystatistics = dynamic(
  () => import("@/features/dashboard/Barchart"),
  {
    loading: () => <ChartSkeleton height="h-52" />,
  },
);
const OccupancyGauge = dynamic(
  () => import("@/features/dashboard/progressBar"),
  {
    loading: () => <ChartSkeleton height="h-55" />,
  },
);
const HotelPerformance = dynamic(
  () => import("@/features/components/HotelPerformance"),
  {
    loading: () => <ChartSkeleton height="h-65" />,
  },
);
const LinearChartMonthly = dynamic(
  () => import("@/features/dashboard/LinearChartMonthly"),
  {
    loading: () => <ChartSkeleton height="h-70.5" />,
  },
);
const LineaChartYearly = dynamic(
  () => import("@/features/dashboard/LinearChartYearly"),
  {
    loading: () => <ChartSkeleton height="h-70.5" />,
  },
);
const UserStatics = dynamic(() => import("@/features/dashboard/userStatics"), {
  loading: () => (
    <div className="h-28 w-full bg-gray-50 animate-pulse rounded-md" />
  ),
});

const hotelItems: HotelStatic[] = [
  { id: 1, name: "تمیز", info: 30, type: "empty" },

  { id: 2, name: "کثیف", info: 19, type: "empty" },

  { id: 3, name: "بازبینی‌شده", info: 30, type: "empty" },

  { id: 4, name: "تمیز", info: 90, type: "occupied" },

  { id: 5, name: "کثیف", info: 4, type: "occupied" },

  { id: 6, name: "بازبینی‌شده", info: 60, type: "occupied" },
];
const statistics: {
  id: number;
  name: string;
  icon: React.ReactNode;
  number: number;
}[] = [
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

export default function Page() {
  return (
    <main className="flex flex-col gap-12 w-full max-w-7xl px-4 md:mr-12">
      <section className="flex flex-col gap-4">
        <h1 className="flex items-center gap-2 text-xl font-bold">
          <Circle className="fill-secondary stroke-secondary" size={15} />
          نمای کلی
        </h1>
        <UserStatics items={statistics} />
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[150fr_98fr] gap-8 items-start">
        <div className="h-70.5 w-full">
          <LinearChartMonthly />
        </div>
        <div className="h-70.5 w-full">
          <LineaChartYearly />
        </div>
      </section>

      <section className="grid grid-cols-1 xl:grid-cols-[120fr_105fr] gap-8 items-start">
        <div className="h-65 w-full">
          <HotelPerformance information={hotelItems} />
        </div>
        <div className="h-55 w-full">
          <OccupancyGauge />
        </div>
      </section>

      <section className="w-full max-w-lg">
        <div className="h-52 w-full">
          <Occupancystatistics />
        </div>
      </section>
    </main>
  );
}
