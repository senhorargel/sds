// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15896
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma";

// SECTIONS: no Figma cada variação de Hero é um componente. No código existe
// um <Hero> só, e o que muda é o que vai dentro. Então mapeamos <Hero> + filhos.
// "Platform" (Desktop/Mobile) não vira prop: o código é responsivo sozinho.
const content = figma.properties.children(["Text Content Title"]);

export default {
  id: "HeroBasic",
  imports: ['import { Hero } from "compositions";'],
  example: figma.code`<Hero>
  ${content}
</Hero>`,
  metadata: { nestable: true },
};
