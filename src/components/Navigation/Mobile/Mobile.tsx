import Link from "next/link";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";

export const Mobile = () => {
  return (
    <div className="h-14 w-11/12 flex justify-around fixed shadow-md shadow-gray-300 rounded-xl -bottom-5 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white z-10">
      <Link
        href="/"
        className="flex flex-col p-2 my-2 rounded-lg hover:bg-blue-50 transition-all"
      >
        <MdOutlineSubscriptions size={24} />
      </Link>
      <Link
        href="/settings"
        className="flex flex-col p-2 my-2 rounded-lg hover:bg-blue-50 transition-all"
      >
        <FiSettings className="self-center" size={24} />
      </Link>
    </div>
  );
};
