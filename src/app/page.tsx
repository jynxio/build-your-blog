import Link from "next/link";
import { reqList } from "@/helper/post";

async function Page() {
    const list = await reqList();

    return (
        <ul>
            {list.map((item) => (
                <li key={item.slug}>
                    <h2>
                        <Link href={item.slug}>{item.title}</Link>
                    </h2>
                    <p>{item.abstract}</p>
                </li>
            ))}
        </ul>
    );
}

export default Page;
