"use client";
import React from "react";
import Link from "next/link";
import { ChevronLeft, Circle } from "lucide-react";
import { formatFaNumber } from "@/utils/formatFaNumber";
type TodayRoomsItem = {
  id: number;
  name: string;
  reserved: number;
  all: number;
};

interface TodayRoomsProps {
  items: TodayRoomsItem[];
}

function TodayRooms({ items }: TodayRoomsProps) {
  return (
    <div className="flex flex-col gap-4">
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

      {items.map((item) => (
        <div
          key={item.id}
          className="grid lg:grid-cols-1 md:grid-cols-2 grid-cols-4 max-w-60 max-h-26.5 align-middle mx-auto w-full h-full border allBorder rounded-lg"
        >
          <div className="flex flex-col justify-start">
            <span>{item.name}</span>
            <span>
              <span className=" text-primary font-medium text-xl">
                {formatFaNumber(item.reserved)}
              </span>
              <span> /</span>
              <span className="font-medium text-xl">
                {formatFaNumber(item.all)}
              </span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodayRooms;
