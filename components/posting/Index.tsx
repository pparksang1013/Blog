import useNotionStore from "@/store/notionStore";
import notion from "@/api/notion";
import { NotionDatabaseType } from "@/type/notionDatabaseType";

// COMP
import { PostingBox } from "./PostingBox";
import { PostingContents } from "./PostingContents";

export const Posting = async ({ params }: { params: { slug: string } }) => {
    await notion("databases-query");

    const findNotionId = useNotionStore.getState().database.find((ele: NotionDatabaseType) => {
        return params.slug === ele.id;
    });

    await notion("retrieve-block-children", findNotionId?.pageId);

    return (
        <PostingBox>
            <PostingContents />
        </PostingBox>
    );
};
