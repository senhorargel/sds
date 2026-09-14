// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2087-8487
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=Text

import figma from "figma";

// Os componentes de texto são todos iguais: uma propriedade "Text" vira o conteúdo.
const text = figma.selectedInstance.getString("Text");

export default {
  id: "Text",
  imports: ['import { Text } from "primitives";'],
  example: figma.code`<Text>${text}</Text>`,
  metadata: { nestable: true },
};
