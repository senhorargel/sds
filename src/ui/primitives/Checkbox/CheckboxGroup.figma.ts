// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-1426
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Checkbox/Checkbox.tsx
// component=CheckboxGroup

import figma from "figma";

// O grupo não tem propriedades: é só um contêiner de Checkbox Fields.
const fields = figma.properties.children(["Checkbox Field"]);

export default {
  id: "CheckboxGroup",
  imports: ['import { CheckboxGroup } from "primitives";'],
  example: figma.code`<CheckboxGroup>
  ${fields}
</CheckboxGroup>`,
  metadata: { nestable: true },
};
