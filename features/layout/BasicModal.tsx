"use client";

import Modal from "@mui/material/Modal";

import { CircleX } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/circularLogo.png";
import { Divider } from "@mui/material";
import { TextField } from "@mui/material";
import Link from "next/link";
import Button from "../components/Button";

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({ open, onClose }: BasicModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-white w-120 h-147.5 rounded-2xl max-w-md mx-auto mt-40 border border-primaryBorder py-8 px-10">
        <div className="  w-full h-full flex flex-col ">
          <div className="flex justify-start ">
            <CircleX
              className="stroke-primary hover:cursor-pointer hover:fill-primary hover:stroke-white w-6 h-6"
              onClick={onClose}
            />
          </div>
          <div className=" flex flex-col gap-10">
            <div className="flex flex-col items-center gap-2">
              <Image
                src={Logo}
                alt="Mojan Hotel"
                width={96}
                height={96}
                className="w-24 h-24"
              />
              <span className="text-textPrimary text-[18px]">ورود/ثبت نام</span>
            </div>
            <div className="w-full flex flex-col gap-7">
              <div className="flex flex-col gap-2">
                <label htmlFor="TextField">شماره موبایل</label>
                <TextField
                  name="TextField"
                  className="h-12"
                  variant="outlined"
                  required
                  placeholder="شماره موبایل خود را وارد کنید"
                />
              </div>
              <div className="w-full flex flex-col items-center gap-7">
                <Button className="py-3.5 px-20 w-full bg-secondary active:bg-secondaryActive hover:bg-secondaryHover rounded-lg">
                  ورود
                </Button>
                <span className="text-textPrimary whitespace-nowrap text-[12px]">
                  با ورود یا ثبت نام
                  <span className="text-primary" onClick={onClose}>
                    <Link href="/rules"> شرایط و قوانین </Link>
                  </span>
                  استفاده از سایت را می پذیرم.
                </span>
                <Divider className="w-full h-1 text-textSecondary">
                  <span className="p-1 text-[15px] text-textSecondary">یا</span>
                </Divider>
                <Button
                  text="orange"
                  border="orange"
                  className="py-3.5 px-20 w-full bg-white hover:bg-gray-100 border-secondary rounded-lg"
                >
                  ورود با حساب گوگل
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

//  <Button variant="contained" color="primary" onClick={onClose}>
//           بستن
//         </Button>
