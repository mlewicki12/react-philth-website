
import { defineObject } from "sanity-typed-queries";

const { blockContent } = defineObject('blockContent', {
  blockContent: {
    type: 'array',
    of: [{type: 'block'}, {type: 'object'}]
  }
});

export { blockContent };