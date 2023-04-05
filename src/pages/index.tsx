import { type NextPage } from "next";
import Head from "next/head";
import LogoMe from "public/LogoMe.png";
import Image from "next/image";
import CTAButton from "~/components/CTAButton.component";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fullstack Developer for Hire - Ahmed Zaher</title>
        <meta
          name="description"
          content="My fullstack developer portfolio, with projects built in react, next.js, node.js, and sql. If you are looking to hire a fullstack developer for a project feel free to contact me."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col items-center justify-center  ">
        <div className=" relative flex w-screen flex-col items-center justify-center tablet:flex-row">
          <Image
            src={LogoMe}
            alt="Ahmed Zaher Profile"
            height={620}
            width={620}
            className=" mr-[10%] max-w-[50%] rounded-full  drop-shadow-thickMobile tablet:max-w-[100%]"
          />
          <div className="mx-2 mt-4 flex max-w-[80vw] flex-col  items-start justify-center mobile:items-center tablet:mt-0 tablet:max-w-full ">
            <h1 className="    mb-[45px] mt-4 max-w-fit rounded-[45px] bg-offBlack p-6 px-10 text-center text-rH1 font-black  text-offWhite mobile:mt-0 mobile:text-left">
              I'm Ahmed Zaher
            </h1>
            <div className=" ml-[5%] flex flex-col items-center justify-center text-center tablet:items-start tablet:text-left ">
              <h2 className="mb-[25px] text-rH2 font-bold text-pink">
                A Full Stack Developer <br /> Based In the Pacific Northwest.
              </h2>
              <p className=" mb-[25px] max-w-[80vw] text-rP font-medium tablet:max-w-[28vw]">
                With A deep passion for UX, and a drive for building
                applications that help drive the changes I believe we need in
                the world. <br /> <br />
                Helping people be wealthier, happier, smarter, and healthier.
                <br /> <br />
                Making society more equitable, just, and kind. <br />
              </p>
              <CTAButton text="Experience" link="/experience" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
