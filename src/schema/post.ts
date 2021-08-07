
import { defineDocument } from "sanity-typed-queries";
import { author } from './author';
import { blockContent } from "./blockContent";
import { category } from "./category";

const { post, builder } = defineDocument('post', {
  title: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  slug: {
    type: 'slug',
    validation: Rule => Rule.required()
  },
  author: {
    type: 'reference',
    to: [{ type: 'author' }]
  },
  mainImage: {
    type: 'image',
  },
  categories: {
    type: 'array',
    of: [{
      type: 'reference',
      to: [{type: 'category'}]
    }]
  },
  publishedAt: {
    type: 'datetime',
  },
  body: {
    type: 'blockContent'
  }
}, [author, blockContent, category]);

export { post, builder };