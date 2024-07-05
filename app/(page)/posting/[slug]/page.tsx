// API
import { getDatabase } from "@/app/api/getDatabase";
import { getBlockChildren } from "@/app/api/getBlockChildren";
// COMP
import { Box } from "@/app/components/(common)/Box";
import { Posting } from "@/app/components/(posting)/Posting";

export async function generateStaticParams() {
    const notionDatabase = await getDatabase();
    return notionDatabase.map((post) => ({ slug: post.id }));
}

export const revalidate = 3600;

async function page({ params }: { params: { slug: string } }) {
    const notionDatabase = await getDatabase();
    const findId = notionDatabase.find((ele) => {
        return params.slug === ele.id;
    });

    const resConetents = await getBlockChildren(findId?.pageId);

    return (
        <Box styleValue="postingBox">
            <Posting contents={resConetents} />
        </Box>
    );
}

export default page;
