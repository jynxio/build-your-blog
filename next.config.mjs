/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        outputFileTracingIncludes: {
            "/*": ["./post/**/*"],
        },
    },
};

export default nextConfig;
