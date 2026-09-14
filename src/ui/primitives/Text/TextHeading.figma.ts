// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8488
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextHeading

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextHeading",
  imports: ['import { TextHeading } from "primitives";'],
  example: figma.code`<TextHeading>${text}</TextHeading>`,
  metadata: { nestable: true },
};
