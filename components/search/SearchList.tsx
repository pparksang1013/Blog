import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";

// COMPONENT
import Tag from "../Tag";

// LIB
import replaceUtil from "@/lib/replaceUtil";

// TYPE
import { IModal, ISearch } from "@/type/search_type";

function SearchList({ search, setModal }: ISearch & IModal) {
    const results = !search
        ? []
        : allPosts.filter((post: Post) => {
              return post.title.includes(search);
          });

    const resultList = results.map((ele) => {
        const replacePath = replaceUtil(ele._raw.sourceFileName);

        return (
            <li className="modal_item">
                <Tag tag={ele.tag} size={14} />
                <Link href={`posting/${replacePath}`} onClick={() => setModal(false)}>
                    {ele.title}
                </Link>
            </li>
        );
    });

    return <ul className="modal_list">{resultList}</ul>;
}

export default SearchList;
