// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=515-5459
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationButton

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getBoolean("Has Label", {
  true: instance.getString("Label"),
  false: undefined,
});
const icon = instance.getBoolean("Has Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});
// "Active" no Figma = item selecionado no código. Hover é CSS.
const isSelected = instance.getEnum("State", { Active: true });
// Padrões do código: direction "column" e size "medium". Só os outros viram prop.
const direction = instance.getEnum("Direction", { Row: "row" });
const size = instance.getEnum("Type", { Small: "small" });

export default {
  id: "NavigationButton",
  imports: ['import { NavigationButton } from "primitives";'],
  example: figma.code`<NavigationButton
  href="#"
  ${rp("icon", icon)}
  ${rp("size", size)}
  ${rp("direction", direction)}
  ${rp("isSelected", isSelected)}
>
  ${label}
</NavigationButton>`,
  metadata: { nestable: true },
};
