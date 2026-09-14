// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2153-7838
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextContentTitle

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getString("Title");
const subtitle = instance.getBoolean("Has Subtitle", {
  true: instance.getString("Subtitle"),
  false: undefined,
});
const align = instance.getEnum("Align", { Center: "center" });

export default {
  id: "TextContentTitle",
  imports: ['import { TextContentTitle } from "primitives";'],
  example: figma.code`<TextContentTitle
  ${rp("title", title)}
  ${rp("subtitle", subtitle)}
  ${rp("align", align)}
/>`,
  metadata: { nestable: true },
};
