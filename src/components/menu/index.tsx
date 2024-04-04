/*{icons}*/
import HomeIcon from "@/icons/menu/home-icon";
import SaveIcon from "@/icons/menu/save-icon";
import UserIcon from "@/icons/menu/user-icon";
import SettingsIcon from "@/icons/menu/settings-icon";

const Menu = () => {
  return (
    <div className="flex justify-between w-[91%] mx-auto mt-6 px-6 pb-4 pt-4 rounded-xl bg-[#e0e0dc] ">
      <div>
        <HomeIcon />
      </div>
      <div>
        <SaveIcon />
      </div>
      <div>
        <UserIcon />
      </div>
      <div>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default Menu;
