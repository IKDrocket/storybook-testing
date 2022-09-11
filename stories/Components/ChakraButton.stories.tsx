import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChakraButton } from "../../src/components/ChakraButton";

export default {
  title: "Components/Parts/ChakraButton",
  component: ChakraButton,
} as ComponentMeta<typeof ChakraButton>;

const Template: ComponentStory<typeof ChakraButton> = (args) => (
  <ChakraButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Loading = Template.bind({});
Loading.args = {
  label: "Button",
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Button",
  disabled: true,
};
