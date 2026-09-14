// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8485
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextEmphasis

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextEmphasis",
  imports: ['import { TextEmphasis } from "primitives";'],
  example: figma.code`<TextEmphasis>${text}</TextEmphasis>`,
  metadata: { nestable: true },
};
