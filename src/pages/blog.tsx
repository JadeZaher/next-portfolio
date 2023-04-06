import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import PostPreview from "~/components/PostPreview.component";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import urlFor from "lib/urlFor";

import Download from "public/Download.png";

const Blog: NextPage<Props> = ({ posts }) => {
  console.log(posts);

  function downloadFileAtUrl(url: string) {
    const fileName = url.split("/").pop();
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
      <main className=" flex flex-col items-center justify-center  ">
        <h1 className=" fixed left-[10%] top-[100px]  text-rH2 font-black">
          Posts
        </h1>
        <div className=" fixed left-[10%] top-[150px] mt-2 flex w-[80%] flex-row items-center justify-center overflow-x-scroll rounded-lg bg-offWhite bg-opacity-40 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green scrollbar-thumb-rounded-full tablet:top-[200px]   tablet:flex-col">
          <div className="  flex  w-full flex-row ">
            {posts?.map((post: Posts) => (
              <PostPreview
                key={post._id}
                title={post.title}
                previewText={post.description}
                date={new Date(post._createdAt).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
                previewImage={urlFor(post?.mainImage).url()}
                slug={post.slug.current}
              />
            ))}
          </div>
        </div>
        <div className="fixed bottom-[15%] left-[10%] max-w-[50vw]">
          <div
            onClick={() => {
              downloadFileAtUrl("/Resume.pdf");
            }}
            className="  flex w-fit items-center rounded-md border-x-[2px] border-y-[1px]  border-yellow  bg-offWhite p-4 text-rH2 font-medium text-purple drop-shadow-xl"
          >
            Download Resume
            <Image
              alt="Go To Experience"
              src={Download}
              className=" ml-8 max-w-[35px] tablet:max-w-[70px]"
            />
          </div>
        </div>
      </main>
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
  const posts = await client.fetch(query);

  return { posts };
};

export default Blog;
