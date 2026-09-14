// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=315-32700
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tooltip/Tooltip.tsx
// component=Tooltip

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const jsx = figma.helpers.react.jsxElement;

const title = instance.getString("Title");
const body = instance.getBoolean("Has Body", {
  true: jsx(`<Text>${instance.getString("Body")}</Text>`),
  false: undefined,
});
// Os nomes das posições batem com o código, só mudam para minúsculo.
const placement = instance.getEnum("Placement", {
  Top: "top",
  Bottom: "bottom",
  Left: "left",
  Right: "right",
});

export default {
  id: "Tooltip",
  imports: ['import { Tooltip, Text, TextStrong } from "primitives";'],
  example: figma.code`<Tooltip ${rp("placement", placement)}>
  <TextStrong>${title}</TextStrong>
  ${body}
</Tooltip>`,
  metadata: { nestable: true },
};
