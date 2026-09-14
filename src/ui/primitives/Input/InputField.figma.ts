// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2136-2263
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Input/Input.tsx
// component=InputField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// CONCEITO NOVO: um mapeamento que gera DOIS componentes diferentes.
// Com label, o código usa <InputField> (campo completo). Sem label, usa <Input>
// (só a caixa de texto). getPropertyValue lê o booleano cru para decidir.
const hasLabel = instance.getPropertyValue("Has Label") === true;

const label = hasLabel ? instance.getString("Label") : undefined;
const description = hasLabel
  ? instance.getBoolean("Has Description", {
      true: instance.getString("Description"),
      false: undefined,
    })
  : undefined;

// A variante "Value Type" decide se o texto "Value" é valor digitado ou placeholder.
const value = instance.getEnum("Value Type", { Default: instance.getString("Value") });
const placeholder = instance.getEnum("Value Type", {
  Placeholder: instance.getString("Value"),
});

// "State" tem três opções: Default (nada), Disabled (prop) e Error (prop + texto).
const isDisabled = instance.getEnum("State", { Disabled: true });
const errorMessage = hasLabel
  ? instance.getEnum("State", { Error: instance.getString("Error") })
  : undefined;

const tag = hasLabel ? "InputField" : "Input";

export default {
  id: "InputField",
  imports: [`import { ${tag} } from "primitives";`],
  example: figma.code`<${tag}
  ${rp("label", label)}
  ${rp("description", description)}
  ${rp("value", value)}
  ${rp("placeholder", placeholder)}
  ${rp("errorMessage", errorMessage)}
  ${rp("isDisabled", isDisabled)}
/>`,
  metadata: { nestable: true },
};
