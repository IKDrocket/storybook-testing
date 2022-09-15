import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChakraInput } from "../../src/components/ChakraInput";

export default {
  title: "Components/Parts/ChakraInput",
  component: ChakraInput,
} as ComponentMeta<typeof ChakraInput>;

const Template: ComponentStory<typeof ChakraInput> = (args) => (
  <ChakraInput {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
