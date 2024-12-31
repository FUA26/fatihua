import { defineConfig, defineCollections } from "fumadocs-mdx/config";

export const docs = defineCollections({
  type: "doc",
  dir: "content/docs",
});

export const project = defineCollections({
  type: "doc",
  dir: "content/project",
});

export const meta = defineCollections({
  type: "meta",
  dir: "content/docs",
});

export const blog = defineCollections({
  type: "doc",
  dir: "content/blog",
});

export default defineConfig();
