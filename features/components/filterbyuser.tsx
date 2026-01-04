"use client";

import React, { useState } from "react";
import Button from "./Button";
import { CircleX } from "lucide-react";

export interface FilterItem {
  id: string | number;
  name: string;
}

interface CustomFilterByUserProps {
  items: FilterItem[];
  title?: string;
}

export default function CustomFilterByUser({
  items,
  title = "",
}: CustomFilterByUserProps) {
  const [selectedId, setSelectedId] = useState<string | number | null>(null);

  const handleClick = (id: string | number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="">
      {title && (
        <h4 className="font-sans mb-3 text-sm font-bold text-primary">
          {title}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {items.map((cat) => {
          const isActive = selectedId === cat.id;

          return (
            <Button
              key={cat.id}
              radius="md"
              onClick={() => handleClick(cat.id)}
              className={`
                flex items-center gap-2 px-4 py-2 text-sm transition-all duration-200  border allBorder
                ${
                  isActive
                    ? "bg-primaryAccent! text-primaryActive! border-primaryActive hover:bg-primaryAccent!"
                    : "bg-white text-primary border-[#D8E3E7] hover:bg-gray-50 hover:border-blue-300"
                }
              `}
            >
              <span>{cat.name}</span>

              {isActive && (
                <CircleX
                  size={16}
                  className="animate-in fade-in zoom-in duration-200"
                />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
