import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ChakraModal } from "../../src/components/ChakraModal";

export default {
  title: "Components/Parts/ChakraModal",
  component: ChakraModal,
} as ComponentMeta<typeof ChakraModal>;

const Template: ComponentStory<typeof ChakraModal> = (args) => (
  <ChakraModal {...args} />
);

export const Open = Template.bind({});
Open.args = {
  isOpen: true,
};

export const Close = Template.bind({});
Close.args = {
  isOpen: false,
};
