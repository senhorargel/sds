// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=624-23642
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Radio/Radio.tsx
// component=RadioGroup

import figma from "figma";

const fields = figma.properties.children(["Radio Field"]);

export default {
  id: "RadioGroup",
  imports: ['import { RadioGroup } from "primitives";'],
  example: figma.code`<RadioGroup>
  ${fields}
</RadioGroup>`,
  metadata: { nestable: true },
};
