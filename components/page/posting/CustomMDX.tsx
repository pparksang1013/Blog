import type { MDXComponents } from "mdx/types";
import "/style/customMDX.css";

const CustomMDX: MDXComponents = {
    MainCate: ({ children }: { children: React.ReactNode }) => {
        return <section className="main_category">{children}</section>;
    },

    MainCateBox: ({ children }: { children: React.ReactNode }) => {
        return <div className="main_category_box">{children}</div>;
    },

    SubCate: ({ children }: { children: React.ReactNode }) => {
        return <section className="sub_category">{children}</section>;
    },

    SubCateBox: ({ children }: { children: React.ReactNode }) => {
        return <div className="sub_cate_box">{children}</div>;
    },

    ExplanationDiv: ({ children }: { children: React.ReactNode }) => {
        return <div className="explanation">{children}</div>;
    },

    StrongTag: ({ children }: { children: React.ReactNode }) => {
        return <strong>{children}</strong>;
    },

    SubContents: ({ children }: { children: React.ReactNode }) => {
        return <div className="sub_contents">{children}</div>;
    },

    MarginBox: ({ children, lang }: { children: React.ReactNode; lang: string }) => {
        return <div className={`margin_box ${lang}`}>{children}</div>;
    },

    Highlight: ({ children, color }: { children: React.ReactNode; color: string }) => {
        return <span className={`highlight ${color}`}>{children}</span>;
    },

    HighlightBox: ({ children, color }: { children: React.ReactNode; color: string }) => {
        return <div className={`highlight_box ${color}`}>{children}</div>;
    },
};

export default CustomMDX;
