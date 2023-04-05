import { NextPage } from "next";
import Head from "next/head";
import CTAButton from "~/components/CTAButton.component";
import PostPreview from "~/components/PostPreview.component";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";
import urlFor from "lib/urlFor";

const Blog: NextPage<Props> = ({ posts }) => {
  console.log(posts);

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
        <h1 className=" fixed left-[10%] top-[100px] z-20 text-rH2 font-black">
          Posts
        </h1>
        <div className=" fixed left-[10%] top-[150px] flex w-[80%] flex-row items-center justify-center overflow-x-scroll rounded-md bg-offWhite scrollbar-thin scrollbar-track-transparent scrollbar-thumb-green scrollbar-thumb-rounded-full tablet:top-[200px]   tablet:flex-col">
          <div className="  flex  w-full flex-row ">
            {posts?.map((post: Posts) => (
              <PostPreview
                key={post._id}
                title={post.title}
                previewText={post.description}
                date="4/3/2023"
                previewImage={urlFor(post?.mainImage).url()}
                slug={post.slug.current}
              />
            ))}
          </div>
        </div>
        <div className="fixed bottom-[10%] left-[10%] max-w-[50vw]">
          <CTAButton text="download my resume" link="" />
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
