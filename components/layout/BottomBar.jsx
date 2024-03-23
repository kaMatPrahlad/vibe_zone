"use client";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex bottom-0 z-0 w-full bg-dark-1 px-6 py-3 items-center justify-between md:hidden">
      {sidebarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <Link
            key={link.label}
            href={link.route}
            className={`flex gap-4 items-center rounded-lg py-2 px-4 ${
              isActive && "bg-purple-1"
            }`}
          >
            {link.icon}
            <p className="text-light-1 text-small-medium max-sm:hidden">
              {link.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomBar;
