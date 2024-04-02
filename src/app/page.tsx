"use client";

import dynamic from "next/dynamic";

const Intro = dynamic(() => import("@/components/intro"), { ssr: false });
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    const intro = localStorage.getItem("intro");
    intro ? setShowIntro(false) : setShowIntro(true);
  }, []);
  return (
    <div>
      {showIntro && <Intro />} {"Home"}
    </div>
  );
}
