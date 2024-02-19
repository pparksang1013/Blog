import type { MDXComponents } from "mdx/types";
import React, { ReactElement } from "react";
import Link from "next/link";
import "../../../style/posting/mdx.css";

const CustomMDX: MDXComponents = {
    Wrapper: ({ children }: { children: React.ReactNode; tag: string }) => {
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
        return <div className="flex_item">{children}</div>;
    },

    CustomBox: ({ children, margin, maxWidth }: { children: React.ReactNode; margin?: string; maxWidth?: string }) => {
        return <div style={{ margin, maxWidth }}>{children}</div>;
    },

    Highlight: ({ children }: { children: React.ReactNode }) => {
        return <b id="highlight">{children}</b>;
    },
};

export default CustomMDX;
