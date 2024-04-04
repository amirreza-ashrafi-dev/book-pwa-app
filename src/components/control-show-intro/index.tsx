"use client";

import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/intro"), { ssr: false });
import { useEffect, useState } from "react";

export default function ControlShowIntro({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showIntro, setShowIntro] = useState(false);
  const [usingLargerViewPoint, setUsingLargerViewPoint] =
    useState<boolean>(false);

  useEffect(() => {
    const intro = localStorage.getItem("intro");
    intro ? setShowIntro(false) : setShowIntro(true);
  }, []);

  useEffect(() => {
    const windowSize = window.innerWidth;
    if (windowSize > 490) {
      setUsingLargerViewPoint(true);
    }
  }, []);

  return (
    <div>
      {usingLargerViewPoint ? (
        <div className="h-screen flex justify-center w-full bg-Grandis text-center">
          <p className="font-mono my-auto font-bold text-[35px] text-black">
            this app developed for mobile devices please add this app to your
            mobile as a pwa app and then enjoy it :)
          </p>
        </div>
      ) : (
        <>
          {showIntro && <Intro />} {children}
        </>
      )}
    </div>
  );
}
