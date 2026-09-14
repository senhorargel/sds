// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8486
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextStrong

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

export default {
  id: "TextStrong",
  imports: ['import { TextStrong } from "primitives";'],
  example: figma.code`<TextStrong>${text}</TextStrong>`,
  metadata: { nestable: true },
};
