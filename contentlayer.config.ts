// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
    theme: "material-theme-darker",
    keepBackground: false,
};

export const Post = defineDocumentType(() => ({
    contentType: "mdx",
    name: "Post",
    filePathPattern: `**/*.mdx`,
    fields: {
        title: { type: "string", required: true },
        date: { type: "date", required: true },
        keywords: { type: "list", of: { type: "string" }, required: false, default: [] },
    },
}));

export default makeSource({
    contentDirPath: "post",
    documentTypes: [Post],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
    },
});
