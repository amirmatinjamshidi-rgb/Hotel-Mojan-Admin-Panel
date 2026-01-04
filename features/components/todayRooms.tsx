"use client";
import { Circle } from "lucide-react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
function TodayRooms() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="flex items-center gap-2 text-sm sm:text-base font-bold">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={12}
          />
          پیشنهادهای ویژه هتل ساحلی موجان
        </h1>
        <Link
          href="/booking"
          className="flex items-center gap-1 text-primary text-sm font-medium"
        >
          <ChevronLeft size={18} className="stroke-primary" />
          مشاهده همه
        </Link>
      </div>
    </div>
  );
}

export default TodayRooms;
