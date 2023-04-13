import { client } from "lib/sanity.client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import urlFor from "lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "~/components/RichTextComponents.component";
import { motion } from "framer-motion";

const Post = ({ post }: { post: Posts }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 15 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 15 }}
        transition={{ delay: 0.25 }}
        className=" relative mx-[5vw] grid w-[90vw] justify-center tablet:mx-[10vw] tablet:w-[50vw]   tablet:pt-2"
      >
        {/* header */}
        <section className="grid w-full items-center">
          <div
            style={{
              backgroundImage: `url(${urlFor(post.mainImage).url()})`,
              backgroundColor: "#FBF9F4",
            }}
            className={`h-[20vh] w-[80vw] rounded-[15px] bg-cover bg-clip-border bg-center bg-no-repeat shadow-md  drop-shadow-glow tablet:h-[40vh] tablet:w-[50vw]  `}
          />
          <h1 className="my-2 text-rH1 font-semibold italic text-offWhite drop-shadow-glow">
            {post.title}
          </h1>
          <p className=" m-1 my-2 text-[12px] text-offWhite opacity-70 tablet:text-[18px]">
            {new Date(post._createdAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </p>
          <div className="flex flex-wrap">
            {post.categories.map((category, i: number) => (
              <p
                key={i}
                className=" m-1  w-fit min-w-[100px] rounded-md bg-offWhite p-2 text-center text-[12px] font-semibold text-green  drop-shadow-glow tablet:text-[18px]"
              >
                {category.title}
              </p>
            ))}
          </div>
        </section>
        {/* content */}
        <section className=" mt-4 rounded-lg border-2 border-green p-4 drop-shadow-glow">
          <PortableText value={post.body} components={RichTextComponents} />
        </section>
      </motion.div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.post;

  const query = `
  *[_type=='post' && slug.current == $pageSlug ]{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)`;

  const post = (await client.fetch(query, { pageSlug })) as Array<Posts>;

  if (!post) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return { props: { post: post[0] } };
  }
};

export default Post;
