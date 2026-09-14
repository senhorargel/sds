// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=1443-10386
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextPrice

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const price = instance.getString("Price");
const currency = instance.getString("Currency");
const label = instance.getBoolean("Has Label", {
  true: instance.getString("Label"),
  false: undefined,
});
// "large" é o padrão do código.
const size = instance.getEnum("Size", { Small: "small" });

export default {
  id: "TextPrice",
  imports: ['import { TextPrice } from "primitives";'],
  example: figma.code`<TextPrice
  ${rp("currency", currency)}
  ${rp("price", price)}
  ${rp("label", label)}
  ${rp("size", size)}
/>`,
  metadata: { nestable: true },
};
