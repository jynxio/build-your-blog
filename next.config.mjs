/** @type {import('next').NextConfig} */
const GITHUB_REPO_NAME = "build-an-interactive-blog-with-mdx";
const nextConfig = {
    output: "export",
    reactStrictMode: true,
    basePath: process.env.NODE_ENV === "production" ? `/${GITHUB_REPO_NAME}` : undefined,
    experimental: {
        outputFileTracingIncludes: {
            "/*": ["./post/**/*"],
        },
    },
};

export default nextConfig;
