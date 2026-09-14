// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15133
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma";

const heading = figma.properties.children(["Text Content Heading"]);
const form = figma.properties.children(["Form Newsletter"]);

export default {
  id: "PageNewsletter",
  imports: ['import { Flex, Section } from "layout";'],
  example: figma.code`<Section padding="1600">
  <Flex container direction="column" alignSecondary="center" gap="1200">
    ${heading}
    ${form}
  </Flex>
</Section>`,
  metadata: { nestable: true },
};
