// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2153-7973
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Text/Text.tsx
// component=TextListItem

import figma from "figma";

const text = figma.selectedInstance.getString("Text");

// No Figma "Text Link List Item" é um componente próprio. No código não existe:
// é um TextListItem com um TextLink dentro. Um componente do Figma pode virar
// uma combinação de dois do código.
export default {
  id: "TextLinkListItem",
  imports: ['import { TextListItem, TextLink } from "primitives";'],
  example: figma.code`<TextListItem>
  <TextLink href="#">${text}</TextLink>
</TextListItem>`,
  metadata: { nestable: true },
};
