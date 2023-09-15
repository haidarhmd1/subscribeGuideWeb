import { Avatar } from "antd";
import { FiBell, FiCalendar, FiMail, FiUser } from "react-icons/fi";

export const MainHeader = () => {
  return (
    <div className="main-header h-12 w-full border-b-[1px] border-gray-200 p-2 flex justify-end">
      <div className="flex text-xs py-2 px-2 mr-2 text-black rounded-md border-0 font-light bg-gray-100">
        <FiCalendar size={14} />
        <span className="text-xs font-bold ml-2">Date:</span>
        <span className="ml-1">23 March 2023</span>
      </div>
      <div className="p-2 bg-gray-200 rounded-md">
        <FiBell
          size={16}
          style={{
            alignSelf: "center",
          }}
        />
      </div>

      <div className="p-2 bg-gray-200 rounded-md mx-3">
        <FiMail
          size={16}
          style={{
            alignSelf: "center",
          }}
        />
      </div>

      <Avatar style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}>
        HH
      </Avatar>
    </div>
  );
};
