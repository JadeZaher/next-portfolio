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
        <div className=" mt-2 flex w-fit items-center rounded-md border-x-[2px] border-y-[1px]  border-yellow bg-offWhite p-2 px-4 pb-2 text-rH2 font-medium text-purple drop-shadow-xl">
          {text}
          <Image
            alt="Go To Experience"
            src={BackIcon}
            className=" ml-8 max-w-[40px] tablet:max-w-[80px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;
