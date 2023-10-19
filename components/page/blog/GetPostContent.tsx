import Link from "next/link";

interface postingProps {
    tag: string;
    title: string;
    path: string;
    date: string;
    summary: string;
}

function GetPostContent(props: postingProps) {
    const { tag, title, path, date, summary } = props;

    const postingPath = path.replace(".mdx", "");

    return (
        <div>
            <div>
                <Link href={`blog/${postingPath}`}>
                    <h2>{title}</h2>
                </Link>
            </div>
        </div>
    );
}

export default GetPostContent;
