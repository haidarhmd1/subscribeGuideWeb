import { BrandIcon, brandColor } from "utils/brandColorIcons";

type PaymentItemProps = {
  title: string;
  type: string;
  deductedCost: string;
};

export const PaymentItem = ({
  title,
  deductedCost,
  type,
}: PaymentItemProps) => {
  return (
    <div className=" bg-slate-100 p-4 my-4 rounded-lg flex">
      <div className={`${brandColor(type)} rounded-full flex self-center p-2`}>
        {BrandIcon(type)}
      </div>
      <div className="ml-4">
        <p>{title}</p>
        <p className="text-xs font-light">Yesterday</p>
      </div>
      <div className=" ml-auto">- {deductedCost}</div>
    </div>
  );
};
