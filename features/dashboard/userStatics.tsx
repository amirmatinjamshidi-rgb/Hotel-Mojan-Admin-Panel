"use client";
import React from "react";
import { formatFaNumber } from "@/utils/formatFaNumber";

interface StaticDetailProps {
  items: { id: number; name: string; icon: React.ReactNode; number: number }[];
}

function UserStatics({ items }: StaticDetailProps) {
  return (
    <div className="w-full border allBorder rounded-md p-4 md:p-6 shadow-sm">
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 divide-gray-100 xl:divide-x xl:divide-x-reverse">
        {items.map((cat) => (
          <div
            key={cat.id}
            className="flex flex-col items-center justify-center p-2"
          >
            <div className="flex items-center gap-2 mb-1">
              <span className="text-secondary shrink-0 scale-75 md:scale-100">
                {cat.icon}
              </span>
              <p className="text-textSecondary text-xs md:text-sm whitespace-nowrap">
                {cat.name}
              </p>
            </div>

            <div className="text-primary text-lg md:text-xl font-bold min-h-7">
              {formatFaNumber(cat.number)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default UserStatics;
