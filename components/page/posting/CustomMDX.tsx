import type { MDXComponents } from "mdx/types";
import React, { ReactElement } from "react";
import Link from "next/link";
import "../../../style/posting/mdx.css";

const CustomMDX: MDXComponents = {
    Wrapper: ({ children }: { children: React.ReactNode }) => {
        return <div className="posting_wrapper">{children}</div>;
    },

    FlexBox: ({ children, margin, maxWidth }: { children: React.ReactNode; margin?: string; maxWidth?: string }) => {
        return (
            <div id="flex_box" style={{ margin, maxWidth }}>
                {children}
            </div>
        );
    },

    FlexItemWrapper: ({ children }: { children: React.ReactNode }) => {
        return <div id="flex_item">{children}</div>;
    },

    CustomBox: ({ children, margin, maxWidth }: { children: React.ReactNode; margin?: string; maxWidth?: string }) => {
        return <div style={{ margin, maxWidth }}>{children}</div>;
    },

    Highlight: ({ children }: { children: React.ReactNode }) => {
        return <b id="highlight">{children}</b>;
    },

    HighlightBox: ({ children }: { children: React.ReactNode }) => {
        return <div id="highlight_box">{children}</div>;
    },

    H2Tag: ({ children, id }: { children: React.ReactNode; id: string }) => {
        return <h2 id={id}>{children}</h2>;
    },
};

export default CustomMDX;
