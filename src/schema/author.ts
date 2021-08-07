
import { defineDocument } from "sanity-typed-queries";

const { author, builder } = defineDocument('author', {
  name: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  slug: {
    type: 'slug'
  },
  image: {
    type: 'image'
  },
  bio: {
    type: 'array',
    of: [
      {
        type: 'block'
      }
    ]
  }
});

export { author, builder };