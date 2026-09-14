// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-720
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Menu/Menu.tsx
// component=Menu

import figma from "figma";

const items = figma.selectedInstance.getSlot("Slot");

export default {
  id: "Menu",
  imports: ['import { Menu } from "primitives";'],
  // onAction recebe qual item foi clicado. É lógica do app, fica fixo.
  example: figma.code`<Menu onAction={(key) => {}}>
  ${items}
</Menu>`,
  metadata: { nestable: true },
};
