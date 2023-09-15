import { Divider } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FcTreeStructure } from "react-icons/fc";
import { navLink } from "../navigation.helper";

export const Desktop = () => {
  const pathname = usePathname();
  return (
    <section className="side-nav w-34 h-screen border-r-[1px] border-gray-200 sticky top-0">
      <div className="side-nav-logo h-10 flex justify-evenly items-center">
        <FcTreeStructure size={23} />
      </div>
      <div className="side-nav-menu flex flex-col p-4">
        <h6 className="text-xs pb-3 text-neutral-500">Menu</h6>
        {navLink.map(({ name, link, icon }) => {
          return (
            <div key={name}>
              <Divider />
              <Link
                className={` ${
                  pathname === link ? "bg-blue-100" : "bg-white"
                } p-4 rounded-lg text-xs font-light flex flex-col hover:bg-blue-50 transition-all`}
                href={link}
              >
                {icon} <span className="mt-2 text-center">{name}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};
