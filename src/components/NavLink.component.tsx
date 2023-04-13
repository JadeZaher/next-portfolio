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
        currentRoute === link
          ? "animate-glow animate-glow text-green drop-shadow-glow"
          : "text-offWhite"
      } duration-200`}
    >
      {name}
    </Link>
  );
};

export default NavLink;
