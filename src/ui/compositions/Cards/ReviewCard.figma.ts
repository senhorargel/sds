// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2236-16106
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=ReviewCard

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const textOf = (layer: string, prop: string, fallback: string) => {
  const h = instance.findInstance(layer);
  return h && h.type === "INSTANCE" ? h.getString(prop) : fallback;
};

// Título e corpo estão nas camadas "Text Heading" e "Text".
const title = textOf("Text Heading", "Text", "Título da avaliação");
const body = textOf("Text", "Text", "Texto da avaliação");
// Nome e data vêm do Avatar Block que está dentro do card.
const name = textOf("Avatar Block", "Title", "Nome");
const date = textOf("Avatar Block", "Description", "Data");

export default {
  id: "ReviewCard",
  imports: ['import { ReviewCard } from "compositions";'],
  // stars: no Figma são 5 ícones de estrela; a quantidade acesa não é propriedade.
  example: figma.code`<ReviewCard
  stars={5}
  ${rp("title", title)}
  ${rp("body", body)}
  ${rp("name", name)}
  ${rp("date", date)}
/>`,
  metadata: { nestable: true },
};
