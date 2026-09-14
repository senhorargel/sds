// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=157-10352
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tag/Tag.tsx
// component=TagToggleGroup

import figma from "figma";

const tags = figma.selectedInstance.getSlot("Slot");

export default {
  id: "TagToggleGroup",
  imports: ['import { TagToggleGroup, TagToggleList } from "primitives";'],
  example: figma.code`<TagToggleGroup selectionMode="multiple">
  <TagToggleList>
    ${tags}
  </TagToggleList>
</TagToggleGroup>`,
  metadata: { nestable: true },
};
