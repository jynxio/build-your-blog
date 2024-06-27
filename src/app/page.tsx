import { reqPost } from "@/helper/post";

async function Page() {
    const post = await reqPost("/post/build-interative-blog/index.md");

    return <article>{post.content}</article>;
}

export default Page;
