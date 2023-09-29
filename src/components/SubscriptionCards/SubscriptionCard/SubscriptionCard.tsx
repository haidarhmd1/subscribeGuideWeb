import { Col } from "antd";

import { BrandIcon, brandColor } from "utils/brandColorIcons";

type SubscriptionCardProps = {
  title: string;
  type: string;
  price: string;
  upcomingPaymentDate: string;
  showDrawer: () => void;
};

export const SubscriptionCard = ({
  title,
  type,
  price,
  upcomingPaymentDate,
  showDrawer,
}: SubscriptionCardProps) => {
  return (
    <Col className="gutter-row" xs={24} md={12}>
      <div
        className={`p-4 ${brandColor(
          type
        )} rounded-xl shadow-md cursor-pointer`}
        onClick={showDrawer}
      >
        <div className="flex w-full justify-between">
          {BrandIcon(type)}
          <p className=" self-center">{price}$</p>
        </div>
        <div className="mt-8">
          <div>
            <p className="text-base font-semibold">{title}</p>
            <p className="font-light">
              Upcoming Payment:
              <span className="italic">{upcomingPaymentDate}</span>
            </p>
          </div>
        </div>
      </div>
    </Col>
  );
};
