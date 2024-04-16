"use client";

import Chevron from "@/icons/settings-icons/chevron";
import { useRouter, useSearchParams } from "next/navigation";
import Sort from "@/icons/book/sort";
import Player from "@/components/player";

const Read = () => {
  const Router = useRouter();
  const params = useSearchParams();

  return (
    <div>
      {" "}
      <div className="w-full flex pt-5">
        <div className="rotate-180 translate-x-4" onClick={() => Router.back()}>
          <Chevron width={20} height={20} />
        </div>
        <div className="mx-auto ">
          <span className="font-mono text-[15px] font-bold">
            princess and the goblin
          </span>
        </div>
        <div className="mr-4">
          <Sort />
        </div>
      </div>
      <div
        className="border-[1px] border-gray-500 font-mono mx-3 rounded-md p-3 mt-6"
        dangerouslySetInnerHTML={{
          __html:
            "<p> matters of consequence!<br/>he looked at me there with my hammer in my hand, my fingers black with engine-grease, bending down over an object which seemed to  him extremely ugly...<br/>“you talk just like the grown-ups!”<br/>that made me a little ashamed. but we went on, relentlessly:<br/>“you mix everything uo together... you confuse everything...”<br/>he was really angry. he tossed his golden curls in the breeze.<br/>“i know a planet where there is a certain  red-faced gentleman. he has never smelled a flower. hea has never looked at a star. he has never loved any one. he has never done anything in his life but add up figures. and all day he says over and over, just like you: “i am busy with matters of consequence!” and thats make him swell up with pride. but he is not a man he is a mushroom!”<br/>“a what?”<br/>“a mushroom!”<br/>the little prince was now white with rage.a</p>",
        }}
      />
      <div className="w-full mt-3 py-4">
        {params.get("type") === "audio" && <Player />}
      </div>
    </div>
  );
};

export default Read;
