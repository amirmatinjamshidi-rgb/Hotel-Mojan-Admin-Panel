/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const DotLottieReact = dynamic(
  () =>
    import("@lottiefiles/dotlottie-react").then((mod) => mod.DotLottieReact),
  {
    ssr: false,
  }
);

interface LoadingScreenProps {
  isExiting: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isExiting }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64 h-64 md:w-96 md:h-96">
        <DotLottieReact
          src="https://lottie.host/830dfdc8-8b77-4d23-899e-889ca71a3644/bkBNRwvMpB.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
