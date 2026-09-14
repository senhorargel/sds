// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=197-19740
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Fieldset/Fieldset.tsx
// component=Form

import figma from "figma";

const fields = figma.properties.children([
  "Input Field",
  "Button Group",
  "Text Link",
]);

export default {
  id: "FormLogIn",
  imports: ['import { Form } from "primitives";'],
  example: figma.code`<Form onSubmit={(e) => {}}>
  ${fields}
</Form>`,
  metadata: { nestable: true },
};
