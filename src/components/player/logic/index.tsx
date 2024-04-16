import { Dispatch, SetStateAction, MutableRefObject } from "react";

export const handlePlayer = (
  play: boolean,
  audioRef: MutableRefObject<HTMLAudioElement | null>,
  progressBarPlayerRef: MutableRefObject<HTMLDivElement | null>,
  interValProgressCheck: MutableRefObject<NodeJS.Timeout | null>,
  setPlaying: Dispatch<SetStateAction<boolean>>,
  setTime: Dispatch<SetStateAction<string>>,
  setProgressState: Dispatch<SetStateAction<number>>
) => {
  if (play) {
    let audioDuration = 0;
    audioRef.current!.play().then(() => {
      setPlaying(true);
      audioDuration = audioRef.current!.duration;
      const progressWidth =
        progressBarPlayerRef.current?.getBoundingClientRect().width;

      interValProgressCheck.current = setInterval(() => {
        const currentAudioDuration = Math.round(
          (audioRef.current!.currentTime * 100) / audioDuration
        );

        const minute = Math.floor(audioRef.current!.currentTime / 60);
        const seconds = Math.floor(audioRef.current!.currentTime % 60);
        setTime(
          `${minute < 10 ? ` 0${minute}` : minute}:${
            seconds < 10 ? `0${seconds}` : seconds
          }`
        );

        setProgressState(
          Math.floor((currentAudioDuration / 100) * progressWidth!)
        );
      }, 1000);
    });
  }

  if (!play) {
    audioRef.current!.pause();
    interValProgressCheck.current &&
      clearInterval(interValProgressCheck.current);
    setPlaying(false);
  }
};

export const playBackRate = (
  type: "faster" | "slower",
  audioRef: MutableRefObject<HTMLAudioElement | null>
) => {
  if (audioRef.current) {
    if (type === "faster") {
      audioRef.current!.currentTime = audioRef.current!.currentTime + 20;
    }

    if (type === "slower") {
      audioRef.current!.currentTime = audioRef.current!.currentTime - 20;
    }
  }
};
