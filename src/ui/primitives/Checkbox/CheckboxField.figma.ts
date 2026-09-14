// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-1441
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Checkbox/Checkbox.tsx
// component=CheckboxField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");

// Padrão dos campos de formulário: um booleano "Has X" liga/desliga um texto "X".
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});

const isDisabled = instance.getEnum("State", { Disabled: true });

// Uma variante com 3 opções vira DUAS props booleanas:
// Checked e Indeterminate marcam o campo; só Indeterminate liga o traço.
const defaultSelected = instance.getEnum("Value Type", {
  Checked: true,
  Indeterminate: true,
});
const isIndeterminate = instance.getEnum("Value Type", { Indeterminate: true });

export default {
  id: "CheckboxField",
  imports: ['import { CheckboxField } from "primitives";'],
  example: figma.code`<CheckboxField
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("defaultSelected", defaultSelected)}
  ${rp("isIndeterminate", isIndeterminate)}
  ${rp("isDisabled", isDisabled)}
/>`,
  metadata: { nestable: true },
};
