import React from "react";
import Link from "next/link";
import NavLink from "~/components/NavLink.component";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  if (!router.pathname.startsWith(`/posts`))
    return (
      <div className=" fixed left-0 right-0 top-[0] z-10 ml-auto mr-auto flex h-[50px] w-[100%] items-center justify-evenly border-b-[2px]  border-green bg-offWhite text-rP font-semibold  shadow-lg duration-300">
        <NavLink name="Home" link="/" />
        <NavLink name="Experience" link="/experience" />
        <NavLink name="Blog" link="/blog" />
      </div>
    );
  else {
    return (
      <div className=" fixed bottom-0 left-0 right-0 z-10 flex  h-[30px] w-[100%] items-center border-t-[2px] border-green   bg-offWhite text-rP font-semibold  shadow-sm tablet:h-[50px]">
        <div className="pl-[5%]">
          <NavLink name="↞" link="/" />
        </div>
      </div>
    );
  }
};

export default Nav;
