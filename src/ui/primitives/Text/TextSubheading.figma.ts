// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2103-22303
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextSubheading

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextSubheading",
  imports: ['import { TextSubheading } from "primitives";'],
  example: figma.code`<TextSubheading>${text}</TextSubheading>`,
  metadata: { nestable: true },
};
