import { allPosts, Post } from "@/.contentlayer/generated";

export function generateStaticParams() {
    const staticPath = allPosts.map((post: Post) => {
        return post._raw.flattenedPath;
    });

    return staticPath;
}

function BlogPosting({ params }: { params: { slug: string } }) {
    const findPath: any = allPosts.find((post: Post) => {
        const replacePath = post._raw.sourceFileName.replace(".mdx", "");
        return replacePath === params.slug;
    });

    return (
        <div>
            <h1>{findPath.title}</h1>
        </div>
    );
}

export default BlogPosting;
