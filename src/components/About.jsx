import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { about_img } from "../assets";

function Hero() {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  return (
    <Box id="aboutus" bg="gray.50" py={{ base: "80px", md: "100px" }}>
      <Heading as="h3" size="xl" mb="6" textAlign="center">
        About Us
      </Heading>
      <Flex
        direction={{ base: "column", lg: "row" }}
        maxW={"90%"}
        mx="auto"
        justify="space-between"
        align={{ base: "flex-start", lg: "center" }}
        px={{ base: "4", lg: "0" }}
        gap={8}
      >
        <Box flex="1">
          <Heading as="h1" fontSize={{ base: "2xl", md: "4xl" }} mb="6">
            Leading the way in construction services
          </Heading>
          <Text fontSize={{ base: "sm", md: "lg" }} mb="6">
            Welcome to MAARZ, your one-stop solution for all your renovation
            needs. With years of experience in the industry, we are dedicated to
            transforming your spaces into functional and beautiful living
            environments. From kitchens and bathrooms to full-scale home
            remodels, our team of experts will guide you through every step of
            the process to ensure a smooth and successful renovation. Contact us
            today to schedule a consultation and start creating your dream
            space.
          </Text>
          <Button
            colorScheme="orange"
            size={{ base: "md", lg: "lg" }}
            mr={{ base: "0", lg: "4" }}
            mb={{ base: "4", lg: "0" }}
            onClick={() => {
              const section = document.getElementById("contactus");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get in touch
          </Button>
        </Box>

        {isLargerThan768 && (
          <Box flex="1">
            <Image
              src={about_img}
              alt="Construction Site"
              w="100%"
              h="auto"
              rounded="md"
              boxShadow="md"
            />
          </Box>
        )}
      </Flex>
    </Box>
  );
}

export default Hero;
