// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=157-10316
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tag/Tag.tsx
// component=TagToggle

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const iconStart = instance.getBoolean("Show Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});
// "State: On/Off" é seleção, e seleção é decidida pelo grupo (TagToggleGroup).

export default {
  id: "TagToggle",
  imports: ['import { TagToggle } from "primitives";'],
  example: figma.code`<TagToggle id="${label}" ${rp("iconStart", iconStart)}>
  ${label}
</TagToggle>`,
  metadata: { nestable: true },
};
