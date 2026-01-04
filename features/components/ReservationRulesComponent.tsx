"use client";
import { Divider } from "@mui/material";
import { Clock } from "lucide-react";
import Button from "./components/Button";
import { Circle } from "lucide-react";
type TimeItem = { id: number; name: string; time: string };
type RuleItem = {
  id: number;
  head: string;
  rule: string;
  rule2?: string;
  rule3?: string;
  rule4?: string;
};
const Time: TimeItem[] = [
  { id: 1, name: "ساعت ورود", time: "14:00" },
  { id: 2, name: "ساعت خروج", time: "15:00" },
];
const RulesDetails: RuleItem[] = [
  {
    id: 1,
    head: "کنسلی و تغییر رزرو",
    rule: "لغو رزرو تا ۴۸ ساعت قبل از تاریخ ورود، بدون جریمه انجام می‌شود.",
    rule2:
      "در صورت لغو کمتر از ۴۸ ساعت مانده به ورود، مبلغ یک شب اقامت کسر خواهد شد.",
  },
  {
    id: 2,
    head: "ظرفیت اتاق",
    rule: "هر اتاق برای تعداد مشخصی از مهمانان طراحی شده است. اقامت نفرات اضافه فقط با هماهنگی قبلی و پرداخت هزینه‌ی مربوط امکان‌پذیر است.",
  },
  {
    id: 3,
    head: "خسارت به اموال هتل",
    rule: "در صورت وارد شدن خسارت به اموال یا تجهیزات اتاق، هزینه‌ی تعمیر یا جایگزینی بر عهده‌ی مهمان خواهد بود.",
  },
  {
    id: 4,
    head: "امنیت و مسئولیت‌ها",
    rule: "لطفاً هنگام خروج از اتاق، درب را قفل کرده و کارت کلید را همراه خود داشته باشید.",
    rule2: "استفاده از وسایل برقی پرمصرف مانند اتو یا اجاق در اتاق مجاز نیست.",
    rule3: "",
    rule4: "",
  },
];
export default function ReservationRulesComponent() {
  return (
    <div>
      {" "}
      <h1 className="flex items-center gap-2">
        {" "}
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />{" "}
        درباره اتاق دو تخته نخل اکونومی{" "}
      </h1>{" "}
      <div className="max-w-246 w-full mx-auto flex gap-8">
        {" "}
        <div className="flex flex-col gap-6 min-w-35">
          {" "}
          {Time.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-2">
              {" "}
              <h3 className="flex items-center gap-2 font-medium">
                {" "}
                <Clock size={15} /> {cat.name}{" "}
              </h3>{" "}
              <Button
                color="gray"
                radius="md"
                size="small"
                border="none"
                className="w-24"
              >
                {" "}
                {cat.time}{" "}
              </Button>{" "}
            </div>
          ))}{" "}
        </div>{" "}
        <Divider orientation="vertical" flexItem />{" "}
        <div className="flex flex-col gap-6">
          {" "}
          {RulesDetails.map((cat) => (
            <div key={cat.id}>
              {" "}
              <h2 className="font-semibold mb-2">{cat.head}</h2>{" "}
              <ul className="list-disc list-inside space-y-1 text-sm leading-6">
                {" "}
                <li>{cat.rule}</li> {cat.rule2 && <li>{cat.rule2}</li>}{" "}
                {cat.rule2 && <li>{cat.rule2}</li>}{" "}
                {cat.rule2 && <li>{cat.rule2}</li>}{" "}
              </ul>{" "}
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
