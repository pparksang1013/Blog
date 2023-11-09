import type { MDXComponents } from "mdx/types";
import "/style/customMDX.css";

const CustomMDX: MDXComponents = {
    CustomLayout: ({ children }: { children: React.ReactNode }) => {
        return <div className="MDX_box">{children}</div>;
    },
};

export default CustomMDX;
