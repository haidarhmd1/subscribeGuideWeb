import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLink } from "../navigation.helper";

export const Mobile = () => {
  const pathname = usePathname();
  return (
    <div className="h-14 w-11/12 flex justify-around fixed shadow-md shadow-gray-300 rounded-xl -bottom-5 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-white z-10">
      {navLink.map(({ link, icon, name }) => {
        return (
          <Link
            className={`flex flex-col p-2 my-2 rounded-lg ${
              pathname === link ? "bg-blue-100" : "bg-white"
            } hover:bg-blue-50 transition-all`}
            key={name}
            href={link}
          >
            {icon}
          </Link>
        );
      })}
    </div>
  );
};
