// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8484
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextSmall

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextSmall",
  imports: ['import { TextSmall } from "primitives";'],
  example: figma.code`<TextSmall>${text}</TextSmall>`,
  metadata: { nestable: true },
};
