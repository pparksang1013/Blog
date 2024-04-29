import type { MDXComponents } from "mdx/types";

import { CustomP } from "./CustomP";
import { CustomPre } from "./CustomPre";
import { CustomLi } from "./CustomLi";
import { CustomBlockQuote } from "./CustomBlockQuote";
import { CustomStrong } from "./CustomStrong";
import { CustomCode } from "./CustomCode";
import { CustomA } from "./CustomA";
import { CustomOption } from "./CustomOption";
import { CustomContents } from "./CustomContents";

export const CustomMdx: MDXComponents = {
    p: CustomP,
    pre: CustomPre,
    li: CustomLi,
    blockquote: CustomBlockQuote,
    strong: CustomStrong,
    code: CustomCode,
    a: CustomA,
    CustomOption,
    CustomContents,
};
