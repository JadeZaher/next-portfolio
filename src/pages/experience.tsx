import { type NextPage } from "next";
import Head from "next/head";
import CTAButton from "~/components/CTAButton.component";
import ProjectsSlider from "~/components/ProjectsSlider.component";
import { motion } from "framer-motion";
const Experience: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fullstack Developer for Hire - Ahmed Zaher</title>
        <meta
          name="description"
          content="This a fullstack developer's projects relevant to fullstack and web development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex flex-col items-center justify-center overflow-hidden ">
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 15 }}
          transition={{ delay: 0.25 }}
          className=" relative flex w-screen flex-col items-center justify-center tablet:flex-row"
        >
          <ProjectsSlider />
          <div className="max-w-[82vw]  tablet:ml-[10vw] tablet:max-w-[400px] ">
            <CTAButton
              text="Learn more
about my work"
              link="/blog"
            />
          </div>
        </motion.div>
      </main>
    </>
  );
};

export default Experience;
