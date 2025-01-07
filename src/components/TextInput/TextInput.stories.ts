import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import TextInput from "./TextInput";

const meta = {
  title: "TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
