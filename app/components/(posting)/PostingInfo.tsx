// COMP
import { Keyword } from "../(common)/Keyword";
import { Tag } from "../(common)/Tag";
// TYPE
import { TagInterface } from "@/app/types/tag";
// STYLE
import { infoStyle } from "@/app/style/(posting)/info.css";

export const PostingInfo = ({ title, keyword, tags }: { title: string; keyword: string; tags: TagInterface[] }) => {
    return (
        <aside className={infoStyle.aside}>
            <Keyword keyword={keyword} />
            <h1 className={infoStyle.title}>{title}</h1>
            <Tag tags={tags} />
        </aside>
    );
};
