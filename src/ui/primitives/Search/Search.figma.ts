// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2236-14989
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Search/Search.tsx
// component=Search

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// "Value Type" aqui chama Filled/Placeholder (no Input Field era Default/Placeholder).
// Mesmo padrão, nomes diferentes: sempre conferir os nomes no Figma.
const value = instance.getEnum("Value Type", { Filled: instance.getString("Value") });
const placeholder = instance.getEnum("Value Type", {
  Placeholder: instance.getString("Value"),
});

// Search é um <input> puro no código, então a prop é "disabled" (HTML), não "isDisabled".
const disabled = instance.getEnum("State", { Disabled: true });

export default {
  id: "Search",
  imports: ['import { Search } from "primitives";'],
  example: figma.code`<Search
  ${rp("value", value)}
  ${rp("placeholder", placeholder)}
  ${rp("disabled", disabled)}
  onSearch={(search) => {}}
/>`,
  metadata: { nestable: true },
};
