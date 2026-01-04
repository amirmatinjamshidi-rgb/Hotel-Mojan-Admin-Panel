"use client";
import React from "react";
import { formatFaNumber } from "@/utils/formatFaNumber";
type StaticDetail = {
  id: number;
  name: string;
  icon: React.ReactNode;
  number: number;
};
interface StaticDetailProps {
  items: StaticDetail[];
}
function UserStatics({ items }: StaticDetailProps) {
  return (
    <div className="flex flex-row shrink-0 border allBorder rounded-md  align-middle items-center w-full mx-auto max-w-254 p-7 justify-between max-h-25 ">
      {items.map((cat) => (
        <div
          key={cat.id}
          className="flex flex-col justify-between items-center "
        >
          <span className="flex flex-row align-middle items-center gap-2">
            <span className="text-secondary"> {cat.icon} </span>
            <p className="text-textSecondary">{cat.name}</p>
          </span>

          <h1 className="text-primary flex items-center text-xl font-semibold">
            {" "}
            {formatFaNumber(cat.number)}{" "}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default UserStatics;
