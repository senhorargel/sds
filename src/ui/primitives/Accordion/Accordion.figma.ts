// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=7753-4779
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Accordion/Accordion.tsx
// component=Accordion

// As três linhas de comentário acima são o que faz o CLI reconhecer este arquivo
// como um mapeamento. Sem a linha "url=" ele é ignorado.
//   url       = qual componente do Figma (link com node-id)
//   source    = onde está o código deste componente
//   component = nome do componente no código

import figma from "figma";

// "instance" é o componente que o designer selecionou no Figma.
const instance = figma.selectedInstance;

// No Figma, o Accordion tem um Slot chamado "Items". É ali que o designer
// coloca os Accordion Items. getSlot() pega tudo que está dentro do slot e
// converte em código usando o mapeamento de cada item (AccordionItem.figma.ts).
const items = instance.getSlot("Items");

export default {
  // id: nome único deste mapeamento
  id: "Accordion",
  // imports: a linha de import que o dev vai copiar junto com o exemplo
  imports: ['import { Accordion } from "primitives";'],
  // example: o código que aparece no Dev Mode. ${...} injeta os valores lidos acima.
  example: figma.code`<Accordion>
  ${items}
</Accordion>`,
  // nestable: este componente pode aparecer dentro de outro (ex.: numa seção de página)
  metadata: { nestable: true },
};
