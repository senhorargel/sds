// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=124-8256
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Notification/Notification.tsx
// component=Notification

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getString("Title");
const body = instance.getString("Body");
// "message" é o padrão do código; só Alert vira prop.
const variant = instance.getEnum("Variant", { Alert: "alert" });
const icon = instance.getBoolean("Has Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});
const isDismissible = instance.getBoolean("Dismissible", { true: true, false: undefined });
// O slot "Title2" guarda o botão de ação (ligado por "Has Button").
const action = instance.getSlot("Title2");

export default {
  id: "Notification",
  imports: [
    'import { Notification, Text, TextStrong } from "primitives";',
  ],
  example: figma.code`<Notification
  ${rp("variant", variant)}
  ${rp("icon", icon)}
  ${rp("isDismissible", isDismissible)}
>
  <TextStrong>${title}</TextStrong>
  <Text>${body}</Text>
  ${action}
</Notification>`,
  metadata: { nestable: true },
};
