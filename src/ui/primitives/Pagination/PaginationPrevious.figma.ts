// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-880
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPrevious

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const href = instance.getEnum("State", { Default: "#", Hover: "#" });

export default {
  id: "PaginationPrevious",
  imports: ['import { PaginationPrevious } from "primitives";'],
  example: figma.code`<PaginationPrevious ${rp("href", href)} />`,
  metadata: { nestable: true },
};
