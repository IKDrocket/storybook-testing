import { HStack, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ChakraButton } from "./ChakraButton";
import { ChakraInput } from "./ChakraInput";

export const SubmitForm = () => {
  const toast = useToast();
  const [value, setValue] = useState("");

  return (
    <HStack spacing="10px">
      <ChakraInput value={value} onChange={(e) => setValue(e.target.value)} />
      <ChakraButton
        label="Submit"
        onClick={() =>
          toast({
            title: "Submitted",
            position: "top-right",
            description: value,
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      />
    </HStack>
  );
};
