// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-3088
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Textarea/Textarea.tsx
// component=TextareaField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// Mesma ideia do InputField: com label vira <TextareaField>, sem label vira <Textarea>.
const hasLabel = instance.getPropertyValue("Has Label") === true;

const label = hasLabel ? instance.getString("Label") : undefined;
const description = hasLabel
  ? instance.getBoolean("Has Description", {
      true: instance.getString("Description"),
      false: undefined,
    })
  : undefined;
const value = instance.getEnum("Value Type", { Default: instance.getString("Value") });
const placeholder = instance.getEnum("Value Type", {
  Placeholder: instance.getString("Value"),
});
const isDisabled = instance.getEnum("State", { Disabled: true });
// No Figma o texto de erro deste campo chama "Error", mas a camada chama "Hint".
// O que vale é o nome da PROPRIEDADE.
const errorMessage = hasLabel
  ? instance.getEnum("State", { Error: instance.getString("Error") })
  : undefined;

const tag = hasLabel ? "TextareaField" : "Textarea";

export default {
  id: "TextareaField",
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
