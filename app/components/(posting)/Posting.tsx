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
import { CallOut } from "./CallOut";
import { Code } from "./Code";
// STYLE
import { postingContentStyle } from "@/app/style/(posting)/posting_contents.css";

export const Posting = ({ contents }: { contents: ListBlockChildrenResponse }) => {
    const processingContents = groupedList(contents);

    const parsing = processingContents.map((ele: any) => {
        switch (ele.type) {
            case "paragraph":
                return <Paragraph paragraph={ele.paragraph} />;
            case "heading_1":
                return <H1 h1={ele.heading_1} />;
            case "heading_2":
                return <H2 h2={ele.heading_2} />;
            case "heading_3":
                return <H3 h3={ele.heading_3} />;
            case "bulleted_list_item":
            case "numbered_list_item": {
                return <List list={ele} type={ele.type} />;
            }
            case "image":
                return <NotionImage image={ele.image} />;
            case "callout":
                return <CallOut callout={ele.callout} />;
            case "code":
                return <Code code={ele.code} />;
            default:
                null;
        }
    });

    return <main className={postingContentStyle.main}>{parsing}</main>;
};
