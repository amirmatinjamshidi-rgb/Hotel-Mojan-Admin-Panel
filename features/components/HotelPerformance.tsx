import React from "react";
import { formatFaNumber } from "@/utils/formatFaNumber";

export type RoomStatusType = "empty" | "occupied";

export type HotelStatic = {
  id: number;
  name: string;
  info: number;
  type: RoomStatusType;
};

interface HotelPerformanceProps {
  information: HotelStatic[];
}

const statuses = ["تمیز", "کثیف", "بازبینی‌شده"];

function StatusColumn({
  title,
  number,
  data,
}: {
  title: string;
  number: string;
  data: HotelStatic[];
}) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-semibold text-textSecondary">{title}</h2>
        <span className="text-lg font-semibold text-textSecondary">
          {number}
        </span>
      </div>

      {statuses.map((status) => {
        const item = data.find((i) => i.name === status);

        return (
          <div key={status} className="flex justify-between items-center">
            <span className="text-textSecondary">{status}</span>
            <span className="text-textSecondary">
              {formatFaNumber(item?.info ?? 0)}
            </span>
          </div>
        );
      })}
    </div>
  );
}

function HotelPerformance({ information }: HotelPerformanceProps) {
  const emptyRooms = information.filter((i) => i.type === "empty");
  const occupiedRooms = information.filter((i) => i.type === "occupied");

  return (
    <div
      className="
        flex flex-col
        w-full max-w-150 h-51.5
        px-6 pt-5 pb-5
        border border-gray-300 rounded-lg
        bg-white
        mx-auto
        gap-1.5
      "
    >
      <h1 className="text-[18px] font-medium text-right mb-3">
        آمار وضعیت اتاق‌ها
      </h1>

      <div className="grid grid-cols-2 gap-6 h-41.5 w-full max-w-139">
        <StatusColumn
          title="اتاق‌های خالی"
          number={formatFaNumber(109)}
          data={emptyRooms}
        />
        <StatusColumn
          title="اتاق‌های اشغال‌شده"
          number={formatFaNumber(109)}
          data={occupiedRooms}
        />
      </div>
    </div>
  );
}

export default HotelPerformance;
