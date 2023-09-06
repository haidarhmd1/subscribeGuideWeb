import {
  TbBrandNetflix,
  TbBrandSpotify,
  TbBus,
  TbOctagon,
} from "react-icons/tb";

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
  const color = () => {
    if (type === "spotify") return "bg-green-400";
    if (type === "netflix") return "bg-red-400";
    if (type === "commune") return "bg-yellow-400";
    return "bg-gray-400";
  };

  const BrandIcon = () => {
    if (type === "spotify") return <TbBrandSpotify size={21} />;
    if (type === "netflix") return <TbBrandNetflix size={21} />;
    if (type === "commune") return <TbBus size={21} />;
    return <TbOctagon size={21} />;
  };
  return (
    <div className=" bg-slate-100 p-4 my-4 rounded-lg flex">
      <div className={`${color()} rounded-full flex self-center p-2`}>
        {BrandIcon()}
      </div>
      <div className="ml-4">
        <p>{title}</p>
        <p className="text-xs font-light">Yesterday</p>
      </div>
      <div className=" ml-auto">- {deductedCost}</div>
    </div>
  );
};
