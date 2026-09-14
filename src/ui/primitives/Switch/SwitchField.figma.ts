// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-1902
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Switch/Switch.tsx
// component=SwitchField

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
const defaultSelected = instance.getEnum("Value Type", { Checked: true });

export default {
  id: "SwitchField",
  imports: ['import { SwitchField } from "primitives";'],
  example: figma.code`<SwitchField
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("defaultSelected", defaultSelected)}
  ${rp("isDisabled", isDisabled)}
/>`,
  metadata: { nestable: true },
};
