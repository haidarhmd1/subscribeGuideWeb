import { Row } from "antd";
import { SubscriptionCard } from "./SubscriptionCard";
import { AddSubscription } from "./AddSubscription";

export const SubscriptionCards = ({
  showDrawer,
}: {
  showDrawer: () => void;
}) => {
  return (
    <div className="bg-white p-4 rounded-xl">
      <div>
        <h1>Subscriptions</h1>
      </div>
      <Row gutter={[16, 16]} className="my-4">
        <AddSubscription showDrawer={showDrawer} />
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
    </div>
  );
};
