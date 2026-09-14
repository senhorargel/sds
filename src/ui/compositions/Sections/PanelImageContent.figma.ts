// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-13474
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma";

// O slot "Text Content Flow" guarda o título e os parágrafos. Cada um
// renderiza com o próprio mapeamento (TextContentHeading, Text).
const content = figma.selectedInstance.getSlot("Text Content Flow");

export default {
  id: "PanelImageContent",
  imports: [
    'import { Panel } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="1600">
  <Panel type="half" alignSecondary="center" gap="1200">
    <Image src="/imagem.jpg" alt="Descreva a imagem" aspectRatio="4-3" size="medium" />
    <FlexItem size="half">
      <Flex direction="column" gap="600">
        ${content}
      </Flex>
    </FlexItem>
  </Panel>
</Section>`,
  metadata: { nestable: true },
};
