// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2236-15082
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=StatsCard

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const textOf = (layer: string, prop: string, fallback: string) => {
  const h = instance.findInstance(layer);
  return h && h.type === "INSTANCE" ? h.getString(prop) : fallback;
};

const stat = textOf("Text Heading", "Text", "1.234");
const description = textOf("Text", "Text", "Descrição da métrica");
const icon = instance.getInstanceSwap("Icon")?.executeTemplate().example;

export default {
  id: "StatsCard",
  imports: ['import { StatsCard } from "compositions";'],
  example: figma.code`<StatsCard
  ${rp("icon", icon)}
  ${rp("stat", stat)}
  ${rp("description", description)}
/>`,
  metadata: { nestable: true },
};
