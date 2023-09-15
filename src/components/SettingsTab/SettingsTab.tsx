"use client";

import { Tabs } from "antd";
import { items } from "./SettingsTab.helper";
import { useSearchParams } from "next/navigation";

export const SettingsTab = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const searchParams = useSearchParams();
  const activeKey = searchParams.get("activeKey") ?? "1";

  return (
    <Tabs defaultActiveKey={activeKey} items={items} onChange={onChange} />
  );
};
