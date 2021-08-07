
import { defineObject } from "sanity-typed-queries";

const { album } = defineObject('album', {
  artist: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  title: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  song: {
    type: 'string'
  },
  spotify: {
    type: 'string',
    validation: Rule => Rule.required()
  },
  art: {
    type: 'image',
    validation: Rule => Rule.required()
  }
});

export { album };