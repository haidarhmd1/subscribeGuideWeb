import { MenuProps } from "antd";
import Link from "next/link";

export const items: MenuProps["items"] = [
  {
    key: "1",
    type: "group",
    label: "Account",
    children: [
      {
        key: "1-1",
        label: (
          <Link href={{ pathname: "/settings", query: { activeKey: "1" } }}>
            User Details
          </Link>
        ),
      },
      {
        key: "1-2",
        label: (
          <Link href={{ pathname: "/settings", query: { activeKey: "2" } }}>
            Privacy
          </Link>
        ),
      },
      {
        key: "1-3",
        label: (
          <Link href={{ pathname: "/settings", query: { activeKey: "3" } }}>
            Notifications
          </Link>
        ),
      },
    ],
  },
];
