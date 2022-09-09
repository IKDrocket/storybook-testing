import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";
import { ChakraButton } from "./ChakraButton";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
};

export const ChakraModal = (props: Props) => {
  const { isOpen, onClose, onSave } = props;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </ModalBody>

        <ModalFooter>
          <ButtonGroup variant="outline" spacing="6px">
            <ChakraButton label="Close" onClick={onClose} />
            <ChakraButton label="Save" primary={true} onClick={onSave} />
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
