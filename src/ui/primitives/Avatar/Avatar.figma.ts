// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-1103
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Avatar/Avatar.tsx
// component=Avatar

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

// A variante "Type" (Image / Initial) decide DUAS props diferentes no código.
// Uma mesma variante do Figma pode alimentar mais de uma prop.
// Quando é Image, o código precisa de um caminho de imagem (o designer troca depois).
const src = instance.getEnum("Type", { Image: "/avatar.png" });
// Quando é Initial, o código recebe a letra que está no texto "Initials".
const initials = instance.getEnum("Type", {
  Initial: instance.getString("Initials"),
});

// "Medium" é o padrão do código, então só Small e Large precisam virar prop.
const size = instance.getEnum("Size", { Small: "small", Large: "large" });

// Variante -> booleano. "Square" vira square={true}. "Circle" é o padrão, não aparece.
const square = instance.getEnum("Shape", { Square: true });

export default {
  id: "Avatar",
  imports: ['import { Avatar } from "primitives";'],
  example: figma.code`<Avatar
  ${rp("src", src)}
  ${rp("alt", src ? "Descreva a imagem" : undefined)}
  ${rp("initials", initials)}
  ${rp("size", size)}
  ${rp("square", square)}
/>`,
  metadata: { nestable: true },
};
