import userEvent from "@testing-library/user-event";
import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "../../stories/Components/ChakraInput.stories";

const { Default, Disabled } = composeStories(stories);

afterEach(cleanup);

describe("正常系", () => {
  test("入力値が正しく表示される", () => {
    render(<Default />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveValue("");
  });

  test("disabledがtrueの場合、disabledになる", () => {
    render(<Disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  test("onChangeが呼ばれる", async () => {
    const onChange = jest.fn();
    render(<Default onChange={onChange} />);
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "test");
    expect(onChange).toBeCalled();
  });
});
