import path from "node:path";
import CodeSnippet from "@/component/code-snippet";
import MousePosition from "$/post/build-interative-blog/component/mouse-position";
import { reqPost } from "@/helper/post";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = { params: { slug: string } };

async function Page({ params }: Props) {
    const post = await reqPost(path.join("post", params.slug, "index.md"));
    const components = { pre: CodeSnippet, MousePosition };

    return <MDXRemote source={post.content} components={components} />;
}

export default Page;
