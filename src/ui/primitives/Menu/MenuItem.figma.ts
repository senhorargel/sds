// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=9762-743
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Menu/Menu.tsx
// component=MenuItem

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const jsx = figma.helpers.react.jsxElement;

const label = instance.getString("Label");
const isDisabled = instance.getEnum("State", { Disabled: true });

const icon = instance.getBoolean("Has Icon", {
  true: instance.getInstanceSwap("Icon")?.executeTemplate().example,
  false: undefined,
});

// Booleano -> elemento com texto dentro. Montamos o JSX como string e
// injetamos com jsxElement().
const description = instance.getBoolean("Has Description", {
  true: jsx(`<MenuDescription>${instance.getString("Description")}</MenuDescription>`),
  false: undefined,
});

// O atalho está numa camada filha "Menu Shortcut"; lemos de dentro dela.
const shortcutLayer = instance.findInstance("Menu Shortcut");
const shortcutText =
  shortcutLayer && shortcutLayer.type === "INSTANCE"
    ? shortcutLayer.getString("Shortcut")
    : "⇧A";
const shortcut = instance.getBoolean("Has Shortcut", {
  true: jsx(`<MenuShortcut>${shortcutText}</MenuShortcut>`),
  false: undefined,
});

export default {
  id: "MenuItem",
  imports: [
    'import { MenuItem, MenuLabel, MenuDescription, MenuShortcut } from "primitives";',
  ],
  example: figma.code`<MenuItem ${rp("isDisabled", isDisabled)}>
  ${icon}
  <MenuLabel>${label}</MenuLabel>
  ${description}
  ${shortcut}
</MenuItem>`,
  metadata: { nestable: true },
};
