import React, { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Textarea,
  Button,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";

interface FormData {
  programName: string;
  programDescription: string;
  systemNumber: number;
  isYes: boolean;
  isNo: boolean;
  serviceManager: string;
  serviceOwner: string;
  importantNote: string;
  deviation: string;
  file: File | null;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    programName: "",
    programDescription: "",
    systemNumber: 0,
    isYes: true,
    isNo: false,
    serviceManager: "",
    serviceOwner: "",
    importantNote: "",
    deviation: "",
    file: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    // @ts-ignore
    const { name, value, type, checked, files } = e.target;
    const updatedValue =
      type === "checkbox" ? checked : type === "file" ? files?.[0] : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleUpdate = () => {
    // Handle form update
    console.log("Form updated:", formData);
  };

  const handleDelete = () => {
    // Handle form deletion
    console.log("Form deleted:", formData);
  };

  return (
    <Box maxWidth="400px" margin="0 auto">
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl mb={4}>
          <FormLabel>Programnavn:</FormLabel>
          <Input
            type="text"
            name="programName"
            value={formData.programName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Programbeskrivelse:</FormLabel>
          <Textarea
            name="description"
            value={formData.programDescription}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Systemnummer:</FormLabel>

          <NumberInput
            defaultValue={formData.systemNumber}
            // @ts-ignore
            onChange={handleChange}
          >
            <NumberInputField name="age" />
          </NumberInput>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Software modell for BA?:</FormLabel>
          <Checkbox
            name="isYes"
            isChecked={formData.isYes}
            onChange={handleChange}
          >
            Yes
          </Checkbox>
          <Checkbox
            name="isNo"
            isChecked={formData.isNo}
            onChange={handleChange}
          >
            No
          </Checkbox>
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Tjenesteforvalter:</FormLabel>
          <Input
            type="text"
            name="serviceManager"
            value={formData.serviceManager}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Tjenesteeier:</FormLabel>
          <Input
            type="text"
            name="serviceOwner"
            value={formData.serviceOwner}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Merknad, viktig:</FormLabel>
          <Textarea
            name="importantNote"
            value={formData.importantNote}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl mb={4}>
          <FormLabel>Avvik:</FormLabel>
          <Textarea
            name="deviation"
            value={formData.deviation}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Upload File:</FormLabel>
          <Input type="file" name="file" onChange={handleChange} />
        </FormControl>

        <Button type="submit" colorScheme="blue" mr={4}>
          Add
        </Button>
        <Button colorScheme="green" mr={4} onClick={handleUpdate}>
          Update
        </Button>
        <Button colorScheme="red" onClick={handleDelete}>
          Delete
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
