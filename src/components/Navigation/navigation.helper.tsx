import { FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";

export const navLink = [
  {
    name: "Subscriptions",
    link: "/",
    icon: <MdOutlineSubscriptions className="self-center" size={24} />,
  },
  {
    name: "Settings",
    link: "/settings",
    icon: <FiSettings className="self-center" size={24} />,
  },
];
