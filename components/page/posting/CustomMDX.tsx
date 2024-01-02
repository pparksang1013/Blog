import type { MDXComponents } from "mdx/types";
import React, { ReactElement } from "react";
import Link from "next/link";
import "./style/custom_MDX.css";
import "./style/maincategory_prop.css";

const CustomMDX: MDXComponents = {
    MainCate: ({ children, tag }: { children: React.ReactNode; tag: string }) => {
        const contents = React.Children.toArray(children)
            .filter((child): child is ReactElement => React.isValidElement(child) && child.type === "h2")
            .map((ele) => {
                return <Link href={`#${ele.props.id}`}>{ele.props.children}</Link>;
            });

        return (
            <section className={`main_category ${tag}`} id="mdx">
                <nav id="contents">{contents}</nav>
                {children}
            </section>
        );
    },

    MarginBox: ({ children, lang }: { children: React.ReactNode; lang: string }) => {
        let isLanguage = lang ? "en" : "";

        return <div className={`margin_box ${isLanguage && lang}`}>{children}</div>;
    },

    HighlightBox: ({ children }: { children: React.ReactNode }) => {
        return <div className="highlight_box">{children}</div>;
    },

    SyntaxBox: ({ children }: { children: React.ReactNode }) => {
        return <div className="syntax_box">{children}</div>;
    },
};

export default CustomMDX;
