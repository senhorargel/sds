// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-728
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Menu/Menu.tsx
// component=MenuHeader

import figma from "figma";

// O header é só um contêiner com dois textos (Text Strong e Text Small).
// Cada texto renderiza com o próprio mapeamento da aba Text.
const content = figma.properties.children(["Text Strong", "Text Small"]);

export default {
  id: "MenuHeader",
  imports: ['import { MenuHeader } from "primitives";'],
  example: figma.code`<MenuHeader>
  ${content}
</MenuHeader>`,
  metadata: { nestable: true },
};
