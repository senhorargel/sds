// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15101
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma";

const content = figma.selectedInstance.getSlot("Text Content Flow");

// "Reverse" = mesma coisa, texto antes da imagem. No código é só a ordem dos filhos.
export default {
  id: "PanelImageContentReverse",
  imports: [
    'import { Panel } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="1600">
  <Panel type="half" alignSecondary="center" gap="1200">
    <FlexItem size="half">
      <Flex direction="column" gap="600">
        ${content}
      </Flex>
    </FlexItem>
    <Image src="/imagem.jpg" alt="Descreva a imagem" aspectRatio="4-3" size="medium" />
  </Panel>
</Section>`,
  metadata: { nestable: true },
};
