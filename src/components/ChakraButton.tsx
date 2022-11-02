import { Button, ButtonProps } from "@chakra-ui/react";
// ______________________________________________________
//
export type Props = {
  primary?: boolean;
} & ButtonProps;
// ______________________________________________________
//
export const ChakraButton: React.FC<Props> = ({
  primary = false,
  children = "action",
  fontSize = "14px",
  colorScheme = primary ? "red" : "gray",
  border = primary ? "0px" : "1px",
  size = "sm",
  ...props
}) => {
  return (
    <Button
      fontSize={fontSize}
      size={size}
      colorScheme={colorScheme}
      border={border}
      {...props}
    >
      {children}
    </Button>
  );
};
