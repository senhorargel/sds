// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-14431
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

const instance = figma.selectedInstance;
const heading = figma.properties.children(["Text Content Heading"]);
// Aqui o slot chama "Slot" (no Card Grid Icon chamava "Cards"). Conferir sempre.
const cards = instance.getSlot("Slot");

export default {
  id: "CardGridImage",
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
