import type { MDXComponents } from "mdx/types";
import React, { ReactElement } from "react";
import Link from "next/link";
import style from "../../../style/posting/mdx.module.css";
import "../../../style/posting/maincateprops.css";

const CustomMDX: MDXComponents = {
    MainCate: ({ children, tag }: { children: React.ReactNode; tag: string }) => {
        const contents = React.Children.toArray(children)
            .filter((child): child is ReactElement => React.isValidElement(child) && child.type === "h2")
            .map((ele, i) => {
                return <Link href={`#${ele.props.id}`}>{ele.props.children}</Link>;
            });

        return (
            <section className={tag} id={style.mdx}>
                <nav id={style.contents_box}>
                    <div id={style.contents}>{contents}</div>
                </nav>
                {children}
            </section>
        );
    },

    HighlightBox: ({ children }: { children: React.ReactNode }) => {
        return <div className={`${style.highlight_box} highlight_box`}>{children}</div>;
    },

    SyntaxBox: ({ children }: { children: React.ReactNode }) => {
        return <div id="syntax_box">{children}</div>;
    },

    CodeBox: () => {
        return (
            <div id={style.code}>
                <strong>code</strong>
            </div>
        );
    },
};

export default CustomMDX;
