import React from "react";
import ReactPlayer from "react-player";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import dynamic from "next/dynamic";
import Loading from "./Loading.component";

import SliderRight from "../../public/Slider-Right.png";
import SliderLeft from "../../public/Slider-Left.png";

const ProjectsSlider = () => {
  //for yt
  // const customRenderItem = (item: any, props: any) => (
  //   <item.type {...item.props} {...props} />
  // );

  // const getVideoThumb = (videoId: string) =>
  //   `https://img.youtube.com/vi/${videoId}/default.png`;

  // const getVideoId = (url: string) =>
  //   url.substr("https://www.youtube.com/embed/".length, url.length);

  // const customRenderThumb = (children: any) =>
  //   children.map((item: any) => {
  //     const videoId = getVideoId(item.props.url);
  //     return <img src={getVideoThumb(videoId)} />;
  //   });
  return (
    <div className=" w-[90vw] rounded-md border-[2px] border-green bg-offBlack drop-shadow-glow tablet:max-w-[40vw]">
      <Carousel
        showStatus={false}
        showThumbs={false}
        infiniteLoop
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className="absolute left-[3px] top-[calc(50%)] z-20 grid w-[35px] animate-glow cursor-pointer place-items-center rounded-md border-[2px] border-green bg-offBlack p-3 drop-shadow-glow  hover:scale-105 tablet:left-[2%] tablet:w-[50px]"
            >
              <Image
                alt="Go Left"
                src={SliderLeft.src}
                width={30}
                height={30}
                className="drop-shadow-glow"
              />
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              title={label}
              className=" absolute right-[3px] top-[calc(50%)] z-20 grid w-[35px] cursor-pointer place-items-center rounded-md border-[2px] border-green bg-offBlack p-3 drop-shadow-glow hover:scale-105 tablet:right-[2%]  tablet:w-[50px]"
            >
              <Image
                alt="Go Left"
                src={SliderRight.src}
                width={30}
                height={30}
                className="drop-shadow-glow"
              />
            </button>
          )
        }
      >
        <YoutubeSlide
          key={1}
          url="/projects/Steps.jpg"
          title="STEPS"
          job="Fullstack Developer"
          company="System Tech Inc"
          skills={["React.js", "Node.js", "Material UI", "Express.js"]}
          description="Project management suite for a low voltage contractor"
        />
        <YoutubeSlide
          key={2}
          url="/projects/PledgeLlama.jpg"
          title="PledgeLlama"
          job="Fullstack Developer"
          company="System Tech Inc"
          skills={["React.js", "Node.js", "UI Design", "Express.js"]}
          description="Crowdfunding Platform for Charities"
        />
        <YoutubeSlide
          key={3}
          url="/projects/ComeAlongSide.jpg"
          title="ComeAlongSide"
          job="Software and Marketing Assistant"
          company="The Pacific Clinic"
          skills={["C#", "Unity"]}
          description="A VR voice chat and mediation platform."
        />
        <YoutubeSlide
          key={4}
          url="/projects/MyCoach.jpg"
          title="MyCoach"
          job="Software and Marketing Assistant"
          company="The Pacific Clinic"
          skills={["Node.js", "AWS", "ASK", "MVC"]}
          description="An Alexa powered wholistic health coaching service"
        />
        <YoutubeSlide
          key={5}
          url="/projects/ThePCAssesment.jpg"
          title="The PC Assessment"
          job="Software and Marketing Assistant"
          company="The Pacific Clinic"
          skills={["Javascript", "Node.js", "WIX", "Velo API"]}
          description="A sign up form connected to the WIX CRM"
        />
        <YoutubeSlide
          key={6}
          url="/projects/TresRiosCommunityLandtrust.jpg"
          title="Tres Rios CLT Website"
          job="Co-Founder"
          company="Tres Rios CLT"
          skills={["Wordpress", "PHP", "Tailwind CSS"]}
          description="Wordpress website"
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
  key: number;
  url: string;
  isSelected?: boolean;
  title: string;
  job: string;
  company: string;
  skills: string[];
  description: string;
}) => (
  <div>
    <div className="m-[5%]">
      <div className="flex flex-col items-center justify-center tablet:items-start">
        <h1 className="flex text-rH2 font-black text-white">{title}</h1>
        <div className="my-2 flex">
          {skills.map((skill, i) => (
            <p
              key={i}
              className="mx-1 rounded-md bg-green p-1 px-2 text-[12px] font-semibold  text-white tablet:text-rP "
            >
              {skill}
            </p>
          ))}
        </div>
      </div>
      <div className="  my-2 flex flex-col items-center justify-center tablet:items-start">
        <h2 className="text-rP font-semibold text-pink">{job}</h2>
        <h2 className="text-[12px] font-semibold text-pink opacity-60">
          @{company}
        </h2>
      </div>
      <p className=" my-2 text-[12px] text-white tablet:text-left tablet:text-rP ">
        {description}
      </p>
    </div>
    <Image
      blurDataURL={url}
      placeholder="blur"
      src={url}
      width={500}
      height={500}
      className="h-[30vh] w-screen rounded-md object-cover tablet:h-[45vh] tablet:w-full"
      alt={`${title}' project image'`}
    />

    {/* for after I get the videos edited up */}
    {/* <ReactPlayer
      width="100%"
      height="45vh"
      className=" h-[30vh] w-screen tablet:w-full"
      url={url}
      playing={isSelected}
    /> */}
  </div>
);

export default dynamic(() => Promise.resolve(ProjectsSlider), { ssr: false });
