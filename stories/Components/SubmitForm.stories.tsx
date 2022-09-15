import { expect } from "@storybook/jest";
import { userEvent, waitFor, within } from "@storybook/testing-library";
import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SubmitForm } from "../../src/components/SubmitForm";

export default {
  title: "Components/Parts/SubmitForm",
  component: SubmitForm,
} as ComponentMeta<typeof SubmitForm>;

const longText = "test!! ".repeat(10);

const Template: ComponentStory<typeof SubmitForm> = () => <SubmitForm />;

export const Default = Template.bind({});
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.type(canvas.getByRole("textbox"), longText);
  await waitFor(() => {
    expect(canvas.getByRole("textbox")).toHaveValue(longText);
  });
  userEvent.click(canvas.getByRole("button"));
};
