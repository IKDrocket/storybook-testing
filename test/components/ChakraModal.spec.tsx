import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "../../stories/Components/ChakraModal.stories";

const { Open, Close } = composeStories(stories);

afterEach(cleanup);

describe("正常系", () => {
  test("モーダルが表示される", () => {
    render(<Open />);
    const modal = screen.getByRole("dialog");
    expect(modal).toBeInTheDocument();
  });

  test("モーダルが表示されない", () => {
    render(<Close />);
    const modal = screen.queryByRole("dialog");
    expect(modal).not.toBeInTheDocument();
  });
});
