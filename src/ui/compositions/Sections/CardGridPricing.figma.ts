// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-14983
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

const instance = figma.selectedInstance;
// Em vez de título, este grid tem um seletor Mensal/Anual (Navigation Pill List).
const toggle = figma.properties.children(["Navigation Pill List"]);
const cards = instance.getSlot("Card Grid");

export default {
  id: "CardGridPricing",
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="1600" variant="stroke">
  <Flex container direction="column" alignSecondary="stretch" gap="1200">
    <Flex alignPrimary="center">
      ${toggle}
    </Flex>
    <Flex wrap type="third" gap="1200">
      ${cards}
    </Flex>
  </Flex>
</Section>`,
  metadata: { nestable: true },
};
