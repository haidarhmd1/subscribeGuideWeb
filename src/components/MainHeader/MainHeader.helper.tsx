import { Avatar, List, MenuProps } from "antd";
import Link from "next/link";
import { MOBILE_BREAKPOINT } from "utils/constants";
import { useWindowSize } from "utils/useWindowSize";

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

export const notificationData = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

export const text = <span>Notifications</span>;

export const useListContent = () => {
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < MOBILE_BREAKPOINT;

  const content = (
    <div className={`h-64 overflow-auto ${isBrowserMobile ? " w-64" : "w-96"}`}>
      <List
        itemLayout="horizontal"
        dataSource={notificationData}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="test test"
            />
          </List.Item>
        )}
      />
    </div>
  );

  return { content };
};
