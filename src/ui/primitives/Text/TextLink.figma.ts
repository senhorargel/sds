// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8483
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextLink

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextLink",
  imports: ['import { TextLink } from "primitives";'],
  // Um link precisa de destino (href). O Figma não sabe qual: fica "#" de exemplo.
  example: figma.code`<TextLink href="#">${text}</TextLink>`,
  metadata: { nestable: true },
};
