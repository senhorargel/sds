// url=https://www.figma.com/design/nYJ5aM3dt3M6NqufhZLy7T/?node-id=185-852
// source=https://github.com/senhorargel/sds/blob/code-connect-do-zero/src/ui/primitives/Button/Button.tsx
// component=ButtonDanger

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");

// Mesmo nome de variante no Figma ("Primary"), valor diferente no código.
// O ButtonDanger só aceita "danger-primary" e "danger-subtle".
const variant = instance.getEnum("Variant", {
  Primary: "danger-primary",
  Subtle: "danger-subtle",
});

const size = instance.getEnum("Size", { Small: "small" });
const isDisabled = instance.getEnum("State", { Disabled: true });

const iconStart = instance.getBoolean("Has Icon Start", {
  true: instance.getInstanceSwap("Icon Start")?.executeTemplate().example,
  false: undefined,
});
const iconEnd = instance.getBoolean("Has Icon End", {
  true: instance.getInstanceSwap("Icon End")?.executeTemplate().example,
  false: undefined,
});

export default {
  id: "ButtonDanger",
  imports: ['import { ButtonDanger } from "primitives";'],
  example: figma.code`<ButtonDanger
  onPress={() => {}}
  ${rp("variant", variant)}
  ${rp("size", size)}
  ${rp("isDisabled", isDisabled)}
>
  ${iconStart}
  ${label}
  ${iconEnd}
</ButtonDanger>`,
  metadata: { nestable: true },
};
