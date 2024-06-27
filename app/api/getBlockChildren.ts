import { cache } from "react";
import { createToken } from "./createToken";

export const getBlockChildren = cache(async (id?: string) => {
    const token = await createToken();

    const res = await token.blocks.children
        .list({
            block_id: id!,
        })
        .then(async (block) => {
            let { next_cursor, has_more } = block;

            while (has_more && next_cursor) {
                const nextRes = await token.blocks.children.list({
                    block_id: id!,
                    start_cursor: next_cursor,
                });

                block.results.push(...nextRes.results);

                has_more = nextRes.has_more;
                next_cursor = nextRes.next_cursor;
            }

            block.has_more = false;
            block.next_cursor = null;
            return block;
        });

    return res;
});
