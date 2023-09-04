"use client";

import { PrimaryButton, SecondaryButton } from "components/Button";
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 450,
    height: "auto",
    overflow: "auto",
    borderRadius: 12,
  },
};

export default function Subscriptions() {
  let subtitle;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <PrimaryButton onClick={openModal}>Add Subscriptions</PrimaryButton>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        contentLabel="Add New Subscription"
      >
        <div className=" absolute right-4 top-4">
          <button onClick={closeModal}>
            <FiXCircle size={21} />
          </button>
        </div>

        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
          Add New Subscription
        </h2>
        <div className="border border-gray-100 my-4" />
        <div className="form-container">
          <form>
            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Title of Subscription:</p>
              </div>
              <input
                type="text"
                className=" w-full bg-gray-50 text-sm rounded-md p-1 px-3"
                placeholder="Title"
              />
            </div>

            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Category:</p>
              </div>
              <input
                type="text"
                className=" w-full bg-gray-50 text-sm rounded-md p-1 px-3"
                placeholder="Title"
              />
            </div>

            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">From:</p>
              </div>
              <input
                type="text"
                className=" w-full bg-gray-50 text-sm rounded-md p-1 px-3"
                placeholder="Title"
              />
            </div>

            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Till:</p>
              </div>
              <input
                type="text"
                className=" w-full bg-gray-50 text-sm rounded-md p-1 px-3"
                placeholder="Title"
              />
            </div>

            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Monthly Price:</p>
              </div>
              <input
                type="text"
                className=" w-full bg-gray-50 text-sm rounded-md p-1 px-3"
                placeholder="Title"
              />
            </div>

            <div className="flex mt-4 justify-between">
              <SecondaryButton onClick={() => {}}>Cancel</SecondaryButton>
              <PrimaryButton onClick={() => {}}>Save</PrimaryButton>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
