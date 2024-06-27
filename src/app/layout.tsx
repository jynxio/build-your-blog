import "./index.css";
import Link from "next/link";

function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css" />
            </head>

            <body>
                <header style={{ fontSize: "1.5rem" }}>
                    <Link href="/">Post</Link>
                </header>

                <main>{children}</main>
            </body>
        </html>
    );
}

export default RootLayout;
