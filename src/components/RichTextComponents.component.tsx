import Image from "next/image";
import Link from "next/link";
import urlFor from "lib/urlFor";

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative m-10 mx-auto h-96 w-full">
          <Image
            className="object-contain"
            src={urlFor(value as Image).url()}
            alt="Blog Post Image"
            fill
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-desc ml-10 space-y-5 py-5">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({ children }: any) => (
      <h1 className="py-10 text-5xl font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="py-10 text-4xl font-bold">{children as string}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="py-10 text-3xl font-bold">{children as string}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="py-10 text-2xl font-bold">{children as string}</h4>
    ),
    normal: ({ children }: any) => (
      <p className="py-10 text-rP font-normal">{children as string}</p>
    ),

    blockqoute: ({ children }: any) => (
      <blockquote className="my-5 border-l-4 border-l-green py-5 pl-5">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-offBlack hover:decoration-green"
        >
          {children as string}
        </Link>
      );
    },
  },
};
