"use client";

import { PrimaryButton, SecondaryButton } from "components/Button";
import { useState } from "react";
import { TbCirclePlus } from "react-icons/tb";

import { Space, Drawer } from "antd";
import { SubscriptionMainAnalitycs } from "components/SubscriptionMainAnalitycs";
import { PaymentHistory } from "components/PaymentHistory";
import { SubscriptionModal } from "components/SubscriptionModal";
import { SubscriptionForm } from "components/SubscriptionForm";
import { SubscriptionCards } from "components/SubscriptionCards/SubscriptionCards";

export default function Subscriptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

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
      <SubscriptionMainAnalitycs
        incomingSpendings="$16.00"
        moneySpentTillNow="$31.00"
      />
      <SubscriptionCards showDrawer={showDrawer} />
      <PaymentHistory />
      <Drawer
        title="Subscription"
        width={600}
        onClose={onCloseDrawer}
        placement="right"
        open={drawerOpen}
        bodyStyle={{ paddingBottom: 80 }}
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
