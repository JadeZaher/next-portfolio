import React from "react";
import Link from "next/link";
const Nav = () => {
  return (
    <div className=" fixed left-0 right-0 top-[0] z-10 ml-auto mr-auto flex h-[78px] w-[80%] items-center justify-evenly rounded-b-2xl bg-offBlack  text-rP font-semibold text-white">
      <Link href="/">Home</Link>
      <Link href="/experience">Experience</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
};

export default Nav;
