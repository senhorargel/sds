// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=56-15608
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarGroup

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// "Spaced" é o padrão do código (spacing="200"), então só "Overlap" vira prop.
const spacing = instance.getEnum("Spacing", { Overlap: "negative-200" });

// O Figma tem dois slots (um por variante): "Avatars" e "Avatars2".
// Pegamos o que existir na variante selecionada.
const avatars = instance.getSlot("Avatars") || instance.getSlot("Avatars2");

// Nem toda propriedade do Figma tem par no código.
// "Show Overflow" e "Number" (+1) NÃO são mapeados: o código calcula o "+N"
// sozinho, a partir da quantidade de filhos e da prop "max".

export default {
  id: "AvatarGroup",
  imports: ['import { AvatarGroup } from "primitives";'],
  example: figma.code`<AvatarGroup ${rp("spacing", spacing)}>
  ${avatars}
</AvatarGroup>`,
  metadata: { nestable: true },
};
