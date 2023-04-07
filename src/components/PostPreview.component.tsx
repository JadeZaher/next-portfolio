import React from "react";
import Link from "next/link";

const PostPreview = ({
  title,
  previewText,
  date,
  previewImage,
  slug,
}: {
  title: string;
  previewText: string;
  date: string;
  previewImage: string;
  slug: string;
}) => {
  return (
    <Link href={`posts/${slug}`}>
      <div className="mr-3 flex h-[40vh] max-h-[40vh] rounded-[15px] p-2  tablet:m-5 ">
        <div
          style={{
            backgroundImage: `url(${previewImage})`,
            backgroundColor: "#FBF9F4",
          }}
          className={` w-[40vw] rounded-l-[15px] bg-cover bg-clip-border bg-center  bg-no-repeat shadow-md tablet:w-[20vw] `}
        ></div>
        <div className=" ml-[-15px] w-[40vw]  rounded-[15px] border-2  border-green bg-white p-2 shadow-md tablet:w-[20vw] tablet:p-4">
          <h2 className="text-rH2 font-semibold">{title}</h2>
          <p className="mb-2 text-[12px] opacity-60 ">{date}</p>
          <p className=" line-clamp-[7] text-rP tablet:line-clamp-[8]">
            {previewText}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PostPreview;
