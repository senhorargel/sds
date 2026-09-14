// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-739
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Menu/Menu.tsx
// component=MenuShortcut

import figma from "figma";

const shortcut = figma.selectedInstance.getString("Shortcut");

export default {
  id: "MenuShortcut",
  imports: ['import { MenuShortcut } from "primitives";'],
  example: figma.code`<MenuShortcut>${shortcut}</MenuShortcut>`,
  metadata: { nestable: true },
};
