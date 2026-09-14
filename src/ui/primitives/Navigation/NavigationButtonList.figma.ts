// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=524-503
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// No Figma existem duas listas (Button List e Pill List). No código é um só
// componente, <Navigation>, que aceita qualquer item dentro.
// "row" é o padrão do código; só Column vira prop.
const direction = instance.getEnum("Direction", { Column: "column" });
// Os booleanos "Link 1..5" só escondem/mostram itens; o que vale é o slot.
const items = instance.getSlot("Slot");

export default {
  id: "NavigationButtonList",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation ${rp("direction", direction)}>
  ${items}
</Navigation>`,
  metadata: { nestable: true },
};
