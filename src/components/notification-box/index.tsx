import { useState } from "react";

interface NotificationBox {
  list: Array<{ [key: string]: boolean }>;
}

const NotificationBox: React.FC<NotificationBox> = ({ list }) => {
  const [switchList, setSwitchList] = useState(list);

  const handleSwitch = (switchName: string) => {
    const newSwitchList = switchList.map((switchObj) => {
      const switchKey = Object.keys(switchObj)[0];
      if (switchKey === switchName) {
        if (switchObj[switchKey] === false) {
          console.log("Run");
          return { [switchKey]: true };
        }
        return { [switchKey]: false };
      }
      return switchObj;
    });
    setSwitchList(newSwitchList);
  };
  return (
    <div>
      {switchList.map((l, idx) => {
        const switchName = Object.keys(l)[0];
        return (
          <div key={idx} className="flex w-full justify-between mb-2">
            <span>{switchName}</span>
            <div
              onClick={() => {
                handleSwitch(switchName);
              }}
              className={`w-[43px] transition-all duration-500 px-[2.5px] h-[25px] bg-white border-[1px] border-Chino rounded-xl flex ${
                l[switchName] === false ? "justify-start" : "justify-end"
              } items-center`}
            >
              <div
                className={`w-[18px] transition-all duration-500 h-[18px] rounded-xl ${
                  !l[switchName] ? "bg-gray-400" : "bg-Tenne"
                }`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationBox;
