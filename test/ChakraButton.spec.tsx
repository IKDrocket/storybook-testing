import { cleanup, render } from "@testing-library/react";
import { screen } from "@testing-library/react";

import { ChakraButton } from "@/components/ChakraButton";

type Props = {
  primary?: boolean;
  label: string;
  size?: "sm" | "md" | "lg" | "xs";
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

afterEach(cleanup);
const onClick = jest.fn();

const setup = (props: Props) => render(<ChakraButton {...props} />);

describe("正常系", () => {
  test("入力値が正しく表示される", () => {
    setup({ label: "label value", onClick: onClick });
    const button = screen.getByRole("button").textContent;
    expect(button).toBe("label value");
  });

  test("primaryがtrueの場合、背景色がred.400になる", () => {
    setup({ primary: true, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "red.400" });
  });

  test("primaryがfalseの場合、背景色がgray.50になる", () => {
    setup({ primary: false, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).toHaveStyle({ backgroundColor: "gray.50" });
  });

  test("disabledがtrueの場合、disabledになる", () => {
    setup({ disabled: true, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("disabledがfalseの場合、disabledにならない", () => {
    setup({ disabled: false, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("isLoadingがtrueの場合、disabledになる", () => {
    setup({ isLoading: true, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("isLoadingがfalseの場合、disabledにならない", () => {
    setup({ isLoading: false, label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });

  test("onClickが呼ばれる", () => {
    setup({ label: "label value", onClick: onClick });
    const button = screen.getByRole("button");
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
