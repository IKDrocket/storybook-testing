import userEvent from "@testing-library/user-event";
import { cleanup, render, waitFor } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { composeStories } from "@storybook/testing-react";

import * as stories from "../../stories/Pages/Home.stories";

const { HomePage } = composeStories(stories);

afterEach(cleanup);

describe("正常系", () => {
  test("モーダルボタンが表示される", () => {
    render(<HomePage />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("モーダルを表示後、Saveボタンを押すと、アラートが表示される", async () => {
    window.alert = jest.fn();
    render(<HomePage />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      const saveButton = screen.getByRole("button", { name: "Save" });
      userEvent.click(saveButton);
    });
    await waitFor(() => {
      expect(window.alert).toHaveBeenCalled();
    });
  });

  test("モーダルを表示後、ModalCloseButtonを押すと、モーダルが閉じる", async () => {
    render(<HomePage />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      const closeButton = screen.getAllByRole("button", {
        name: "Close",
      })[0];
      userEvent.click(closeButton);
    });
    await waitFor(() => {
      const modal = screen.queryByRole("dialog");
      expect(modal).not.toBeInTheDocument();
    });
  });

  test("モーダルを表示後、Closeボタンを押すと、モーダルが閉じる", async () => {
    render(<HomePage />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    await waitFor(() => {
      const closeButton = screen.getAllByRole("button", {
        name: "Close",
      })[1];
      userEvent.click(closeButton);
    });
    await waitFor(() => {
      const modal = screen.queryByRole("dialog");
      expect(modal).not.toBeInTheDocument();
    });
  });
});
