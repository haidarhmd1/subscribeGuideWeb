import { Row } from "antd";
import { SubscriptionCard } from "./SubscriptionCard";

export const SubscriptionCards = ({
  showDrawer,
}: {
  showDrawer: () => void;
}) => {
  return (
    <Row gutter={[24, 24]} className="my-4">
      <SubscriptionCard
        title="Spotify"
        type="spotify"
        showDrawer={showDrawer}
        price="8"
        upcomingPaymentDate="21/04/2023"
      />

      <SubscriptionCard
        title="BVG"
        type="commune"
        showDrawer={showDrawer}
        price="60"
        upcomingPaymentDate="21/04/2023"
      />

      <SubscriptionCard
        title="Netflix"
        type="netflix"
        showDrawer={showDrawer}
        price={"17,99"}
        upcomingPaymentDate="21/04/2023"
      />
    </Row>
  );
};
