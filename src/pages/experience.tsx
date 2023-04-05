import { type NextPage } from "next";
import Head from "next/head";
import CTAButton from "~/components/CTAButton.component";
import ProjectsSlider from "~/components/ProjectsSlider.component";

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
      <main className=" flex flex-col items-center justify-center  ">
        <div className=" relative flex w-screen flex-col items-center justify-center tablet:flex-row">
          <ProjectsSlider />
          <div className="max-w-[240px] tablet:ml-[10vw] tablet:max-w-[400px] ">
            <CTAButton
              text="Learn more
about my work"
              link="/blog"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Experience;
