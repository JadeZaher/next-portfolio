import React from "react";
import Link from "next/link";
import Image from "next/image";
import BackIcon from "public/Back.png";

type ctaProps = {
  text: string;
  link: string;
};

const CTAButton = ({ text, link }: ctaProps) => {
  return (
    <div>
      <Link href={link}>
        <div className=" mt-2 flex w-fit items-center rounded-md border-x-[2px] border-y-[1px]  border-green  p-2 px-4 pb-2 text-rH2 font-medium text-green drop-shadow-xl duration-100 hover:bg-green hover:text-offWhite">
          {text}
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;
