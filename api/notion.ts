import { Client } from "@notionhq/client";
import { QueryDatabaseResponse, ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
import { NotionDatabaseType } from "@/type/notionDatabaseType";
import useNotionStore from "@/store/notionStore";

export default async function notion(endpoint: string, id?: string) {
    const notion_auth = new Client({
        auth: process.env.NOTION_KEY,
    });

    switch (endpoint) {
        case "databases-query":
            const databaseRes: QueryDatabaseResponse = await notion_auth.databases.query({
                database_id: process.env.NOTION_DB!,
            });

            const databaseObject: NotionDatabaseType[] = databaseRes.results.map((ele: any) => {
                return {
                    title: ele.properties.Name.title[0].plain_text,
                    id: ele.properties.ID.unique_id.prefix + ele.properties.ID.unique_id.number,
                    pageId: ele.id,
                    keyword: ele.properties.Keyword.rich_text[0].plain_text,
                    date: ele.created_time,
                    tags: ele.properties.tag.multi_select,
                };
            });

            useNotionStore.setState({ database: databaseObject });

            break;

        case "retrieve-block-children":
            const blockRes: ListBlockChildrenResponse = await notion_auth.blocks.children.list({
                block_id: id!,
            });

            useNotionStore.setState({ block: blockRes });

            break;
    }

    return notion;
}
