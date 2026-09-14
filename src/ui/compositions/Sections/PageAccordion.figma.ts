// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-13173
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

// Igual ao exemplo FAQs.tsx do repo: título centralizado + Accordion.
const heading = figma.properties.children(["Text Content Heading"]);
const accordion = figma.properties.children(["Accordion"]);

export default {
  id: "PageAccordion",
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="1600" variant="neutral">
  <Flex container direction="column" alignSecondary="stretch" gap="1200">
    ${heading}
    <Flex container type="third" alignPrimary="center">
      <FlexItem size="major">
        ${accordion}
      </FlexItem>
    </Flex>
  </Flex>
</Section>`,
  metadata: { nestable: true },
};
