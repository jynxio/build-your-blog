import path from "node:path";
import fs from "fs-extra";

/**
 * Copy the images from the `post` folder to the `public` folder.
 */
const POST_DIR_PATH = "/post";
const IMAGE_HOSTING_DIR_PATH = "/public/image-hosting";

const imageHostingDirPath = path.join(process.cwd(), IMAGE_HOSTING_DIR_PATH);
await fs.emptyDir(imageHostingDirPath);

const postDirPath = path.join(process.cwd(), POST_DIR_PATH);
const postDir = await fs.readdir(postDirPath, { withFileTypes: true });

for (const post of postDir) {
    if (!post.isDirectory()) continue;

    const originalImgDirPath = path.join(process.cwd(), path.join(POST_DIR_PATH, post.name, "img"));

    if (!fs.existsSync(originalImgDirPath)) continue;

    const targetImgDirPath = path.join(process.cwd(), path.join(IMAGE_HOSTING_DIR_PATH, post.name));
    await fs.emptyDir(targetImgDirPath);

    fs.copy(originalImgDirPath, targetImgDirPath);
}
