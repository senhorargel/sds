// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=348-15098
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma";

// Panels: uma <Section> (faixa da página) com um <Panel> (linha flexível) dentro.
// A imagem não é propriedade no Figma, então fica um <Image> de exemplo.
export default {
  id: "PanelImage",
  imports: [
    'import { Panel } from "compositions";',
    'import { FlexItem, Section } from "layout";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="1600">
  <Panel type="auto">
    <FlexItem size="fill">
      <Image src="/imagem.jpg" alt="Descreva a imagem" aspectRatio="fill" size="large" />
    </FlexItem>
  </Panel>
</Section>`,
  metadata: { nestable: true },
};
