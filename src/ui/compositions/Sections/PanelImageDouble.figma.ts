// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-13470
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma";

export default {
  id: "PanelImageDouble",
  imports: [
    'import { Panel } from "compositions";',
    'import { Section } from "layout";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="1600">
  <Panel type="half" gap="1200">
    <Image src="/imagem-1.jpg" alt="Descreva a imagem" aspectRatio="4-3" size="medium" />
    <Image src="/imagem-2.jpg" alt="Descreva a imagem" aspectRatio="4-3" size="medium" />
  </Panel>
</Section>`,
  metadata: { nestable: true },
};
