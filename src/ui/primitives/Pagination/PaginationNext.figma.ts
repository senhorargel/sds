// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-870
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationNext

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// No código, "desabilitado" = sem href. Então Default e Hover ganham um link,
// e Disabled fica sem nada (undefined), o que desabilita o botão.
const href = instance.getEnum("State", { Default: "#", Hover: "#" });

export default {
  id: "PaginationNext",
  imports: ['import { PaginationNext } from "primitives";'],
  example: figma.code`<PaginationNext ${rp("href", href)} />`,
  metadata: { nestable: true },
};
