import { Col, Divider, Row, Statistic } from "antd";

type SubscriptionMainAnalyticssProps = {
  moneySpentTillNow: string;
  incomingSpendings: string;
};

export const SubscriptionMainAnalytics = ({
  moneySpentTillNow,
  incomingSpendings,
}: SubscriptionMainAnalyticssProps) => {
  return (
    <div className="bg-white shadow-sm w-full p-4 rounded-xl my-3">
      <Row gutter={16}>
        <Col span={8}>
          <Statistic title="Spendings for January" value={moneySpentTillNow} />
        </Col>
        <Col span={8}>
          <Statistic
            title="Spent till now"
            value={incomingSpendings}
            suffix={` / ${moneySpentTillNow}`}
          />
        </Col>
        <Col span={8}>
          <Statistic title="Next Due date" value={"02/04/2023"} />
        </Col>
      </Row>
    </div>
  );
};
