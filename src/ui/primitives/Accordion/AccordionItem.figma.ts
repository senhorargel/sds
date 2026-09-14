// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=7753-4634
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Accordion/Accordion.tsx
// component=AccordionItem

import figma from "figma";

const instance = figma.selectedInstance;

// renderProp("nome", valor) escreve ` nome="valor"` no código.
// Se o valor for undefined, não escreve nada. É o que permite omitir props no padrão.
const rp = figma.helpers.react.renderProp;

// Propriedade de TEXTO no Figma -> getString. Vira a prop "title" do código.
const title = instance.getString("Title");
const content = instance.getString("Content");

// Propriedade de VARIANTE no Figma -> getEnum.
// À esquerda o nome da opção no Figma, à direita o valor que o código espera.
// "Closed" não está na lista de propósito: fechado é o padrão do código,
// então quando o Figma estiver em Closed a prop simplesmente não aparece.
const isExpanded = instance.getEnum("State", { Open: true });

export default {
  id: "AccordionItem",
  imports: ['import { AccordionItem } from "primitives";'],
  example: figma.code`<AccordionItem
  ${rp("title", title)}
  ${rp("isExpanded", isExpanded)}
>
  ${content}
</AccordionItem>`,
  metadata: { nestable: true },
};
