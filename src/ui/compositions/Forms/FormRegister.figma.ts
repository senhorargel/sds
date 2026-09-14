// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=197-19742
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Fieldset/Fieldset.tsx
// component=Form

import figma from "figma";

// FORMULÁRIOS: no Figma cada formulário é um componente próprio (Register,
// Log In, Contact...). No código não existe "FormRegister": existe um <Form>
// genérico e os campos dentro dele. Então o mapeamento é <Form> + filhos,
// e cada filho (Input Field, Checkbox Field, Button Group...) renderiza com
// o próprio mapeamento. É a mesma ideia do Card, em escala maior.
const fields = figma.properties.children([
  "Input Field",
  "Textarea Field",
  "Select Field",
  "Checkbox Field",
  "Button Group",
  "Button",
  "Text Link",
]);

export default {
  id: "FormRegister",
  imports: ['import { Form } from "primitives";'],
  example: figma.code`<Form onSubmit={(e) => {}}>
  ${fields}
</Form>`,
  metadata: { nestable: true },
};
