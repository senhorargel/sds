// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=18-9389
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Headers/Headers.tsx
// component=HeaderAuth

import figma from "figma";

// "State: Logged In / Logged Out" no Figma. No código, quem decide isso é o
// estado de login do app, não uma prop. Por isso nada é mapeado.
export default {
  id: "HeaderAuth",
  imports: ['import { HeaderAuth } from "compositions";'],
  example: figma.code`<HeaderAuth />`,
  metadata: { nestable: true },
};
