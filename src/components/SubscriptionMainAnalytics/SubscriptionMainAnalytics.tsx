import { Card, Col, Row, Statistic } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

type SubscriptionMainAnalyticssProps = {
  moneySpentTillNow: string;
  incomingSpendings: string;
};

export const SubscriptionMainAnalytics = ({
  moneySpentTillNow,
  incomingSpendings,
}: SubscriptionMainAnalyticssProps) => {
  return (
    <div className="w-full mt-1">
      <Row gutter={16}>
        <Col xs={24} md={8} className="mb-4">
          <Card bordered={false}>
            <Statistic
              title="Spendings for January"
              value={moneySpentTillNow}
              precision={2}
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>
        <Col xs={24} md={8} className="mb-4">
          <Card bordered={false}>
            <Statistic
              title="Spent till now"
              value={incomingSpendings}
              valueStyle={{ color: "#0047AB	" }}
              suffix={` / ${moneySpentTillNow}`}
            />
          </Card>
        </Col>
        <Col xs={24} md={8} className="mb-4">
          <Card bordered={false}>
            <Statistic
              title="Next Due date"
              value="02/04/2023"
              valueStyle={{ color: "#FF5733" }}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
