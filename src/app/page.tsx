"use client";

import { useState } from "react";
import { Space, Drawer, ConfigProvider } from "antd";
import { PrimaryButton, SecondaryButton } from "components/Button";

import { useWindowSize } from "utils/useWindowSize";

import { SubscriptionMainAnalytics } from "components/SubscriptionMainAnalytics";
import { PaymentHistory } from "components/PaymentHistory";
import { SubscriptionForm } from "components/SubscriptionForm";
import { SubscriptionCards } from "components/SubscriptionCards/SubscriptionCards";
import theme from "theme/themeConfig";
import { MOBILE_BREAKPOINT } from "utils/constants";

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < MOBILE_BREAKPOINT;

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <ConfigProvider theme={theme}>
      <div
        className={`main-content p-2.5  bg-gray-100 ${
          isBrowserMobile ? "pb-14" : ""
        }`}
      >
        <SubscriptionMainAnalytics
          incomingSpendings="$16.00"
          moneySpentTillNow="$31.00"
        />
        <SubscriptionCards showDrawer={showDrawer} />
        <PaymentHistory />
        <Drawer
          title={isBrowserMobile ? "" : "Subscription"}
          height={500}
          width={600}
          onClose={onCloseDrawer}
          placement={isBrowserMobile ? "bottom" : "right"}
          open={drawerOpen}
          bodyStyle={{ paddingBottom: isBrowserMobile ? 0 : 80 }}
          extra={
            <Space>
              <SecondaryButton onClick={onCloseDrawer}>Cancel</SecondaryButton>
              <PrimaryButton onClick={onCloseDrawer}>Submit</PrimaryButton>
            </Space>
          }
        >
          <SubscriptionForm />
        </Drawer>
      </div>
    </ConfigProvider>
  );
}
