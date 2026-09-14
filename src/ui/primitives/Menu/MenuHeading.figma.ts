// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-760
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Menu/Menu.tsx
// component=MenuHeading

import figma from "figma";

const instance = figma.selectedInstance;
const strong = instance.findInstance("Text Strong");
const text = strong && strong.type === "INSTANCE" ? strong.getString("Text") : "Título";

export default {
  id: "MenuHeading",
  imports: ['import { MenuHeading } from "primitives";'],
  example: figma.code`<MenuHeading>${text}</MenuHeading>`,
  metadata: { nestable: true },
};
