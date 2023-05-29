import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Link,
  Icon,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";

function ContactSection() {
  return (
    <Flex
      justifyContent={{ base: "center", md: "space-between" }}
      alignItems="center"
      flexWrap="wrap"
      color="#F5D063"
      mt={4}
    >
      <Box flex="1" w={{ base: "100%", md: "50%" }} mb={{ base: "4", md: "0" }}>
        <Text fontWeight="bold" fontSize={{ base: "xl", md: "2xl" }} mb="2">
          Contact Details
        </Text>
        <Link href="tel:+16475475954">
          <Flex alignItems="center">
            <Icon as={PhoneIcon} mr="2" />
            <Text fontSize={{ base: "sm", md: "md" }} mr="8">
              +1 647 547 5954
            </Text>
          </Flex>
        </Link>
        <Link href="mailto:maarz.inc@gmail.com">
          <Flex alignItems="center" mt="2">
            <Icon as={EmailIcon} mr="2" />
            <Text fontSize={{ base: "sm", md: "md" }}>maarz.inc@gmail.com</Text>
          </Flex>
        </Link>
      </Box>
    </Flex>
  );
}

function Footer() {
  const bgColor = " #6D5843";
  const iconColor = "#F5D063";

  const menuItems = [
    { label: "Home", url: "#home", id: "home" },
    { label: "Services", url: "#service", id: "service" },
    { label: "About Us", url: "#aboutus", id: "aboutus" },
    { label: "Contact Us", url: "#contactus", id: "contactus" },
  ];

  const latestYear = new Date().getFullYear();

  return (
    <Box bg={bgColor} py="6" px={["4", "6"]}>
      <Flex
        maxW="6xl"
        mx="auto"
        justify="space-between"
        gap={6}
        // direction={["column", "row"]}
        // align={["center", "flex-start"]}
      >
        <Box flex="1" w={{ base: "50%", md: "auto" }}>
          <Text fontWeight="bold" color="#F5D063" fontSize="lg" mb="4">
            Maarz Construction
          </Text>
          <Text fontSize="sm" color="#F8A24B ">
            We are committed to providing the best construction services to our
            clients.
          </Text>
          <ContactSection />
        </Box>
        <Flex
          w={{ base: "50%", md: "auto" }}
          flexDirection={{ base: "col", md: "row" }}
          justify="center"
          align="center"
          gap={{ base: 12, md: 4 }}
        >
          <Stack
            color="#F5D063"
            spacing="4"
            direction={{ base: "column", md: "row" }}
            textAlign={["center", "left"]}
          >
            {menuItems.map((item) => {
              return (
                <Text
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  fontWeight="bold" 
                  fontSize="sm"
                  cursor='pointer'
                  
                >
                  {item.label}
                </Text>
              );
            })}
          </Stack>

          <Stack
            spacing="4"
            direction={{ base: "column", md: "row" }}
            align="center"
          >
            <Link href="https://www.instagram.com/maarz.ca/" target="_blank">
              <IconButton
                aria-label="Instagram"
                icon={<FaInstagram size="20" color={iconColor} />}
                variant="ghost"
              />
            </Link>
            <Link href="mailto:maarz.inc@gmail.com">
              <IconButton
                aria-label="Email"
                icon={<FaEnvelope size="20" color={iconColor} />}
                variant="ghost"
              />
            </Link>
            <Link href="tel:+16475475954">
              <IconButton
                aria-label="LinkedIn"
                icon={<FaPhone size="20" color={iconColor} />}
                variant="ghost"
              />
            </Link>
          </Stack>
        </Flex>
      </Flex>
      <Text className=" text-center" fontSize="sm" color="#F8A24B" mt="4">
        © {latestYear} Maarz Construction. All Rights Reserved.
      </Text>
    </Box>
  );
}

export default Footer;
