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
import { postingStyle } from "@/app/style/(posting)/posting.css";

export const Posting = ({ contents }: { contents: ListBlockChildrenResponse }) => {
    const processingContents = groupedList(contents);

    const parsing = processingContents.map((ele: any, i: number) => {
        switch (ele.type) {
            case "paragraph":
                return <Paragraph paragraph={ele.paragraph} idx={i} />;
            case "heading_1":
                return <H1 h1={ele.heading_1} idx={i} />;
            case "heading_2":
                return <H2 h2={ele.heading_2} idx={i} />;
            case "heading_3":
                return <H3 h3={ele.heading_3} idx={i} />;
            case "bulleted_list_item":
            case "numbered_list_item": {
                return <List list={ele} type={ele.type} idx={i} />;
            }
            case "image":
                return <NotionImage image={ele.image} idx={i} />;
            case "callout":
                return <CallOut callout={ele.callout} idx={i} />;
            case "code":
                return <Code code={ele.code} idx={i} />;
            default:
                null;
        }
    });

    return <main className={postingStyle.main}>{parsing}</main>;
};
