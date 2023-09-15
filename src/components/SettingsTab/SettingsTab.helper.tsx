import { TabsProps } from "antd";
import { UserDetails } from "./UserDetails";
import { Privacy } from "./Privacy";
import { Notifications } from "./Notifications";

export const items: TabsProps["items"] = [
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
