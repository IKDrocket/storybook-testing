import userEvent from "@testing-library/user-event";
import { cleanup, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "../../stories/Components/SubmitForm.stories";

const { Default } = composeStories(stories);

afterEach(cleanup);

describe("正常系", () => {
  const writeText = async (text: string) => {
    const input = screen.getByRole("textbox");
    await userEvent.type(input, text);
    expect(input).toHaveValue("test");
  };

  test("テキストを入力すると、入力値が正しく表示される", async () => {
    render(<Default />);
    writeText("test");
  });

  test("送信ボタンを押すと、処理が行われる", async () => {
    const mockSubmit = jest.fn();
    render(<Default />);
    writeText("test");
    const button = screen.getByRole("button");
    button.onclick = mockSubmit;
    await userEvent.click(button);
    await waitFor(() => {
      expect(mockSubmit).toHaveBeenCalled();
    });
  });
});
