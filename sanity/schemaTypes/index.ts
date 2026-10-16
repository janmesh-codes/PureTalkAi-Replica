import { defineType, defineField } from "sanity";

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    defineField({
      name: "heroHeading",
      title: "Hero Heading",
      type: "string",
    }),
    defineField({
      name: "heroDescription",
      title: "Hero Description",
      type: "text",
    }),
    defineField({
      name: "primaryButton",
      title: "Primary Button Text",
      type: "string",
    }),
    defineField({
      name: "secondaryButton",
      title: "Secondary Button Text",
      type: "string",
    }),
  ],
});