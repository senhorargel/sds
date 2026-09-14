// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8490
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextTitlePage

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextTitlePage",
  imports: ['import { TextTitlePage } from "primitives";'],
  example: figma.code`<TextTitlePage>${text}</TextTitlePage>`,
  metadata: { nestable: true },
};
