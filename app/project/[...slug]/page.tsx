import type { Author, Blog, Project } from "contentlayer/generated";
import { allAuthors, allProjects } from "contentlayer/generated";
import "@/styles/prism.css";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDX_COMPONENTS } from "@/components/mdx/mdx-components";
import { MDXLayoutRenderer } from "@/components/mdx/layout-renderer";
import { SITE_METADATA } from "@/config/site-metadata";
import { PostBanner } from "@/layouts/post-banner";
import { PostLayout } from "@/layouts/post-layout";
import { PostSimple } from "@/layouts/post-simple";
import { allCoreContent, coreContent } from "@/lib/contentlayer";
import { sortPosts } from "@/lib/mdx";

const DEFAULT_LAYOUT = "PostLayout";
const LAYOUTS = {
  PostSimple,
  PostLayout,
  PostBanner,
};

export async function generateMetadata(props: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata | undefined> {
  const params = await props.params;
  const slug = decodeURI(params.slug.join("/"));
  const post = allProjects.find((p) => p.slug === slug);
  const authorList = post?.authors || ["default"];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Author);
  });
  if (!post) {
    return;
  }

  const publishedAt = new Date(post.date).toISOString();
  const modifiedAt = new Date(post.lastmod || post.date).toISOString();
  const authors = authorDetails.map((author) => author.name);
  const imageList =
    post.images && post.images.length > 0
      ? typeof post.images === "string"
        ? [post.images]
        : post.images
      : [SITE_METADATA.socialBanner];
  const ogImages = imageList.map((img) => {
    return {
      url: img.includes("http") ? img : SITE_METADATA.siteUrl + img,
    };
  });

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      siteName: SITE_METADATA.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      url: "./",
      images: ogImages,
      authors: authors.length > 0 ? authors : [SITE_METADATA.author],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: imageList,
    },
  };
}

export const generateStaticParams = async () => {
  return allProjects.map((p) => ({
    slug: p.slug.split("/").map((name) => decodeURI(name)),
  }));
};

export default async function Page(props: {
  params: Promise<{ slug: string[] }>;
}) {
  const params = await props.params;

  const slug = decodeURI(params.slug.join("/"));
  console.log(slug)
  // Filter out drafts in production
  const sortedCoreContents = allCoreContent(sortPosts(allProjects));
  const postIndex = sortedCoreContents.findIndex((p) => p.slug === slug);
  if (postIndex === -1) {
    return notFound();
  }

  const prev = sortedCoreContents[postIndex + 1];
  const next = sortedCoreContents[postIndex - 1];
  const post = allProjects.find((p) => p.slug === slug) as Project;
  const authorList = post?.authors || ["default"];
  const authorDetails = authorList.map((author) => {
    const authorResults = allAuthors.find((p) => p.slug === author);
    return coreContent(authorResults as Author);
  });
  const mainContent = coreContent(post);
  const jsonLd = post.structuredData;
  jsonLd["author"] = authorDetails.map((author) => {
    return {
      "@type": "Person",
      name: author.name,
    };
  });
  const Layout = LAYOUTS[post.layout || DEFAULT_LAYOUT];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Layout
        content={mainContent}
        authorDetails={authorDetails}
        next={next}
        prev={prev}
      >
        <MDXLayoutRenderer
          code={post.body.code}
          components={MDX_COMPONENTS}
          toc={post.toc}
        />
      </Layout>
    </>
  );
}
