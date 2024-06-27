import { reqPost } from "@/helper/post";
import { MDXRemote } from "next-mdx-remote/rsc";

async function Page() {
    const post = await reqPost("/post/build-interative-blog/index.md");

    return <MDXRemote source={post.content} />;
}

export default Page;
