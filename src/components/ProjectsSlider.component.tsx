import React from "react";
import ReactPlayer from "react-player";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import dynamic from "next/dynamic";

const ProjectsSlider = () => {
  const customRenderItem = (item: any, props: any) => (
    <item.type {...item.props} {...props} />
  );

  const getVideoThumb = (videoId: string) =>
    `https://img.youtube.com/vi/${videoId}/default.jpg`;

  const getVideoId = (url: string) =>
    url.substr("https://www.youtube.com/embed/".length, url.length);

  const customRenderThumb = (children: any) =>
    children.map((item: any) => {
      const videoId = getVideoId(item.props.url);
      return <img src={getVideoThumb(videoId)} />;
    });
  return (
    <div className=" w-[100vw] rounded-md border-[2px] border-green bg-offWhite tablet:max-w-[40vw]">
      <Carousel
        showStatus={false}
        renderThumbs={customRenderThumb}
        renderItem={customRenderItem}
      >
        <YoutubeSlide
          key="youtube-1"
          url="https://www.youtube.com/embed/AVn-Yjr7kDc"
          title="Project 1"
          job="Job1"
          company="Company1"
          skills={["skill1", "skill2"]}
          description="a description"
        />
        <YoutubeSlide
          key="youtube-2"
          url="https://www.youtube.com/embed/mOdmi9SVeWY"
          title="Project 13"
          job="Job12"
          company="Company12"
          skills={["skill11", "skill22"]}
          description="a description 2 "
        />
      </Carousel>
    </div>
  );
};

const YoutubeSlide = ({
  url,
  isSelected,
  title,
  job,
  company,
  skills,
  description,
}: {
  url: string;
  isSelected?: boolean;
  title: string;
  job: string;
  company: string;
  skills: string[];
  description: string;
}) => (
  <div className="mb-[10%]">
    <div className="m-[5%]">
      <div className="flex flex-col items-center justify-center tablet:items-start">
        <h1 className="flex text-rH2 font-black">{title}</h1>
        <div className="my-2 flex">
          {skills.map((skill) => (
            <p className="mx-1 rounded-md bg-green p-1 px-2 text-rP font-semibold text-offWhite ">
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="  my-2 flex items-center justify-center tablet:justify-start">
        <h2 className="text-rP font-semibold text-pink">
          {job} - {company}
        </h2>
      </div>
      <p className=" my-2  text-rP tablet:text-left ">{description}</p>
    </div>

    <ReactPlayer
      width="100%"
      height="45vh"
      className=" h-[30vh] w-screen tablet:w-full"
      url={url}
      playing={isSelected}
    />
  </div>
);

export default dynamic(() => Promise.resolve(ProjectsSlider), { ssr: false });
