
import { defineDocument } from "sanity-typed-queries";
import { album } from "./album";
import { author } from "./author";
import { blockContent } from "./blockContent";

const { review, builder } = defineDocument('review', {
  title: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  author: {
    type: 'reference',
    to: [{type: 'author'}]
  },
  album: {
    type: 'album',
    validation: Rule => Rule.required()
  },
  slug: {
    type: 'slug',
    validation: Rule => Rule.required()
  },
  publishedAt: {
    type: 'datetime'
  },
  body: {
    type: 'blockContent'
  }
}, [author, album, blockContent]);

export { review, builder };