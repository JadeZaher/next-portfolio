import { type NextPage } from "next";
import Head from "next/head";
import LogoMe from "public/LogoMe.png";
import Image from "next/image";
import CTAButton from "~/components/CTAButton.component";
import { motion } from "framer-motion";

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
      <main className=" flex flex-col items-center justify-center overflow-hidden  ">
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 15 }}
          transition={{ delay: 0.25 }}
          className=" relative flex w-screen flex-col items-center justify-center tablet:flex-row"
        >
          <Image
            src={LogoMe}
            alt="Ahmed Zaher Profile"
            height={520}
            width={520}
            className=" mr-[10%] max-w-[50%] rounded-full drop-shadow-2xl  tablet:max-w-[30%] "
          />
          <div className="mt-4 flex max-w-[100%] flex-col items-center justify-center text-center  tablet:mx-2 tablet:mt-0  tablet:max-w-[50%] tablet:items-start tablet:text-left ">
            <h1 className="    mb-[35px] mt-4 max-w-fit text-rH1 font-black text-offWhite  mobile:mt-0 mobile:text-left">
              I&apos;m Ahmed Zaher
            </h1>
            <h2 className="mb-[25px] text-rH2 font-semibold italic text-green">
              A Full Stack Developer <br /> Based In the Pacific Northwest.{" "}
              <br />
              <span className="text-rP font-thin text-offWhite opacity-30">
                Currently Located in Boise ID
              </span>
            </h2>
            <p className=" mb-[25px] max-w-[80vw] text-rP font-medium text-offWhite tablet:max-w-[40vw] ">
              With A deep passion for UX, and a drive for building applications
              that help drive the changes I believe we need in the world. <br />{" "}
              <br />
              Helping people become happier, smarter, and healthier.
              <br /> <br />
              Making society more equitable, just, and kind. <br />
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Home;
