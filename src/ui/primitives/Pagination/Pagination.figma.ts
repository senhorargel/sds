// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-899
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Pagination/Pagination.tsx
// component=Pagination

import figma from "figma";

const parts = figma.properties.children([
  "Pagination Previous",
  "Pagination List",
  "Pagination Next",
]);

export default {
  id: "Pagination",
  imports: ['import { Pagination } from "primitives";'],
  example: figma.code`<Pagination>
  ${parts}
</Pagination>`,
  metadata: { nestable: true },
};
