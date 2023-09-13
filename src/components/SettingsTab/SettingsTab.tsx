"use client";

import { Tabs, TabsProps } from "antd";
import { UserDetails } from "./UserDetails";
import { Privacy } from "./Privacy";
import { Notifications } from "./Notifications";

const items: TabsProps["items"] = [
  {
    key: "1",
    label: "User Details",
    children: <UserDetails />,
  },
  {
    key: "2",
    label: "Privacy",
    children: <Privacy />,
  },
  {
    key: "3",
    label: "Notifications",
    children: <Notifications />,
  },
];

export const SettingsTab = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};
