// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=7717-3946
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Cards/Cards.tsx
// component=TestimonialCard

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const textOf = (layer: string, prop: string, fallback: string) => {
  const h = instance.findInstance(layer);
  return h && h.type === "INSTANCE" ? h.getString(prop) : fallback;
};

const heading = textOf("Text Heading", "Text", "Depoimento");
const name = textOf("Avatar Block", "Title", "Nome");
const username = textOf("Avatar Block", "Description", "@usuario");

export default {
  id: "TestimonialCard",
  imports: ['import { TestimonialCard } from "compositions";'],
  example: figma.code`<TestimonialCard
  ${rp("heading", heading)}
  ${rp("name", name)}
  ${rp("username", username)}
  initials="A"
/>`,
  metadata: { nestable: true },
};
