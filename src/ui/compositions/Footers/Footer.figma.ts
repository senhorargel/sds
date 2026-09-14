// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=321-11357
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Footers/Footers.tsx
// component=Footer

import figma from "figma";

// O Footer do código vem com logo, redes sociais e listas de links fixos.
// Os slots do Figma (Title, Slot) não têm onde entrar: o código não aceita filhos.
export default {
  id: "Footer",
  imports: ['import { Footer } from "compositions";'],
  example: figma.code`<Footer />`,
  metadata: { nestable: true },
};
