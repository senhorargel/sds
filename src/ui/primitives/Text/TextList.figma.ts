// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=480-6149
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextList

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getBoolean("Has Title", { true: "Título da lista", false: undefined });
const density = instance.getEnum("Density", { Tight: "tight" });
const items = instance.getSlot("Slot");

export default {
  id: "TextList",
  imports: ['import { TextList } from "primitives";'],
  example: figma.code`<TextList ${rp("title", title)} ${rp("density", density)}>
  ${items}
</TextList>`,
  metadata: { nestable: true },
};
