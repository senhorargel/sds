// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=4185-3778
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Button/Button.tsx
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");

const variant = instance.getEnum("Variant", {
  Primary: "primary",
  Neutral: "neutral",
  Subtle: "subtle",
});

// "Medium" é o padrão do código; só "Small" vira prop.
const size = instance.getEnum("Size", { Small: "small" });

// "Hover" não existe no código: é o CSS que cuida disso. Só "Disabled" vira prop.
const isDisabled = instance.getEnum("State", { Disabled: true });

// Ícones: duas propriedades do Figma trabalham juntas.
//   "Has Icon Start" (booleano) liga ou desliga o ícone.
//   "Icon Start" (instance swap) diz QUAL ícone está no encaixe.
// getInstanceSwap pega o ícone escolhido. executeTemplate() renderiza esse ícone
// com o mapeamento dele. Enquanto os ícones não forem mapeados, aparece um aviso.
const iconStart = instance.getBoolean("Has Icon Start", {
  true: instance.getInstanceSwap("Icon Start")?.executeTemplate().example,
  false: undefined,
});
const iconEnd = instance.getBoolean("Has Icon End", {
  true: instance.getInstanceSwap("Icon End")?.executeTemplate().example,
  false: undefined,
});

export default {
  id: "Button",
  imports: ['import { Button } from "primitives";'],
  // onPress fica fixo: todo botão precisa de uma ação, e isso o Figma não sabe.
  example: figma.code`<Button
  onPress={() => {}}
  ${rp("variant", variant)}
  ${rp("size", size)}
  ${rp("isDisabled", isDisabled)}
>
  ${iconStart}
  ${label}
  ${iconEnd}
</Button>`,
  metadata: { nestable: true },
};
