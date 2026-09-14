// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=197-19744
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Fieldset/Fieldset.tsx
// component=Form

import figma from "figma";

const fields = figma.properties.children(["Input Field", "Button Group"]);

export default {
  id: "FormForgotPassword",
  imports: ['import { Form } from "primitives";'],
  example: figma.code`<Form onSubmit={(e) => {}}>
  ${fields}
</Form>`,
  metadata: { nestable: true },
};
