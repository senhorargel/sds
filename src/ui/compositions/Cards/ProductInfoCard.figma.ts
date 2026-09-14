// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=7753-4465
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=ProductInfoCard

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// Os textos deste card estão num Slot ("Body") com Text, Text Strong e Text Small.
// O Figma não diz qual deles é o nome, o preço ou a descrição, então lemos o que
// dá pelo nome da camada e deixamos exemplo no resto.
const textOf = (layer: string, prop: string, fallback: string) => {
  const h = instance.findInstance(layer);
  return h && h.type === "INSTANCE" ? h.getString(prop) : fallback;
};

const heading = textOf("Text Strong", "Text", "Nome do produto");
const price = textOf("Text Small", "Text", "$ 50");
const description = instance.getBoolean("Show Description", {
  true: textOf("Text", "Text", "Descrição do produto"),
  false: "",
});

export default {
  id: "ProductInfoCard",
  imports: [
    'import { ProductInfoCard } from "compositions";',
    'import { Image } from "primitives";',
  ],
  // rating e asset (a imagem) não existem como propriedade no Figma.
  example: figma.code`<ProductInfoCard
  asset={<Image alt="Descreva o produto" aspectRatio="1-1" size="fill" />}
  ${rp("heading", heading)}
  ${rp("price", price)}
  ${rp("description", description)}
  rating={4}
/>`,
  metadata: { nestable: true },
};
