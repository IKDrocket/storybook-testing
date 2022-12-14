import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Home from "../../src/pages";

export default {
  title: "Page/Page",
  component: Home,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = () => <Home />;

export const HomePage = Template.bind({});
