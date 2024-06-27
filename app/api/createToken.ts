import { cache } from "react";
import { Client } from "@notionhq/client";

export const createToken = cache(async () => {
    const token = new Client({
        auth: process.env.NOTION_KEY,
    });

    return token;
});
