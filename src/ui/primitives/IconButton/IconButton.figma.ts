// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=11-11508
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/IconButton/IconButton.tsx
// component=IconButton

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const variant = instance.getEnum("Variant", {
  Primary: "primary",
  Neutral: "neutral",
  Subtle: "subtle",
});
const size = instance.getEnum("Size", { Small: "small" });
const isDisabled = instance.getEnum("State", { Disabled: true });

// Aqui o ícone é sempre visível, então não existe "Has Icon". Só o swap.
const icon = instance.getInstanceSwap("Icon")?.executeTemplate().example;

export default {
  id: "IconButton",
  imports: ['import { IconButton } from "primitives";'],
  // aria-label é OBRIGATÓRIO no código: um botão só com ícone precisa de um
  // texto para leitores de tela. O Figma não tem essa informação, então fica
  // um lembrete fixo para o dev preencher.
  example: figma.code`<IconButton
  aria-label="Descreva a ação"
  onPress={() => {}}
  ${rp("variant", variant)}
  ${rp("size", size)}
  ${rp("isDisabled", isDisabled)}
>
  ${icon}
</IconButton>`,
  metadata: { nestable: true },
};
