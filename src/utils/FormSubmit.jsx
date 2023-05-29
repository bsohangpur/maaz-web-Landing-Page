import { useState } from "react";
import { Flex, Box, Heading, Icon, Text, Button, Link } from "@chakra-ui/react";
import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";

function FormSubmit() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    // Send form data to server or perform other necessary actions
  };

  return (
    <Box mt={12} maxWidth="600px" h={200} mx="auto">
      <Flex alignItems="center" justifyContent="center" flexDir="column">
        <Icon as={CheckCircleIcon} w="12" h="12" color="green.500" />
        <Heading as="h2" size="lg" mt="4">
          Message sent successfully
        </Heading>
        <Text mt="4">
          We have received your message and will get back to you soon.
        </Text>
      </Flex>
    </Box>
  );
}

export default FormSubmit;
