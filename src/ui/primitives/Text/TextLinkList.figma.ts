// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=322-9321
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextLinkList

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getBoolean("Has Title", { true: "Título da lista", false: undefined });
const density = instance.getEnum("Density", { Tight: "tight" });
const items = instance.getSlot("Slot");

export default {
  id: "TextLinkList",
  imports: ['import { TextLinkList } from "primitives";'],
  example: figma.code`<TextLinkList ${rp("title", title)} ${rp("density", density)}>
  ${items}
</TextLinkList>`,
  metadata: { nestable: true },
};
