// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2153-7834
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextContentHeading

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const heading = instance.getString("Heading");
const subheading = instance.getBoolean("Has Subheading", {
  true: instance.getString("Subheading"),
  false: undefined,
});
const align = instance.getEnum("Align", { Center: "center" });

export default {
  id: "TextContentHeading",
  imports: ['import { TextContentHeading } from "primitives";'],
  example: figma.code`<TextContentHeading
  ${rp("heading", heading)}
  ${rp("subheading", subheading)}
  ${rp("align", align)}
/>`,
  metadata: { nestable: true },
};
