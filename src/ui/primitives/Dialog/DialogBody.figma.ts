// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-696
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Dialog/Dialog.tsx
// component=Dialog

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const heading = instance.getString("Heading");
const body = instance.getString("Body");

// "card" é o padrão do código; só Sheet vira prop.
const type = instance.getEnum("Type", { Sheet: "sheet" });

// Booleano -> um componente inteiro. Se "Dismissible" estiver ligado, entra o
// botão de fechar (DialogClose). jsxElement() injeta esse trecho pronto.
const close = instance.getBoolean("Dismissible", {
  true: figma.helpers.react.jsxElement("<DialogClose onPress={() => {}} />"),
  false: undefined,
});

// Os botões de ação estão no slot (variante Card usa "Slot", Sheet usa "Slot 2").
const actions = instance.getSlot("Slot") || instance.getSlot("Slot 2");

export default {
  id: "Dialog",
  imports: [
    'import { Dialog, DialogBody, DialogClose, DialogDescription, DialogTitle } from "primitives";',
  ],
  example: figma.code`<Dialog ${rp("type", type)}>
  ${close}
  <DialogTitle>${heading}</DialogTitle>
  <DialogBody>
    <DialogDescription>${body}</DialogDescription>
    ${actions}
  </DialogBody>
</Dialog>`,
  metadata: { nestable: true },
};
