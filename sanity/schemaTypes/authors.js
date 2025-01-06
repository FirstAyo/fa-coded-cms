import { defineType } from "sanity";

export const authors = defineType({
    name: "authors",
    type: "document",
    title:"Authors",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "shortBio",
            title: "Short Biography text",
            type: "text",
        },
        {
            name: "bioImage",
            title: "Image for Biography",
            type: "image",
        },
        {
            name: "githubSlug",
            title: "GitHub Slug",
            type: "slug",
        },
        {
            name: "twitterSlug",
            title: "Twitter Slug",
            type: "slug",
        },
        {
            name: "linkedInSlug",
            title: "LinkedIn Slug",
            type: "slug",
        },
    ]
})