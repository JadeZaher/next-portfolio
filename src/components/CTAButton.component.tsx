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
        <div className=" mt-2 flex w-fit items-end border-b-[5px] border-yellow pb-2 text-rH2 font-medium text-purple">
          {text}
          <Image
            alt="Go To Experience"
            src={BackIcon}
            className=" tablet:max-w-[80px] ml-8 mt-4 max-w-[40px]"
          />
        </div>
      </Link>
    </div>
  );
};

export default CTAButton;
