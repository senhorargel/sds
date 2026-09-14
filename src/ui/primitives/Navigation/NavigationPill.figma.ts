// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=7768-19970
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationPill

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const isSelected = instance.getEnum("State", { Active: true });

export default {
  id: "NavigationPill",
  imports: ['import { NavigationPill } from "primitives";'],
  example: figma.code`<NavigationPill href="#" ${rp("isSelected", isSelected)}>
  ${label}
</NavigationPill>`,
  metadata: { nestable: true },
};
