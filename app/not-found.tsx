import Image from "next/image";
import Button from "@/features/components/Button";
import { ArrowLeft } from "lucide-react";

function Notfound() {
  return (
    <div className="bg-[#E6F4F7] flex flex-col items-center justify-center gap-20 p-4 md:p-20 min-h-screen">
      <h1 className="text-3xl mb-6 text-center">اوه، مشکلی پیش اومده!</h1>

      <div className="relative h-auto min-h-119.5 w-full max-w-257.25 mx-auto">
        <Image
          src="/404.png"
          alt="404 Error Illustration"
          width={659}
          height={478}
          className="absolute top-0 left-50 object-contain"
        />

        <Image
          src="/Frame.png"
          alt="Decorative Frame"
          width={472}
          height={465}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 object-contain"
        />
      </div>

      <Button
        radius="md"
        size="medium"
        className="w-54 text-white mt-10 flex items-center gap-2"
      >
        <ArrowLeft className="rotate-180" />
        صفحه قبل
      </Button>
    </div>
  );
}

export default Notfound;
