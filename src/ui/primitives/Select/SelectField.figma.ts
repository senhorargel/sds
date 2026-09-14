// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2136-2336
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Select/Select.tsx
// component=SelectField

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
const placeholder = instance.getEnum("Value Type", {
  Placeholder: instance.getString("Value"),
});
const selected = instance.getEnum("Value Type", { Default: instance.getString("Value") });
const isDisabled = instance.getEnum("State", { Disabled: true });
const errorMessage = instance.getEnum("State", { Error: instance.getString("Error") });
// "Open" mostra a lista aberta no Figma; no código é a prop isOpen.
const isOpen = instance.getBoolean("Open", { true: true, false: undefined });

export default {
  id: "SelectField",
  imports: ['import { SelectField, SelectItem } from "primitives";'],
  // As opções da lista não são propriedade no Figma: ficam como exemplo.
  example: figma.code`<SelectField
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("placeholder", placeholder)}
  ${rp("defaultSelectedKey", selected)}
  ${rp("errorMessage", errorMessage)}
  ${rp("isDisabled", isDisabled)}
  ${rp("isOpen", isOpen)}
>
  <SelectItem id="${selected || "opcao-1"}">${selected || "Opção 1"}</SelectItem>
  <SelectItem id="opcao-2">Opção 2</SelectItem>
</SelectField>`,
  metadata: { nestable: true },
};
