import type { Metadata } from "next";

import path from "node:path";
import CodeSnippet from "@/component/code-snippet";
import MousePosition from "$/post/build-interative-blog/component/mouse-position";
import { reqPost, reqList } from "@/helper/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import { APP_URL } from "@/constant";

type Props = { params: { slug: string } };

async function Page({ params }: Props) {
    const post = await reqPost(path.join("post", params.slug, "index.md"));
    const components = { pre: CodeSnippet, MousePosition };

    return <MDXRemote source={post.content} components={components} />;
}

export async function generateStaticParams() {
    const posts = await reqList();

    return posts.map((post) => ({ slug: post.slug }));
}

async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { title, hero } = await reqPost(path.join("/post", params.slug, "index.md"));
    const ogRelativeUrl = path.join("image-hosting", params.slug, hero);
    const ogUrl = process.env.NODE_ENV === "production" ? new URL(ogRelativeUrl, APP_URL) : ogRelativeUrl;
    const og = { images: { url: ogUrl, type: "image/png", width: 1200, height: 675 } };

    return { title, openGraph: og, twitter: og };
}

export { generateMetadata };
export default Page;
