import { Flex, useDisclosure } from "@chakra-ui/react";
import type { NextPage } from "next";
import { ChakraButton } from "../component/ChakraButton";
import { ChakraModal } from "../component/ChakraModal";

const Home: NextPage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSave = () => {
    alert("Saved!!");
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      width="100wh"
      height="100vh"
    >
      <ChakraButton label="Open" onClick={onOpen} />
      <ChakraModal isOpen={isOpen} onClose={onClose} onSave={handleSave} />
    </Flex>
  );
};

export default Home;
