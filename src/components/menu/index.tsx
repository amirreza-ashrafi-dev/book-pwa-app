"use client";

/*{icons}*/
import HomeIcon from "@/icons/menu/home-icon";
import SaveIcon from "@/icons/menu/save-icon";
import UserIcon from "@/icons/menu/user-icon";
import SettingsIcon from "@/icons/menu/settings-icon";

import { usePathname, useRouter } from "next/navigation";

const Menu = () => {
  const pathName = usePathname();
  const router = useRouter();

  return (
    <div className="flex justify-between w-[91%] mx-auto mt-6 px-6 pb-4 pt-4 rounded-xl bg-[#e0e0dc] ">
      <div onClick={() => router.push("/")}>
        <HomeIcon fill={pathName === "/" ? "#A3470A" : "#2E3731"} />
      </div>
      <div onClick={() => router.push("/saved")}>
        <SaveIcon fill={pathName === "/saved" ? "#A3470A" : "#2E3731"} />
      </div>
      <div onClick={() => router.push("/profile")}>
        <UserIcon fill={pathName === "/profile" ? "#A3470A" : "#2E3731"} />
      </div>
      <div onClick={() => router.push("/settings")}>
        <SettingsIcon fill={pathName === "/settings" ? "#A3470A" : "#2E3731"} />
      </div>
    </div>
  );
};

export default Menu;
