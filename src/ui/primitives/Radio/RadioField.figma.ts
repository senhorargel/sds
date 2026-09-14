// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-1412
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Radio/Radio.tsx
// component=RadioField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const isDisabled = instance.getEnum("State", { Disabled: true });

// Radio não tem "defaultSelected" próprio: quem marca é o RadioGroup, pelo value.
// Aqui só indicamos o value; usamos o label como valor de exemplo.

export default {
  id: "RadioField",
  imports: ['import { RadioField } from "primitives";'],
  example: figma.code`<RadioField
  ${rp("value", label)}
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("isDisabled", isDisabled)}
/>`,
  metadata: { nestable: true },
};
