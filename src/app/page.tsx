import CodeSnippet from "@/component/code-snippet";
import MousePosition from "$/post/build-interative-blog/component/mouse-position";
import { reqPost } from "@/helper/post";
import { MDXRemote } from "next-mdx-remote/rsc";

async function Page() {
    const post = await reqPost("/post/build-interative-blog/index.md");
    const components = { pre: CodeSnippet, MousePosition };

    return <MDXRemote source={post.content} components={components} />;
}

export default Page;
