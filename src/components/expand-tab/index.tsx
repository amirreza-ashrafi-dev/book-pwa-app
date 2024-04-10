import Chevron from "@/icons/settings-icons/chevron";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface ExpandTab {
  list: Array<string>;
  child: { [listKey: string]: { element: React.ReactNode } };
}

const ExpandTab: React.FC<ExpandTab> = ({ list, child }) => {
  const [selectedTab, setSelectedTab] = useState("");

  return (
    <div className="w-full">
      {list.map((l, idx) => (
        <div key={idx}>
          <div
            className="flex justify-between py-1 font-mono "
            onClick={() =>
              l === selectedTab ? setSelectedTab("") : setSelectedTab(l)
            }
          >
            <span>{l}</span>
            <div
              className={`transition-all ${
                l === selectedTab ? "rotate-[90deg]" : "rotate-0"
              }`}
            >
              <Chevron />
            </div>
          </div>
          {/* content */}
          {selectedTab === l && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75 }}
              className={`w-[95%] mt-4 bg-[#b3b3b3] mx-auto rounded-md mb-4 `}
            >
              <div>{child[l].element}</div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ExpandTab;
