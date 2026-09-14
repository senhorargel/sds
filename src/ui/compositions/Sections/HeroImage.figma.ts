// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15970
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma";

const content = figma.properties.children(["Text Content Title", "Button Group"]);

export default {
  id: "HeroImage",
  imports: ['import { Hero } from "compositions";'],
  // A imagem de fundo é variant="image" + src. O caminho fica de exemplo.
  example: figma.code`<Hero variant="image" src="/hero.jpg" padding="4000">
  ${content}
</Hero>`,
  metadata: { nestable: true },
};
