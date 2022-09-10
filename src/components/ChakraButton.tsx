import { Button } from "@chakra-ui/react";

type Props = {
  primary?: boolean;
  label: string;
  size?: "sm" | "md" | "lg" | "xs";
  disabled?: boolean;
  isLoading?: boolean;
  onClick: () => void;
};

export const ChakraButton = (props: Props) => {
  const { primary, label, size, disabled, isLoading, onClick } = props;

  const color = primary ? "white" : "gray.900";
  const bgColor = primary ? "red.400" : "gray.50";
  const borderColor = primary ? "gray.50" : "gray.900";

  return (
    <Button
      size={size}
      color={color}
      bgColor={bgColor}
      border="1px"
      borderColor={borderColor}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};
