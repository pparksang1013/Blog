import { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";

interface SearchProp {
    search: string | undefined;
    setModal: (value: boolean) => void;
}

function SearchList({ search, setModal }: SearchProp) {
    const results = !search
        ? []
        : allPosts.filter((post: Post) => {
              return post.title.includes(search);
          });

    const resultList = results.map((ele) => {
        const replacePath = ele._raw.sourceFileName.replace(".mdx", "");

        return (
            <li>
                <Link href={`posting/${replacePath}`} onClick={() => setModal(false)}>
                    {ele.title}
                </Link>
            </li>
        );
    });

    return <ul>{resultList}</ul>;
}

export default SearchList;
