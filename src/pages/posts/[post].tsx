import { client } from "lib/sanity.client";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import urlFor from "lib/urlFor";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "~/components/RichTextComponents.component";

const Post = ({
  post,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log(post);
  return (
    <>
      <div className=" relative mx-[5vw] grid w-[90vw] justify-center tablet:mx-[10vw] tablet:w-[50vw]   tablet:pt-2">
        {/* header */}
        <section className="grid w-full items-center">
          <div
            style={{
              backgroundImage: `url(${urlFor(post.mainImage).url()})`,
              backgroundColor: "#FBF9F4",
            }}
            className={`h-[20vh] w-[80vw] rounded-[15px] bg-cover bg-clip-border bg-center bg-no-repeat shadow-md  tablet:h-[40vh] tablet:w-[50vw]  `}
          />
          <h1 className="my-2 text-rH1 font-semibold">{post.title}</h1>
          <p className="m-1 text-[12px] text-offBlack opacity-70 tablet:text-[18px]">
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
                className=" m-1 w-fit min-w-[100px] rounded-md bg-offBlack p-2 text-center text-[12px] font-semibold  text-green tablet:text-[18px]"
              >
                {category.title}
              </p>
            ))}
          </div>
        </section>
        {/* content */}
        <section className=" mt-4 rounded-lg bg-offWhite bg-opacity-40 p-4">
          <PortableText value={post.body} components={RichTextComponents} />
        </section>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{ post: Posts }> = async (
  pageContext
) => {
  const pageSlug = pageContext.query.post;

  const query = `
  *[_type=='post' && slug.current == $pageSlug ]{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)`;

  const post = await client.fetch(query, { pageSlug });

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