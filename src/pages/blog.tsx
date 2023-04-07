import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PostPreview from "~/components/PostPreview.component";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import urlFor from "lib/urlFor";
import { motion } from "framer-motion";
import Download from "public/Download.png";

const Blog: NextPage<Props> = ({ posts }) => {
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
          content="This a fullstack developer's projects relevant to fullstack and web development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {posts && (
        <main className=" flex flex-col items-center justify-center  ">
          <div>
            <h1 className=" fixed left-[10%] top-[100px]  text-rH2 font-black">
              Posts
            </h1>
            <div className=" fixed left-[10%] top-[150px]  mt-2 flex min-h-[40vh]  w-[80%] flex-row items-center justify-center overflow-x-scroll rounded-lg bg-offWhite bg-opacity-40 drop-shadow-2xl scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green scrollbar-thumb-rounded-full tablet:top-[200px]   tablet:flex-col">
              <motion.div
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ delay: 0.25 }}
                className="  flex  min-h-[40vh] w-full min-w-[80%] flex-row"
              >
                {posts.map((post: Posts) => (
                  <PostPreview
                    key={post._id}
                    title={post.title}
                    previewText={post.description}
                    date={new Date(post._createdAt).toLocaleDateString(
                      "en-US",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                    previewImage={urlFor(post?.mainImage).url()}
                    slug={post.slug.current}
                  />
                ))}
              </motion.div>
            </div>
            <div className="fixed bottom-[15%] left-[10%] max-w-[50vw]">
              <div
                onClick={() => {
                  downloadFileAtUrl("/Resume.pdf");
                }}
                className="  flex w-fit cursor-pointer items-center rounded-md   border-x-[2px] border-y-[1px]  border-yellow  bg-offWhite p-4 text-rH2 font-medium text-purple drop-shadow-xl"
              >
                Download Resume
                <Image
                  alt="Go To Experience"
                  src={Download}
                  className=" ml-8 max-w-[35px] tablet:max-w-[70px]"
                />
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
};

export const query = groq`
*[_type=='post']{
  ...,
  author->,
  categories[]->,
} | order(_createdAt desc)

`;

interface Props {
  posts?: Posts[];
}

Blog.getInitialProps = async ({}) => {
  const posts: Posts[] = await client.fetch(query);

  return { posts };
};

export default Blog;
