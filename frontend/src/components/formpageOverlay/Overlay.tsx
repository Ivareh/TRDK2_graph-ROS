import React from "react";
import {
  Radio,
  Stack,
  RadioGroup,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import Form from "./Form";

/**
 *
 * Creates overlay that shows the form for adding, edeting and deleting nodes, relations and deviation
 */

export default function Overlay() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  //const scrollBehavior = React.useState("inside");

  const btnRef = React.useRef(null);
  return (
    <>
      <Button
        mt={2}
        ref={btnRef}
        onClick={onOpen}
        rightIcon={<ArrowForwardIcon />}
        size="sm"
        marginRight={2}
      >
        Rediger
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Skjema</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
