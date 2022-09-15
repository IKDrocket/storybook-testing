import { Input } from "@chakra-ui/react";
import { ChangeEvent } from "react";

type Props = {
  value?: string;
  disabled?: boolean;
  width?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ChakraInput = (props: Props) => {
  const { value, onChange, disabled, width = "192px" } = props;
  return (
    <Input
      placeholder="Basic usage"
      onChange={onChange}
      value={value}
      disabled={disabled}
      width={width}
    />
  );
};
