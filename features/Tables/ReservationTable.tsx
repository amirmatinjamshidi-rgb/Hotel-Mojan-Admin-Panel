import { Button } from "@mui/material";
import { Edit } from "lucide-react";
import { Table, Column } from "./Tables";

type Passenger = {
  id: number;
  name: string;
  ageType: "بزرگسال" | "کودک";
  sex: "مرد" | "زن";
  codeMelli: string;
};

type RoomReservation = {
  id: number;
  sarparast: string;
  phoneNumber: string;
  email: string;
  passengers: Passenger[];
};

const roomTableInfo: RoomReservation[] = [
  {
    id: 1,
    sarparast: "نگین هاشمی",
    phoneNumber: "09123456789",
    email: "negin@gmail.com",
    passengers: [
      {
        id: 1,
        name: "علی هاشمی",
        ageType: "بزرگسال",
        sex: "مرد",
        codeMelli: "1234567890",
      },
      {
        id: 2,
        name: "سارا هاشمی",
        ageType: "کودک",
        sex: "زن",
        codeMelli: "0987654321",
      },
      {
        id: 3,
        name: "سارا هاشمی",
        ageType: "کودک",
        sex: "زن",
        codeMelli: "0987654321",
      },
    ],
  },
  {
    id: 2,
    sarparast: "محمد رضایی",
    phoneNumber: "09351234567",
    email: "rezaei@gmail.com",
    passengers: [
      {
        id: 1,
        name: "محمد رضایی",
        ageType: "بزرگسال",
        sex: "مرد",
        codeMelli: "1122334455",
      },
    ],
  },
];

const passengerColumns: Column<Passenger>[] = [
  {
    key: "ageType",
    header: "نوع مسافر",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.ageType,
  },
  {
    key: "name",
    header: "نام مسافر",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.name,
  },
  {
    key: "codeMelli",
    header: () => <span>کدملی</span>,
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName:
      "px-10 py-3.5 border-b border-primaryBorder text-center whitespace-nowrap",
    cell: (row) => row.codeMelli,
  },
  {
    key: "sex",
    header: "جنسیت",
    thClassName: "px-10 py-3.5 border-b border-primaryBorder",
    tdClassName: "px-10 py-3.5 border-b border-primaryBorder text-center",
    cell: (row) => row.sex,
  },
];

const ReservationInfoTable = ({
  showButton = true,

  className = "",
}) => {
  return (
    <div className="bg-primaryBG text-textPrimary">
      {roomTableInfo.map((room) => (
        <div
          key={room.id}
          className={`w-full max-w-246 flex flex-col gap-10 ${className}`}
        >
          <div className="flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <div className="rounded-[100px] bg-secondary w-2 h-2" />
              <span>مشخصات مسافران</span>
            </div>

            {showButton && (
              <Button
                variant="outlined"
                startIcon={<Edit />}
                className="rounded-xl"
              >
                ویرایش مسافران
              </Button>
            )}
          </div>

          <div className="w-full bg-white p-6">
            <div className="flex flex-col gap-6">
              <div className="flex justify-between gap-4 text-[15px]">
                <span className="font-bold">
                  اطلاعات سرپرست:
                  <span className="font-normal">{room.sarparast}</span>
                </span>

                <span className="font-bold">
                  شماره تماس:
                  <span className="font-normal">{room.phoneNumber}</span>
                </span>

                <span className="font-bold">
                  ایمیل:
                  <span className="font-normal">{room.email}</span>
                </span>

                <span className="font-bold">
                  تعداد مسافران:
                  <span className="font-normal">
                    {room.passengers.length} نفر
                  </span>
                </span>
              </div>

              <div className="border border-primaryBorder rounded-lg overflow-hidden">
                <Table data={room.passengers} columns={passengerColumns} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationInfoTable;
