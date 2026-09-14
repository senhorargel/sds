// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2103-22298
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextSubtitle

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextSubtitle",
  imports: ['import { TextSubtitle } from "primitives";'],
  example: figma.code`<TextSubtitle>${text}</TextSubtitle>`,
  metadata: { nestable: true },
};
