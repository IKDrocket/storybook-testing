import userEvent from "@testing-library/user-event";
import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "../../stories/Components/ChakraButton.stories";

const { Default, Primary, Loading, Disabled } = composeStories(stories);

afterEach(cleanup);

describe("正常系", () => {
  test("入力値が正しく表示される", () => {
    render(<Default />);
    const button = screen.getByRole("button").textContent;
    expect(button).toBe("Button");
  });

  test("primaryがtrueの場合、背景色がred.400になる", () => {
    render(<Primary />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "red.400" });
  });

  test("primaryがfalseの場合、背景色がgray.50になる", () => {
    render(<Default />);
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "gray.50" });
  });

  test("disabledがtrueの場合、disabledになる", () => {
    render(<Disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("disabledがfalseの場合、disabledにならない", () => {
    render(<Default />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("isLoadingがtrueの場合、disabledになる", () => {
    render(<Loading />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("isLoadingがfalseの場合、disabledにならない", () => {
    render(<Default />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("onClickが呼ばれる", async () => {
    const onClick = jest.fn();
    render(<Default onClick={onClick} />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    expect(onClick).toHaveBeenCalled();
  });
});
