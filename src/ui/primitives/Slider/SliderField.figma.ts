// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=589-17676
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Slider/Slider.tsx
// component=SliderField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getBoolean("Has Label", {
  true: instance.getString("Label"),
  false: undefined,
});
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const isDisabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "SliderField",
  imports: ['import { SliderField } from "primitives";'],
  // A posição do controle não é propriedade no Figma: defaultValue fica como exemplo.
  example: figma.code`<SliderField
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("isDisabled", isDisabled)}
  defaultValue={50}
/>`,
  metadata: { nestable: true },
};
