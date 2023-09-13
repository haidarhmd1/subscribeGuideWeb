import { Col } from "antd";
import { FiPlusCircle } from "react-icons/fi";

type AddSubscriptionType = {
  showDrawer: () => void;
};

export const AddSubscription = ({ showDrawer }: AddSubscriptionType) => {
  return (
    <Col className="gutter-row" xs={24} md={12}>
      <div
        className="p-4 rounded-xl bg-blue-100 shadow-md cursor-pointer"
        onClick={showDrawer}
      >
        <div className="flex w-full justify-between">
          <FiPlusCircle size={36} />
        </div>

        <div className="mt-8">
          <div>
            <p className="text-base font-semibold">Add New Subscription</p>
            <p className="font-light">
              Add a new subscription by clicking on this card
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};
