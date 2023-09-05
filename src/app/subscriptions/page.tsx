"use client";

import { PrimaryButton, SecondaryButton } from "components/Button";
import { useState } from "react";
import { FiXCircle } from "react-icons/fi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import {
  TbBrandNetflix,
  TbBrandSpotify,
  TbBus,
  TbCirclePlus,
  TbPlus,
} from "react-icons/tb";

import {
  Select,
  DatePicker,
  Input,
  Modal,
  Checkbox,
  Tooltip,
  Col,
  Form,
  Space,
  Drawer,
  Row,
  Divider,
} from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { RangePicker } = DatePicker;

export default function Subscriptions() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const [isDateRangeVisible, setIsDateRangeVisible] = useState(true);

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

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsDateRangeVisible(!isDateRangeVisible);
    console.log(isDateRangeVisible);
  };

  return (
    <div>
      <PrimaryButton onClick={openModal}>
        <div className="flex">
          <TbCirclePlus className="mr-2" size={16} />
          Add Subscriptions
        </div>
      </PrimaryButton>
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
      <div className="bg-blue-100 w-full p-4 rounded-xl my-10">
        <h1>Spent for January</h1>
        <p className=" text-4xl">$31,00</p>
        <Divider
          dashed
          style={{
            borderWidth: 1,
            backgroundColor: "black",
          }}
        />
        <h1>Incoming Spendings Pending</h1>
        <p className=" text-4xl">$16,00</p>
      </div>
      <Row gutter={[24, 24]} className="my-4">
        <Col className="gutter-row" xs={24} md={12}>
          <div
            className="p-4 bg-green-400 rounded-xl shadow-xl cursor-pointer"
            onClick={showDrawer}
          >
            <div className="flex w-full justify-between">
              <TbBrandSpotify size={36} />
              <p className=" self-center">8€</p>
            </div>
            <div className="mt-8">
              <div>
                <p className="text-base font-semibold">Spotify</p>
                <p className="font-light">
                  Upcoming Payment: <span className="italic">21/04/2023</span>
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" xs={24} md={12}>
          <div
            className="p-4 bg-yellow-400 rounded-xl shadow-xl cursor-pointer"
            onClick={showDrawer}
          >
            <div className="flex w-full justify-between">
              <TbBus size={36} />
              <p className=" self-center">64€</p>
            </div>
            <div className="mt-8">
              <div>
                <p className="text-base font-semibold">BVG</p>
                <p className="font-light">
                  Upcoming Payment: <span className="italic">21/04/2023</span>
                </p>
              </div>
            </div>
          </div>
        </Col>

        <Col className="gutter-row" xs={24} md={12}>
          <div
            className="p-4 bg-red-400 rounded-xl shadow-xl cursor-pointer"
            onClick={showDrawer}
          >
            <div className="flex w-full justify-between">
              <TbBrandNetflix size={36} />
              <p className=" self-center">17,99€</p>
            </div>
            <div className="mt-8">
              <div>
                <p className="text-base font-semibold">Netflix</p>
                <p className="font-light">
                  Upcoming Payment: <span className="italic">21/04/2023</span>
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <div className="my-8">
        <h2>Payment History</h2>
        <div className="w-full">
          <div className=" bg-slate-100 p-4 my-4 rounded-lg flex">
            <div className="bg-green-300 rounded-full flex self-center p-2">
              <TbBrandSpotify size={21} />
            </div>
            <div className="ml-4">
              <p>Spotify</p>
              <p className="text-xs font-light">Yesterday</p>
            </div>
            <div className=" ml-auto">- 8€</div>
          </div>

          <div className=" bg-slate-100 p-4 my-4 rounded-lg flex">
            <div className="bg-red-300 rounded-full flex self-center p-2">
              <TbBrandNetflix size={21} />
            </div>
            <div className="ml-4">
              <p>Netflix</p>
              <p className="text-xs font-light">Yesterday</p>
            </div>
            <div className=" ml-auto">- 17,99€</div>
          </div>

          <div className=" bg-slate-100 p-4 my-4 rounded-lg flex">
            <div className="bg-yellow-300 rounded-full flex self-center p-2">
              <TbBus size={21} />
            </div>
            <div className="ml-4">
              <p>BVG</p>
              <p className="text-xs font-light">Yesterday</p>
            </div>
            <div className=" ml-auto">- 60€</div>
          </div>
        </div>
      </div>
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
        <Form layout="vertical">
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
        </Form>
      </Drawer>
    </div>
  );
}
