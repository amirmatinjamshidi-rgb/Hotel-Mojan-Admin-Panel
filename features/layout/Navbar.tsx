"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../components/Button";
import Link from "next/link";
import { User, Menu, X } from "lucide-react";
import BasicModal from "./BasicModal";

const navItems = [
  { href: "/", label: "خانه" },
  { href: "/booking/", label: "اتاق ها" },
  { href: "/Restaurant", label: "رستوران ما" },
  { href: "/About-Us", label: "درباره ما" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className=" top-0 sticky z-50 bg-white/40">
      <div className=" mx-auto h-16 flex justify-between items-center shadow-sm shadow-gray-200 px-6 text-gray-500">
        <div className="flex items-center">
          <Image
            alt="logo"
            src="/Logo.png"
            width={80}
            height={100}
            className="object-contain"
          />
        </div>

        <div className="hidden lg:flex justify-center gap-10 text-gray-600 ">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="transition-all duration-300 ease-out  whitespace-nowrap align-middle rounded-lg p-2 hover:text-primary hover:scale-105 text-sm font-medium focus:text-primary focus:bg-primaryAccent"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            onClick={() => setIsModalOpen(true)}
            color="white"
            border="blue"
            text="blue"
            size="small"
            className="hidden md:flex rounded-md items-center gap-2 px-4 h-10 border border-primary text-primary"
          >
            <User size={20} />
            <span className="text-xs">ورود | ثبت نام</span>
          </Button>
          <BasicModal
            open={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <button
            className="lg:hidden text-gray-700 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-lg py-4 px-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-gray-700 font-medium py-2 border-b border-gray-50 last:border-none"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
