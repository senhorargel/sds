// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2287-22651
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Headers/Headers.tsx
// component=Header

import figma from "figma";

// O Header do código já traz logo, navegação e login prontos por dentro.
// Não recebe filhos nem props do design. "Platform" e "State: Open" (menu
// mobile aberto) são resolvidos pelo código sozinho.
export default {
  id: "Header",
  imports: ['import { Header } from "compositions";'],
  example: figma.code`<Header />`,
  metadata: { nestable: true },
};
