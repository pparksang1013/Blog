import type { MDXComponents } from "mdx/types";

const CustomMDX: MDXComponents = {
    CustomLayout: ({ children }: { children: React.ReactNode }) => {
        return <div>{children}</div>;
    },
};

export default CustomMDX;
