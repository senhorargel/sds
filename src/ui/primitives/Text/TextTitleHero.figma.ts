// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8491
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextTitleHero

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextTitleHero",
  imports: ['import { TextTitleHero } from "primitives";'],
  example: figma.code`<TextTitleHero>${text}</TextTitleHero>`,
  metadata: { nestable: true },
};
