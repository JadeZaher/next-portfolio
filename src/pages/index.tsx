import { type NextPage } from "next";
import Head from "next/head";
import LogoMe from "public/LogoMe.png";
import Image from "next/image";
import CTAButton from "~/components/CTAButton.component";
import Loading from "~/components/Loading.component";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const LogoAnimation = dynamic(
  () => import("~/components/LogoAnimation.component"),
  {
    ssr: false,
    loading: () => <Loading />,
  }
);

const Home: NextPage = () => {
  function downloadFileAtUrl(url: string) {
    url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", "");
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  }
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
      <main className=" flex flex-col items-center justify-center overflow-hidden  ">
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 15 }}
          transition={{ delay: 0.25 }}
          className=" relative flex w-screen flex-col items-center justify-center tablet:flex-row"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            exit={{ opacity: 0, x: 15 }}
            className="pointer-events-auto h-[calc(50vh-100px)] w-[80%] cursor-grab rounded-3xl bg-offBlack tablet:mr-[10%] tablet:w-[30%] "
          >
            <LogoAnimation />
          </motion.div>
          {/* <Image
            src={LogoMe}
            alt="Ahmed Zaher Profile"
            height={520}
            width={520}
            className=" mr-[10%] max-w-[50%] rounded-full drop-shadow-2xl  tablet:max-w-[30%] "
          /> */}
          <div className=" flex max-w-[100%] flex-col items-center justify-center text-center  tablet:mx-2 tablet:mt-0  tablet:max-w-[50%] tablet:items-start tablet:text-left ">
            <h1 className="   mb-[20px] mt-4 max-w-fit animate-glow  text-rH1 font-black text-offWhite drop-shadow-glow   mobile:mt-0 mobile:text-left">
              I&apos;m Ahmed Zaher
            </h1>
            <h2 className="mb-[20px] text-rH2 font-semibold italic text-green ">
              A Full Stack Developer <br /> Based In the Pacific Northwest.
              <br />
            </h2>
            <p className=" mb-[20px] max-w-[80vw] text-rP font-medium text-offWhite tablet:max-w-[40vw] ">
              With A deep passion for UX, and a drive for building applications
              that help drive the changes I believe we need in the world. <br />{" "}
              <br />
              Helping people become happier, smarter, and healthier.
              <br /> <br />
              Making society more equitable, just, and kind. <br />
            </p>
            <div
              onClick={() => {
                downloadFileAtUrl("/Resume.pdf");
              }}
              className=" mt-5 flex w-fit animate-glow cursor-pointer items-center rounded-md border-x-[2px] border-y-[1px] border-green  p-4 text-rH2  font-medium  text-green drop-shadow-glow duration-100 hover:bg-green hover:text-offWhite"
            >
              Download My Resume
            </div>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
