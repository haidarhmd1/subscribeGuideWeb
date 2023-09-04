"use client";

import { PrimaryButton } from "components/Button";
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import { Select, DatePicker, Input, Modal, Checkbox, Tooltip } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { RangePicker } = DatePicker;

export default function Subscriptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsDateRangeVisible(!isDateRangeVisible);
    console.log(isDateRangeVisible);
  };

  return (
    <div>
      <PrimaryButton onClick={openModal}>Add Subscriptions</PrimaryButton>
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
        <div className="form-container">
          <form>
            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Title of Subscription:</p>
              </div>
              <Input placeholder="Title" />
            </div>

            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Category:</p>
              </div>

              <Select
                defaultValue="lucy"
                className="w-full"
                mode="tags"
                options={[
                  { value: "jack", label: "Entertainment" },
                  { value: "lucy", label: "Fitness" },
                  { value: "Yiminghe", label: "Leisure" },
                ]}
              />
            </div>

            <div className="my-4 border p-4 rounded-md">
              <div className="flex mb-4">
                <Checkbox onChange={onCheckboxChange}>
                  Does not have an end date
                </Checkbox>
                <Tooltip title="Some subscriptions are 'endless' e.g. Spotify, netlfix...etc. where you need manually to end the subscription">
                  <AiOutlineQuestionCircle size={16} />
                </Tooltip>
              </div>
              {isDateRangeVisible && (
                <>
                  <div className="w-full">
                    <p className=" font-light">From - Till:</p>
                  </div>
                  <RangePicker className="w-full" picker="month" />
                </>
              )}
            </div>
            <div className="my-4">
              <div className="w-full">
                <p className=" font-light">Monthly Price:</p>
              </div>
              <Input prefix="€" suffix="Euro" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
