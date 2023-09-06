"use client";

import { useState } from "react";
import { Space, Drawer } from "antd";
import { PrimaryButton, SecondaryButton } from "components/Button";

import { TbCirclePlus } from "react-icons/tb";

import { useWindowSize } from "utils/useWindowSize";

import { SubscriptionMainAnalytics } from "components/SubscriptionMainAnalytics";
import { PaymentHistory } from "components/PaymentHistory";
import { SubscriptionModal } from "components/SubscriptionModal";
import { SubscriptionForm } from "components/SubscriptionForm";
import { SubscriptionCards } from "components/SubscriptionCards/SubscriptionCards";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 500;

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showDrawer = () => {
    setDrawerOpen(true);
  };

  const onCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div>
      <PrimaryButton onClick={openModal}>
        <div className="flex">
          <TbCirclePlus className="mr-2" size={16} />
          Add Subscriptions
        </div>
      </PrimaryButton>
      <SubscriptionModal isModalOpen={isModalOpen} closeModal={closeModal} />
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
  );
}
