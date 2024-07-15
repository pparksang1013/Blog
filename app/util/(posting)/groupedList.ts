// TYPE
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";

export const groupedList = (contents: ListBlockChildrenResponse) => {
    return contents.results.reduce((acc: any, ele: any) => {
        if (ele.type === "bulleted_list_item" || ele.type === "numbered_list_item") {
            const grouped = acc[acc.length - 1];

            if (grouped && grouped.type === ele.type) {
                grouped.grouped_list.push({
                    id: ele.id,
                    has_children: ele.has_children,
                    bulleted_list_item: ele[ele.type].rich_text,
                });
            } else {
                acc.push({
                    type: ele.type,
                    grouped_list: [
                        {
                            id: ele.id,
                            has_children: ele.has_children,
                            bulleted_list_item: ele[ele.type].rich_text,
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
