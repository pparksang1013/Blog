// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";

/** @type {import('rehype-pretty-code').Options} */
const options = {
    // See Options section below.
};

export const Post = defineDocumentType(() => ({
    contentType: "mdx",
    name: "Post",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        summary: { type: "string", required: true },
        tag: { type: "string", required: true },
    },
}));

export default makeSource({
    contentDirPath: "post",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, options]],
    },
});
