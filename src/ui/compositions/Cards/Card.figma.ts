// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2142-11380
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=Card

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// COMPOSIÇÃO: o Card é feito de outros componentes (TextHeading, Text, Button Group).
// Por isso o snippet dele tem filhos, e cada filho usa o próprio mapeamento.

const heading = instance.getString("Heading");
const body = instance.getString("Body");

// "vertical" e "default" são os padrões do código; só os outros valores viram prop.
const direction = instance.getEnum("Direction", { Horizontal: "horizontal" });
const variant = instance.getEnum("Variant", { Stroke: "stroke" });

// Asset: três propriedades do Figma decidem UMA prop do código.
//   "Asset" (booleano) liga/desliga; "Asset Type" escolhe Icon ou Image;
//   "Icon" (swap) diz qual ícone. Para Image, injetamos um <Image> fixo com
//   jsxElement(), porque o Figma não sabe o caminho da imagem.
const asset = instance.getBoolean("Asset", {
  true: instance.getEnum("Asset Type", {
    Icon: instance.getInstanceSwap("Icon")?.executeTemplate().example,
    Image: figma.helpers.react.jsxElement(
      '<Image alt="Descreva a imagem" aspectRatio="1-1" size="small" />',
    ),
  }),
  false: undefined,
});

// Os botões ficam num "Button Group" dentro do Card. O booleano "Button" liga/desliga.
const actions = instance.getBoolean("Button", {
  true: figma.properties.children(["Button Group"]),
  false: undefined,
});

// Slot extra para conteúdo livre que o designer adicionar.
const extra = instance.getSlot("Body2");

export default {
  id: "Card",
  imports: [
    'import { Card } from "compositions";',
    'import { Image, Text, TextHeading } from "primitives";',
  ],
  example: figma.code`<Card
  ${rp("asset", asset)}
  ${rp("direction", direction)}
  ${rp("variant", variant)}
>
  <TextHeading>${heading}</TextHeading>
  <Text>${body}</Text>
  ${actions}
  ${extra}
</Card>`,
  metadata: { nestable: true },
};
