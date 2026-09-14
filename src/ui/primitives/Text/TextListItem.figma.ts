// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2077-11663
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextListItem

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextListItem",
  imports: ['import { TextListItem } from "primitives";'],
  example: figma.code`<TextListItem>${text}</TextListItem>`,
  metadata: { nestable: true },
};
