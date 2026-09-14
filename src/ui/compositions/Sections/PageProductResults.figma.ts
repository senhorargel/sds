// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-13517
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

// A montagem mais complexa do arquivo: filtros à esquerda (slot "Slot"),
// barra de filtros + grade de produtos à direita (slot "Card Grid").
const instance = figma.selectedInstance;
const filters = instance.getSlot("Slot");
const filterBar = figma.properties.children(["Tag Toggle Group"]);
const products = instance.getSlot("Card Grid");

export default {
  id: "PageProductResults",
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="1600">
  <Flex container type="quarter" gap="1200">
    <FlexItem size="minor">
      <Flex direction="column" gap="600">
        ${filters}
      </Flex>
    </FlexItem>
    <FlexItem size="major">
      <Flex direction="column" gap="1200">
        ${filterBar}
        <Flex wrap type="third" gap="1200">
          ${products}
        </Flex>
      </Flex>
    </FlexItem>
  </Flex>
</Section>`,
  metadata: { nestable: true },
};
