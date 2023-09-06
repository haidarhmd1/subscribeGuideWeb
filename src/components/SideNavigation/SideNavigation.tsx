import Link from "next/link";
import { FiFolder, FiSettings } from "react-icons/fi";
import { MdOutlineSubscriptions } from "react-icons/md";

export const SideNavigation = () => {
  return (
    <section className="side-nav p-2.5 w-2/6 h-screen border-r-[1px] border-gray-200">
      <div className="side-nav-logo">logo</div>
      <div className="side-nav-menu flex flex-col pt-4 pb-4">
        <h6 className="text-xs pb-3 text-neutral-500">Menu</h6>
        <Link href="/" className="pt-2 pb-2 text-sm font-semibold flex">
          <FiFolder size={18} />
          <span className="pl-2">Dashboard</span>
        </Link>

        <Link
          href="/subscriptions"
          className="pt-2 pb-2 text-sm font-semibold flex"
        >
          <MdOutlineSubscriptions size={18} />
          <span className="pl-2">Subscribtions</span>
        </Link>
      </div>

      <div className="side-nav-help flex flex-col pt-4 pb-4">
        <h6 className="text-xs pb-3 text-neutral-500">Help</h6>
        <Link href="/settings" className="pt-2 pb-2 text-sm font-semibold flex">
          <FiSettings size={18} />
          <span className="pl-2">Settings</span>
        </Link>
      </div>
    </section>
  );
};
