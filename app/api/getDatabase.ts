import { cache } from "react";
import { createToken } from "./createToken";

interface NotionDatabaseType {
    title: string;
    id: string;
    pageId: string;
    keyword: string;
    date: string;
    tags: { id: string; name: string; color: string }[];
}

export const getDatabase = cache(async () => {
    const token = await createToken();

    const res: NotionDatabaseType[] = await token.databases
        .query({
            database_id: process.env.NOTION_DB!,
            filter: {
                property: "Posting",
                checkbox: {
                    equals: true,
                },
            },
            sorts: [
                {
                    property: "Date",
                    direction: "descending",
                },
            ],
        })
        .then((database) => {
            return database.results.map((ele: any) => {
                return {
                    title: ele.properties.Name.title[0].plain_text,
                    id: ele.properties.ID.unique_id.prefix + ele.properties.ID.unique_id.number,
                    pageId: ele.id,
                    keyword: ele.properties.Keyword.rich_text[0].plain_text,
                    date: ele.last_edited_time,
                    tags: ele.properties.Tag.multi_select,
                };
            });
        })
        .catch(() => {
            console.log("No Response");
            return [];
        });

    return res;
});
