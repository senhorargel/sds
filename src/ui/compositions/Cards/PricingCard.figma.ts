// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=1444-11846
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=PricingCard

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// CONCEITO NOVO: ler texto de DENTRO de um filho.
// O Pricing Card não expõe os textos como propriedades. Eles estão em camadas
// filhas ("Text Heading", "Text Price", "Button"). findInstance() acha a camada
// pelo nome e getString() lê a propriedade dela. Se a camada não existir,
// usamos um texto de exemplo para o snippet não quebrar.
const textOf = (layer: string, prop: string, fallback: string) => {
  const h = instance.findInstance(layer);
  return h && h.type === "INSTANCE" ? h.getString(prop) : fallback;
};

const heading = textOf("Text Heading", "Text", "Plano");
const price = textOf("Text Price", "Price", "50");
const currency = textOf("Text Price", "Currency", "$");
const priceLabel = textOf("Text Price", "Label", "/ mês");
const action = textOf("Button", "Label", "Assinar");

// "stroke" é o padrão do código; só Brand vira prop.
const variant = instance.getEnum("Variant", { Brand: "brand" });

// "Device" (Desktop/Mobile) não vira prop: o código é responsivo sozinho.

export default {
  id: "PricingCard",
  imports: ['import { PricingCard } from "compositions";'],
  // sku, interval e onAction são dados do produto, não do design: ficam fixos
  // como exemplo para o dev preencher. list também: os itens estão num slot.
  example: figma.code`<PricingCard
  sku="plano-basico"
  interval="month"
  ${rp("heading", heading)}
  ${rp("price", price)}
  ${rp("priceCurrency", currency)}
  ${rp("priceLabel", priceLabel)}
  ${rp("variant", variant)}
  ${rp("action", action)}
  onAction={() => {}}
  list={["Benefício 1", "Benefício 2", "Benefício 3"]}
/>`,
  metadata: { nestable: true },
};
