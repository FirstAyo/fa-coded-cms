import Button from "@/app/components/Button";
import SideBar from "@/app/components/SideBar";
import { client } from "@/sanity/lib/client";
// import { projectPost } from "@/sanity/lib/interface";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "next-sanity";
// import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import React from "react";
import { VT323 } from "next/font/google";
import gitHubIcon from "../../../../public/github.png";
import emailIcon from "../../../../public/email.png";
import linkedInIcon from "../../../../public/linkedin.png";
import Link from "next/link";
// import { type } from "express/lib/response";

// interface PageProps {
//   params: {
//     slug: string;
//   };
// }

async function getData(slug) {
  const query = `*[_type == 'project' && slug.current == '${slug}']{
    "currentSlug": slug.current,
      title,
      content,
      exerpt,
      featuredImage,
      publishedAt,
      _id,
      "gitSlug": gitSlug.current,
      "liveSlug": liveSlug.current,
      category[] -> {
        _id,
        slug,
        name
      },
      author[] ->{
        bioImage,
        name,
        shortBio,
        "twitterSlug": twitterSlug.current,
        "linkedInSlug": linkedInSlug.current,
        "fbSlug": fbSlug.current
      }
  }[0]`;

  const data = await client.fetch(query);
  return data;
}

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const post = await getData(params.slug);
  const featuredImageRef = post.featuredImage?.asset?._ref;

  return {
    title: {
      absolute: post.title,
    },
    description: post.exerpt,
    openGraph: {
      title: post.title,
      description: post.exerpt,
      type: "article",
      locale: "en_US",
      url: `https://www.facoded.com/projects/${params.slug}`,
      siteName: "Facoded",
      images: featuredImageRef
        ? [
            {
              url: urlFor(featuredImageRef),
              width: 1200,
              height: 630,
            },
          ]
        : [], // Handle cases where there's no featured image
    },
  };
}

async function BlogArticle({ params }) {
  const data = await getData(params.slug);
  const socialIcons = [
    {
      authorSocialIcon: emailIcon,
      imageUrl: "mailto:firstayomike@gmail.com?",
    },
    {
      authorSocialIcon: linkedInIcon,
      imageUrl: "https://www.linkedin.com/in/firstayo",
    },
    {
      authorSocialIcon: gitHubIcon,
      imageUrl: "https://github.com/FirstAyo",
    },
  ];
  return (
    <>
      <section className="flex flex-col lg:flex-row my-5">
        <article className="lg:w-[60%] mx-2 mb-5 py-3 lg:mb-0 lg:py-0 shadow-2xl">
          <div className="">
            {data.category && data.category.length > 0 && (
              <p className="bg-[#3d5168] text-white font-semibold px-4 py-2 ">
                {data.category[0].name}
              </p>
            )}
            <h2 className="text-lg md:text-2xl px-3 text-gray-700 font-bold py-5 border-b border-[#3d5168] ">
              {data.title}
            </h2>

            {/* author bio data here */}
            <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#3d5168] px-2 py-2 mb-5">
              <div className="flex-1 flex items-center gap-4">
                <div className="flex-1 flex items-center gap-4">
                  <Image
                    src={urlFor(data.author[0].bioImage).url()}
                    alt="profile pix"
                    width={1000}
                    height={1000}
                    className="w-12 h-12 rounded-full"
                  />
                  <h4 className="text-sm md:text-[16px] text-gray-500 font-semibold">
                    {data.author[0].name}
                  </h4>
                </div>
                <p
                  className={`${dateFont.className} text-lg md:text-[16px] text-gray-500 font-bold`}
                >
                  {`Published: ${new Date(data.publishedAt).toDateString()}`}
                </p>
              </div>

              {/* social media icons for editor/author */}
              <div className="flex-1 flex items-center justify-center md:justify-end gap-5">
                {socialIcons.map((socialIcon, index) => (
                  <Link
                    key={index}
                    href={socialIcon.imageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={socialIcon.authorSocialIcon}
                      width={24}
                      height={24}
                      alt="socialIcon"
                      className="w-[24px] h-[24px] "
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="px-1">
            <Image
              src={urlFor(data.featuredImage).url()}
              width={1500}
              height={1500}
              priority
              alt={data.title}
              className="w-full object-cover h-[300px] border rounded-md"
            />
          </div>

          {/* this div holds the text/post content from sanity.io */}
          <div className="px-3">
            <div className={` prose prose-blue prose-lg max-w-none px-2 py-10`}>
              <PortableText
                value={data.content}
                components={myPortableTextComponents}
              />
            </div>

            {/* div that holds the two bottom buttons */}
            <div className="flex justify-center items-center gap-3 my-5">
              <Link
                href={data.gitSlug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="View on GitHub" />
              </Link>
              <Link
                href={data.liveSlug}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button text="View Live Website" />
              </Link>
            </div>

            {/* <div className="flex justify-between align-bottom w-[90%] mx-auto mb-10">
              <button className="text-xl font-bold bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 bg-clip-text text-transparent">
                Prev
              </button>
              <button className="text-xl font-bold bg-gradient-to-r from-purple-700 via-orange-700 to-red-800 bg-clip-text text-transparent">
                Next
              </button>
            </div> */}
          </div>
        </article>

        <SideBar />
      </section>
    </>
  );
}

export default BlogArticle;

const myPortableTextComponents = {
  types: {
    image: ({ value }) => (
      <Image
        src={urlFor(value).url()}
        width={1500}
        height={1500}
        alt="image"
        className="w-full object-cover h-[250px] md:h-96 shadow-xl"
      />
    ),
  },
};
