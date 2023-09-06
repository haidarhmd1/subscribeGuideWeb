"use client";

import Link from "next/link";

import { Divider } from "antd";

import { FcTreeStructure } from "react-icons/fc";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useWindowSize } from "utils/useWindowSize";

export const SideNavigation = () => {
  const { width: windowWidth } = useWindowSize();
  const isBrowserMobile = !!windowWidth && windowWidth < 500;

  const SideNav = !isBrowserMobile ? (
    <section className="side-nav w-34 h-screen border-r-[1px] border-gray-200 sticky top-0">
      <div className="side-nav-logo h-12 flex justify-evenly items-center">
        <FcTreeStructure size={23} />
      </div>
      <Divider className="mt-0" />
      <div className="side-nav-menu flex flex-col p-4">
        <h6 className="text-xs pb-3 text-neutral-500">Menu</h6>
        <Link
          href="/"
          className="p-4 rounded-lg text-xs font-light flex flex-col hover:bg-blue-50 transition-all"
        >
          <MdOutlineSubscriptions className="self-center" size={24} />
          <span className="mt-2 text-center">Subscriptions</span>
        </Link>
        <Divider />
        <Link
          href="/settings"
          className="p-4 rounded-lg text-xs font-light flex flex-col hover:bg-blue-50 transition-all"
        >
          <FiSettings className="self-center" size={24} />
          <span className="mt-2 text-center">Settings</span>
        </Link>
      </div>
    </section>
  ) : null;

  return SideNav;
};
