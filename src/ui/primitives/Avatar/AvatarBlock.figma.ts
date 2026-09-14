// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=2010-15581
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarBlock

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getString("Title");
const description = instance.getString("Description");

// Filho por NOME DE CAMADA. Dentro do Avatar Block existe uma camada chamada "Avatar".
// children(["Avatar"]) encontra essa camada e a renderiza usando o mapeamento
// dela (Avatar.figma.ts). É assim que um mapeamento reaproveita outro.
const avatar = figma.properties.children(["Avatar"]);

export default {
  id: "AvatarBlock",
  imports: ['import { AvatarBlock } from "primitives";'],
  example: figma.code`<AvatarBlock
  ${rp("title", title)}
  ${rp("description", description)}
>
  ${avatar}
</AvatarBlock>`,
  metadata: { nestable: true },
};
