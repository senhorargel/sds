// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15919
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma";

// O formulário de dentro renderiza com o mapeamento FormNewsletter.
const content = figma.properties.children(["Text Content Title", "Form Newsletter"]);

export default {
  id: "HeroNewsletter",
  imports: ['import { Hero } from "compositions";'],
  example: figma.code`<Hero>
  ${content}
</Hero>`,
  metadata: { nestable: true },
};
