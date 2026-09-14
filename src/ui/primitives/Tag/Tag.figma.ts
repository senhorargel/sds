// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=56-8830
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tag/Tag.tsx
// component=Tag

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
// "brand" e "primary" são os padrões do código.
const scheme = instance.getEnum("Scheme", {
  Neutral: "neutral",
  Positive: "positive",
  Danger: "danger",
  Warning: "warning",
});
const variant = instance.getEnum("Variant", { Secondary: "secondary" });

// Booleano -> FUNÇÃO. Se "Removable" estiver ligado, o código precisa de um
// onRemove. helpers.react.function() injeta uma função vazia como exemplo.
const onRemove = instance.getBoolean("Removable", {
  true: figma.helpers.react.function("() => {}"),
  false: undefined,
});

export default {
  id: "Tag",
  imports: ['import { Tag } from "primitives";'],
  example: figma.code`<Tag
  ${rp("scheme", scheme)}
  ${rp("variant", variant)}
  ${rp("onRemove", onRemove)}
>
  ${label}
</Tag>`,
  metadata: { nestable: true },
};
