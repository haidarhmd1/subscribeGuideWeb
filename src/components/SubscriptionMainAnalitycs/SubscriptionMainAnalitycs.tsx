import { Divider } from "antd";

type SubscriptionMainAnalitycsProps = {
  moneySpentTillNow: string;
  incomingSpendings: string;
};

export const SubscriptionMainAnalitycs = ({
  moneySpentTillNow,
  incomingSpendings,
}: SubscriptionMainAnalitycsProps) => {
  return (
    <div className="bg-blue-100 w-full p-4 rounded-xl my-10">
      <h1>Spent for January</h1>
      <p className=" text-4xl">{moneySpentTillNow}</p>
      <Divider
        dashed
        style={{
          borderWidth: 1,
          backgroundColor: "black",
        }}
      />
      <h1>Incoming Spendings Pending</h1>
      <p className=" text-4xl">{incomingSpendings}</p>
    </div>
  );
};
