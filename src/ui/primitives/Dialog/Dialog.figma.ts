// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=192-31534
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Dialog/Dialog.tsx
// component=DialogModal

import figma from "figma";

// O "Dialog" do Figma é a camada escura de fundo + a janela. No código isso é o
// DialogModal. O conteúdo (título, texto, botões) é o "Dialog Body", filho dele,
// que tem o próprio mapeamento (DialogBody.figma.ts).
const body = figma.properties.children(["Dialog Body"]);

export default {
  id: "DialogModal",
  imports: ['import { DialogModal } from "primitives";'],
  // isOpen e onOpenChange são controle de estado do app, não do design: ficam fixos.
  example: figma.code`<DialogModal isDismissable isOpen={true} onOpenChange={() => {}}>
  ${body}
</DialogModal>`,
  metadata: { nestable: true },
};
