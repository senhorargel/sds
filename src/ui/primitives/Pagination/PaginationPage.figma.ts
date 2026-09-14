// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-890
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPage

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const number = instance.getString("Number");
// Duas opções do Figma ("Current" e "Current Hover") viram a mesma prop.
const current = instance.getEnum("State", { Current: true, "Current Hover": true });

export default {
  id: "PaginationPage",
  imports: ['import { PaginationPage } from "primitives";'],
  example: figma.code`<PaginationPage href="#" ${rp("current", current)}>${number}</PaginationPage>`,
  metadata: { nestable: true },
};
