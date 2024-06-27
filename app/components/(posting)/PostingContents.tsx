// TYPE
import { ListBlockChildrenResponse } from "@notionhq/client/build/src/api-endpoints";
// UTIL
import { groupedList } from "@/app/util/(posting)/groupedList";
// COMP
import { Paragraph } from "./Paragraph";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { List } from "./List";
import { NotionImage } from "./NotionImage";

export const PostingContents = ({ contents }: { contents: ListBlockChildrenResponse }) => {
    const processingContents = groupedList(contents);

    const parsing = processingContents.map((ele: any, i: number) => {
        switch (ele.type) {
            case "paragraph":
                return <Paragraph text={ele.paragraph} />;
            case "heading_1":
                return <H1 text={ele.heading_1} />;
            case "heading_2":
                return <H2 text={ele.heading_2} />;
            case "heading_3":
                return <H3 text={ele.heading_3} />;
            case "bulleted_list_item":
            case "numbered_list_item": {
                return <List text={ele} />;
            }
            case "image":
                return <NotionImage image={ele.image} />;
            default:
                null;
        }
    });

    return <div>{parsing}</div>;
};
