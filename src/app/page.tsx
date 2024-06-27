import CodeSnippet from "@/component/code-snippet";
import { reqPost } from "@/helper/post";
import { MDXRemote } from "next-mdx-remote/rsc";

async function Page() {
    const post = await reqPost("/post/build-interative-blog/index.md");
    const components = { pre: CodeSnippet };

    return <MDXRemote source={post.content} components={components} />;
}

export default Page;
