// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2072-9432
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Button/Button.tsx
// component=ButtonGroup

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// "Start" é o padrão do código, então fica fora da lista.
const align = instance.getEnum("Align", {
  Justify: "justify",
  End: "end",
  Center: "center",
  Stack: "stack",
});

// Os botões são FILHOS do grupo: camadas chamadas "Button" (ou "Button Danger").
// children() encontra essas camadas e renderiza cada uma com o próprio mapeamento.
// As propriedades "Button Start" / "Button End" do Figma só escondem ou mostram
// cada botão; a expectativa é que camadas escondidas não entrem no código.
const buttons = figma.properties.children(["Button", "Button Danger"]);

export default {
  id: "ButtonGroup",
  imports: ['import { ButtonGroup } from "primitives";'],
  example: figma.code`<ButtonGroup ${rp("align", align)}>
  ${buttons}
</ButtonGroup>`,
  metadata: { nestable: true },
};
