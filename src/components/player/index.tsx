"use client";

import Play from "@/icons/player-icons";
import Pause from "@/icons/player-icons/pause";
import Slower from "@/icons/player-icons/slower";
import Faster from "@/icons/player-icons/faster";
import { useEffect, useRef, useState } from "react";

import { handlePlayer, playBackRate } from "./logic";

const Player = () => {
  const progressBarPlayerRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const interValProgressCheck = useRef<NodeJS.Timeout | null>(null);

  const [progressState, setProgressState] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState("00:00");
  const [totalTime, setTotalTime] = useState("00:00");

  useEffect(() => {
    audioRef.current = new Audio(
      "https://ia804503.us.archive.org/21/items/lady_susan_0707_librivox/ladysusan_1_austen_64kb.mp3"
    );

    audioRef.current.addEventListener("loadeddata", () => {
      const totalMinute = Math.floor(audioRef.current?.duration! / 60);
      const totalSeconds = Math.floor(audioRef.current?.duration! % 60);
      setTotalTime(`${totalMinute}:${totalSeconds}`);
    });
    return () => {
      audioRef.current!.src = "";
    };
  }, []);

  return (
    <div>
      {/* progress bar */}
      <div
        className="w-[80%] h-[2px] bg-slate-500 mx-auto"
        ref={progressBarPlayerRef}
      >
        <div
          className={`w-[10px] h-[10px] bg-Chino -translate-y-1 rounded-[50%]`}
          style={{ marginLeft: `${progressState}px` }}
        />
      </div>
      {/* time */}
      <div className="text-center mt-4">
        {time} / {totalTime}
      </div>
      {/* controls */}
      <div className="flex justify-center mt-4 items-center">
        {/* slower */}
        <div onClick={() => playBackRate("slower",audioRef)}>
          <Slower />
        </div>
        {/* play/pause */}
        <div className="mx-3 border-[1px] border-gray-500 p-3 rounded-[50%]">
          {playing ? (
            <div
              onClick={() =>
                handlePlayer(
                  false,
                  audioRef,
                  progressBarPlayerRef,
                  interValProgressCheck,
                  setPlaying,
                  setTime,
                  setProgressState
                )
              }
            >
              <Pause />
            </div>
          ) : (
            <div
              onClick={() =>
                handlePlayer(
                  true,
                  audioRef,
                  progressBarPlayerRef,
                  interValProgressCheck,
                  setPlaying,
                  setTime,
                  setProgressState
                )
              }
            >
              <Play />
            </div>
          )}
        </div>
        {/* faster */}
        <div onClick={() => playBackRate("faster",audioRef)}>
          <Faster />
        </div>
      </div>
    </div>
  );
};

export default Player;
