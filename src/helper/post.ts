import path from "node:path";
import fs from "node:fs/promises";
import matter from "gray-matter";

type Post = {
    slug: string;
    date: string;
    hero: string;
    title: string;
    abstract: string;
    content: string;
};
type Item = Omit<Post, "content">;
type List = Item[];

async function reqList(): Promise<List> {
    const dir = await readDir("/post");
    const filteredDir = dir.filter((item) => item.isDirectory());
    const promises = filteredDir.map(async (item) => {
        const slug = item.name;
        const mdPath = path.join("/post", slug, "index.md");
        const rawMdContent = await readFile(mdPath);
        const { data: metadata } = matter(rawMdContent);
        const listItem: Item = {
            slug,
            hero: metadata.hero,
            date: metadata.date,
            title: metadata.title,
            abstract: metadata.abstract,
        };

        return listItem;
    });

    return await Promise.all(promises);
}

async function reqPost(url: string): Promise<Post> {
    const raw = await readFile(url);
    const { data: metadata, content } = matter(raw);
    const post: Post = {
        content,
        slug: "",
        hero: metadata.hero,
        date: metadata.date,
        title: metadata.title,
        abstract: metadata.abstract,
    };

    return post;
}

function readDir(targetPath: string) {
    return fs.readdir(path.join(process.cwd(), targetPath), { withFileTypes: true });
}

function readFile(targetPath: string) {
    return fs.readFile(path.join(process.cwd(), targetPath), "utf8");
}

export { reqPost, reqList };
