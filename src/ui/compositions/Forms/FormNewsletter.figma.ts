// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=197-19743
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Fieldset/Fieldset.tsx
// component=Form

import figma from "figma";

const fields = figma.properties.children(["Input Field", "Button"]);

export default {
  id: "FormNewsletter",
  imports: ['import { Form } from "primitives";'],
  // singleLine: campo e botão na mesma linha, como no Figma.
  example: figma.code`<Form singleLine onSubmit={(e) => {}}>
  ${fields}
</Form>`,
  metadata: { nestable: true },
};
