import { Progress } from "antd";

export const Chart = () => {
  return (
    <div className="h-96 overflow-auto mb-4 bg-white rounded-xl p-4 w-full">
      <div>
        <div className="mb-2">
          <p className="text-sm">test</p>
          <Progress percent={30} />
        </div>
        <div className="mb-2">
          <p className="text-sm">test</p>
          <Progress percent={50} />
        </div>
        <div className="mb-2">
          <p className="text-sm">test</p>
          <Progress percent={70} />
        </div>
        <div className="mb-2">
          <p className="text-sm">test</p>
          <Progress percent={50} />
        </div>
      </div>
    </div>
  );
};
