"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const LoadingScreen = dynamic(() => import("@/features/layout/loading"), {
  ssr: false,
});

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [showLoader, setShowLoader] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const displayTimer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setShowLoader(false);
      }, 700);
    }, 2000);

    return () => clearTimeout(displayTimer);
  }, []);

  return (
    <>
      {mounted && showLoader && <LoadingScreen isExiting={isExiting} />}

      <div
        className={
          !mounted || showLoader
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-500"
        }
      >
        {children}
      </div>
    </>
  );
}
