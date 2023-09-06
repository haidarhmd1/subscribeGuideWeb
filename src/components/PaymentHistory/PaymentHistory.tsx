import { PaymentItem } from "./PaymentItem";

export const PaymentHistory = () => {
  return (
    <div className="my-8">
      <h2>Payment History</h2>
      <div className="w-full">
        <PaymentItem title="Spotify" type="spotify" deductedCost="8$" />
        <PaymentItem title="BVG" type="commune" deductedCost="60$" />
        <PaymentItem title="Netflix" type="netflix" deductedCost="17.99$" />
      </div>
    </div>
  );
};