"use client";

import Account from "@/icons/settings-icons/account";
import ExpandTab from "@/components/expand-tab";
import More from "@/icons/settings-icons/more";
import NotificationBox from "@/components/notification-box";
import Notification from "@/icons/settings-icons/notification";

const Settings = () => (
  <div>
    <div className="flex justify-center mt-3 text-[20px]">
      <span>settings</span>
    </div>
    <div>
      {/* title */}
      <div className="flex ml-4 mt-5">
        <Account />
        <span className="ml-1 text-[20px] font-bold">Account</span>
      </div>
      <div className="w-[95%] mx-auto rounded-xl mt-3 bg-[#dfdfdf] px-4 py-4">
        <ExpandTab
          list={["edit profile", "change password", "change email"]}
          child={{
            "edit profile": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
            "change password": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
            "change email": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
          }}
        />
      </div>
      <div className="flex ml-4 mt-5">
        <Notification />
        <span className="ml-1 text-[20px] font-bold">notifications</span>
      </div>
      <div className="w-[95%] mx-auto rounded-xl mt-3 bg-[#dfdfdf] px-4 py-4">
        <NotificationBox
          list={[
            { "email notification": false },
            { "weekly newsletter": false },
            { "app notification": false },
          ]}
        />
      </div>
      <div className="flex ml-4 mt-5">
        <More />
        <span className="ml-1 text-[20px] font-bold">More</span>
      </div>
      <div className="w-[95%] mx-auto rounded-xl mt-3 bg-[#dfdfdf] px-4 py-4">
        <ExpandTab
          list={["edit profile", "change password", "change email"]}
          child={{
            "edit profile": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
            "change password": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
            "change email": {
              element: (
                <ul className="p-4">
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                  <li>Test</li>
                </ul>
              ),
            },
          }}
        />
      </div>
    </div>
  </div>
);

export default Settings;
