import { defineType } from "sanity";

export const projects = defineType({
  name: "project",
  type: "document",
  title: "Project",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title of Project",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug of Project",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "gitSlug",
      type: "slug",
      title: "Github Slug",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "liveSlug",
      type: "slug",
      title: "Live Project Slug",
      validation: (Rule) => Rule.required().error("Required"),
    },
    {
      name: "featuredImage",
      type: "image",
      title: "Featured Image",
    },
    {
      name: "category",
      title: "Category",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "publishedAt",
      type: "datetime",
      title: "Published At",
      initialValue: () => new Date().toISOString,
    },
    {
      name: "exerpt",
      type: "text",
      title: "Exerpt",
      validation: (Rule) => Rule.max(350).error("Max is 350 characters"),
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      of: [
        { type: "block" },
        {
          type: "image",
          fields: [{ type: "text", name: "alt", title: "Alt" }],
        },
      ],
    },
    {
      name: "author",
      title: "Author",
      type: "array",
      of: [{ type: "reference", to: [{ type: "authors" }] }],
    },
  ],
});
