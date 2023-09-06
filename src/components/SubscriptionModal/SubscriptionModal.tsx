import { Modal } from "antd";

import { FiXCircle } from "react-icons/fi";

import { SubscriptionForm } from "components/SubscriptionForm";

type SubscriptionModalProps = {
  isModalOpen: boolean;
  closeModal: () => void;
};

export const SubscriptionModal = ({
  isModalOpen,
  closeModal,
}: SubscriptionModalProps) => {
  return (
    <Modal
      open={isModalOpen}
      closeIcon={<FiXCircle size={21} />}
      centered
      title="Add New Subscription"
      okButtonProps={{
        style: {
          backgroundColor: "rgb(96 165 250)",
          fontSize: 12,
          width: 125,
        },
      }}
      cancelButtonProps={{
        style: {
          backgroundColor: "rgb(243 244 246)",
          border: "none",
          fontSize: 12,
          width: 125,
          float: "left",
        },
      }}
      onCancel={closeModal}
      onOk={closeModal}
    >
      <div className="border border-gray-100 my-4" />
      <SubscriptionForm />
    </Modal>
  );
};
