// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=197-23153
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Fieldset/Fieldset.tsx
// component=Form

import figma from "figma";

const fields = figma.properties.children([
  "Input Field",
  "Select Field",
  "Textarea Field",
  "Checkbox Field",
  "Button Group",
]);

export default {
  id: "FormShipping",
  imports: ['import { Form, Fieldset, Legend } from "primitives";'],
  // Este formulário tem um título ("Legend" no Figma). No código isso é
  // <Fieldset> + <Legend>. O texto não é propriedade, fica de exemplo.
  example: figma.code`<Form onSubmit={(e) => {}}>
  <Fieldset>
    <Legend>Shipping information</Legend>
    ${fields}
  </Fieldset>
</Form>`,
  metadata: { nestable: true },
};
