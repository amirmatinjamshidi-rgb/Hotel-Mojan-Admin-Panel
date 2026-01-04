"use client";
import SideBar from "@/features/layout/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-12">
      <SideBar />

      {children}
    </div>
  );
}
