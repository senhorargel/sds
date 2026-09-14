// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=3729-13362
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tab/Tab.tsx
// component=Tabs

import figma from "figma";

const tabs = figma.selectedInstance.getSlot("Slot");

export default {
  id: "Tabs",
  imports: ['import { Tabs, TabList, TabPanel } from "primitives";'],
  // No Figma só existe a fileira de abas. No código cada aba precisa de um
  // painel de conteúdo (TabPanel) com o mesmo id. Fica um de exemplo.
  example: figma.code`<Tabs>
  <TabList>
    ${tabs}
  </TabList>
  <TabPanel id="Label">Conteúdo da aba</TabPanel>
</Tabs>`,
  metadata: { nestable: true },
};
