// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=3729-12963
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Tab/Tab.tsx
// component=Tab

import figma from "figma";

const label = figma.selectedInstance.getString("Label");

// "Active: On" do Figma NÃO vira prop aqui: no código, qual aba está ativa é
// decidido pelo pai (<Tabs defaultSelectedKey="...">). O id liga os dois.

export default {
  id: "Tab",
  imports: ['import { Tab } from "primitives";'],
  example: figma.code`<Tab id="${label}">${label}</Tab>`,
  metadata: { nestable: true },
};
