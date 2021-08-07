
import { defineDocument } from "sanity-typed-queries";

const { category, builder } = defineDocument('category', {
  title: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  description: {
    type: 'string'
  }
});

export { category, builder };