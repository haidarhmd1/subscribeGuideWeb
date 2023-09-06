import { useState } from "react";

import { Select, Input, Checkbox, Tooltip, DatePicker, Form } from "antd";
import { AiOutlineQuestionCircle } from "react-icons/ai";

import type { CheckboxChangeEvent } from "antd/es/checkbox";

const { RangePicker } = DatePicker;

export const SubscriptionForm = () => {
  const [isDateRangeVisible, setIsDateRangeVisible] = useState(true);

  const onCheckboxChange = (e: CheckboxChangeEvent) => {
    setIsDateRangeVisible(!isDateRangeVisible);
  };

  return (
    <Form layout="vertical">
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
    </Form>
  );
};
