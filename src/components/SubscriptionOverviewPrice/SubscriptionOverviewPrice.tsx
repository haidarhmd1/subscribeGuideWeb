import { FcGoogle } from "react-icons/fc";

export const SubscriptionOverviewPrice = () => {
  return (
    <div className="flex justify-between">
      <span className="text-base font-bold self-center">1.</span>
      <div className="ml-4 self-center">
        <FcGoogle size={24} />
      </div>
      <div className="">
        <h3 className=" text-base font-bold">Netflix</h3>
        <p className="text-xs font-light">10 March 2023</p>
      </div>
      <div className="money font-semibold text-sm self-center">17,99$</div>
    </div>
  );
};
