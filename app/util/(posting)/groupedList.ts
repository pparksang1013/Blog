// TYPE
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const groupedList = (contents: ListBlockChildrenResponse) => {
    return contents.results.reduce((acc: any, ele: any) => {
        if (ele.type === "bulleted_list_item" || ele.type === "numbered_list_item") {
            const listGroup = acc[acc.length - 1];

            if (listGroup && listGroup.type === ele.type) {
                listGroup.lists.push({
                    text: ele[ele.type].rich_text[0].plain_text,
                    has_children: ele.has_children,
                    id: ele.id,
                    [ele.type]: ele[ele.type],
                });
            } else {
                acc.push({
                    type: ele.type,
                    lists: [
                        {
                            text: ele[ele.type].rich_text[0].plain_text,
                            has_children: ele.has_children,
                            id: ele.id,
                            [ele.type]: ele[ele.type],
                        },
                    ],
                });
            }
        } else {
            acc.push(ele);
        }

        return acc;
    }, []);
};
