"use client";

import React from "react";
import {
  LayoutGrid,
  CalendarDays,
  WalletCards,
  Mail,
  MessageSquare,
  UserRound,
  LogOut,
  Building,
} from "lucide-react";
import Link from "next/link";
import Button from "../components/Button";

type SidebarItem = {
  id: number;
  name: string;
  route: string;
  icon: React.ReactNode;
};

const SIDEBAR_ITEMS: SidebarItem[] = [
  { id: 1, name: "داشبورد", route: "/Admin", icon: <LayoutGrid /> },
  {
    id: 2,
    name: "رزروها",
    route: "/Admin/reservations",
    icon: <CalendarDays />,
  },
  { id: 3, name: "رستوران", route: "/Admin/Resturant", icon: <Mail /> },
  {
    id: 4,
    name: "پرداخت‌ها",
    route: "/Admin/transactions",
    icon: <WalletCards />,
  },
  {
    id: 5,
    name: "امتیازات و نظرات",
    route: "/Admin/",
    icon: <MessageSquare />,
  },
  { id: 6, name: "پیام‌ها", route: "/Admin/messages", icon: <Mail /> },
  { id: 7, name: "کاربران", route: "/Admin/users", icon: <UserRound /> },
  { id: 8, name: "اتاق‌ها", route: "/Admin/rooms", icon: <Building /> },
];

function SideBar() {
  return (
    <aside
      className="sticky top-0 w-65 h-screen p-2 border rounded-2xl shadow-2xl allBorder transition-all ease-in-out duration-150 hover:shadow-gray-400
                 hidden lg:block"
      aria-label="Admin Sidebar"
    >
      <div className="flex flex-col gap-12 justify-between">
        <nav className="flex flex-col gap-2" dir="rtl">
          {SIDEBAR_ITEMS.map((item) => (
            <Link key={item.id} href={item.route}>
              <Button
                radius="md"
                size="medium"
                color="white"
                className="
                  w-full flex flex-row items-center gap-3
                  justify-start
                  hover:text-black
                  hover:bg-secondaryHover
                  focus:bg-secondaryActive focus:text-black
                "
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>

        <Button
          radius="md"
          size="medium"
          color="white"
          className="
            w-full flex flex-row items-center gap-3
            justify-start
            hover:bg-secondaryHover
            focus:bg-secondaryActive focus:text-black
          "
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <LogOut />
          </span>
          <span className="text-sm font-medium">خروج</span>
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;
