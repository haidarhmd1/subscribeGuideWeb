import { Col } from "antd";

import {
  TbBrandNetflix,
  TbBrandSpotify,
  TbBus,
  TbOctagon,
} from "react-icons/tb";

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
  const color = () => {
    if (type === "spotify") return "bg-green-400";
    if (type === "netflix") return "bg-red-400";
    if (type === "commune") return "bg-yellow-400";
    return "bg-gray-400";
  };

  const BrandIcon = () => {
    if (type === "spotify") return <TbBrandSpotify size={36} />;
    if (type === "netflix") return <TbBrandNetflix size={36} />;
    if (type === "commune") return <TbBus size={36} />;
    return <TbOctagon size={36} />;
  };

  return (
    <Col className="gutter-row" xs={24} md={12}>
      <div
        className={`p-4 ${color()} rounded-xl shadow-xl cursor-pointer`}
        onClick={showDrawer}
      >
        <div className="flex w-full justify-between">
          {BrandIcon()}
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
