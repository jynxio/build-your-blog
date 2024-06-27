import type { Metadata } from "next";

import "./index.css";
import Link from "next/link";
import { APP_URL } from "@/constant";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
            </head>

            <body>
                <header style={{ display: "flex", gap: "1rem", fontSize: "1.5rem" }}>
                    <Link href="/">Post</Link>
                    <Link href="/rss">RSS</Link>
                </header>

                <main>{children}</main>
            </body>
        </html>
    );
}

const ogUrl = process.env.NODE_ENV === "production" ? new URL("opengraph-image.png", APP_URL) : "/opengraph-image.png";
const og = { images: { url: ogUrl, type: "image/png", width: 1200, height: 675 } };
const metadata: Metadata = { title: { default: "_", template: "%s | _" }, openGraph: og, twitter: og };

export { metadata };
export default RootLayout;
