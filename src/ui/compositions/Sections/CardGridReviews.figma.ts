// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15213
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

// Este grid não usa Slot: os Review Cards estão numa camada comum ("Card Grid").
// Por isso aqui é children() por nome de camada, não getSlot().
const heading = figma.properties.children(["Text Heading"]);
const cards = figma.properties.children(["Review Card"]);

export default {
  id: "CardGridReviews",
  imports: ['import { Flex, Section } from "layout";'],
  example: figma.code`<Section padding="1600">
  <Flex container direction="column" alignSecondary="stretch" gap="1200">
    ${heading}
    <Flex wrap type="third" gap="1200">
      ${cards}
    </Flex>
  </Flex>
</Section>`,
  metadata: { nestable: true },
};
