import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavLink = ({ name, link }: { name: string; link: string }) => {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link
      href={link}
      className={`${
        currentRoute === link ? "text-purple drop-shadow-2xl" : "text-offBlack"
      }`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
