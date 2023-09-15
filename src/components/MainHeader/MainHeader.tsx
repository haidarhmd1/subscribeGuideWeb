"use client";

import { Avatar, Dropdown, Popover, Space } from "antd";
import { items, useListContent } from "./MainHeader.helper";
import { FiBell, FiCalendar } from "react-icons/fi";
import { formattedDate } from "utils/getFormattedDate";

export const MainHeader = () => {
  const { content } = useListContent();

  return (
    <div className="main-header h-12 w-full border-b-[1px] border-gray-200 p-2 flex">
      <div className="flex text-xs py-2 px-2 mr-2 text-black rounded-md border-0 font-light bg-gray-100">
        <FiCalendar size={14} />
        <span className="text-xs font-bold ml-2">Date:</span>
        <span className="ml-1">{formattedDate}</span>
      </div>
      <div className="flex ml-auto">
        <Popover
          placement="bottomLeft"
          title="Notifications"
          content={content}
          trigger="click"
        >
          <div className="cursor-pointer p-2 bg-gray-200 rounded-md mr-2">
            <FiBell
              size={16}
              style={{
                alignSelf: "center",
              }}
            />
          </div>
        </Popover>

        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <Avatar
                className="cursor-pointer"
                style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
              >
                HH
              </Avatar>
            </Space>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};
