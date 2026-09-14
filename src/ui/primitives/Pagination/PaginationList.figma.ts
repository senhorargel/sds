// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-903
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationList

import figma from "figma";

const pages = figma.selectedInstance.getSlot("Slot");

export default {
  id: "PaginationList",
  imports: ['import { PaginationList } from "primitives";'],
  example: figma.code`<PaginationList>
  ${pages}
</PaginationList>`,
  metadata: { nestable: true },
};
