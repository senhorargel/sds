// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15147
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

// Página de produto: imagem à esquerda, coluna de conteúdo à direita.
// A coluna é um Slot ("Column") com textos, campos, botão e accordion.
const column = figma.selectedInstance.getSlot("Column");

export default {
  id: "PageProduct",
  imports: [
    'import { Panel } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="1600">
  <Panel type="half" gap="1200">
    <Image src="/produto.jpg" alt="Descreva o produto" aspectRatio="1-1" size="large" />
    <FlexItem size="half">
      <Flex direction="column" gap="600">
        ${column}
      </Flex>
    </FlexItem>
  </Panel>
</Section>`,
  metadata: { nestable: true },
};
