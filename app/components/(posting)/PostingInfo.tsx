// COMP
import { Keyword } from "../(common)/Keyword";
import { Tag } from "../(common)/Tag";
// TYPE
import { TagInterface } from "@/app/types/tag";
// STYLE
import { infoStyle } from "@/app/style/(posting)/info.css";

export const PostingInfo = ({ title, tags }: { title: string; tags: TagInterface[] }) => {
    return (
        <div className={infoStyle.wrapper}>
            <h1 className={infoStyle.title}>{title}</h1>
            <Tag tags={tags} />
        </div>
    );
};
