// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2194-14984
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const direction = instance.getEnum("Direction", { Column: "column" });
const items = instance.getSlot("Slot") || instance.getSlot("Slot 2");

export default {
  id: "NavigationPillList",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation ${rp("direction", direction)}>
  ${items}
</Navigation>`,
  metadata: { nestable: true },
};
