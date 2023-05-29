import React from "react";
import {
  Box,
  Flex,
  Image,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { logo } from "../assets";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

  const menuItems = [
    { label: "Home", url: "#home", id: "home" },
    { label: "Services", url: "#service", id: "service" },
    { label: "About Us", url: "#aboutus", id: "aboutus" },
    { label: "Contact Us", url: "#contactus", id: "contactus" },
  ];

  const toggleMenu = () => {
    onToggle();
  };

  return (
    <Box bg="#A09E8E" color="#3A5C36" boxShadow="md" py="3">
      <Flex
        maxW="6xl"
        mx="auto"
        align="center"
        justify="space-between"
        px={["4", "6"]}
      >
        <Box fontWeight="bold" fontSize="xl">
          <Image src={logo} w={150} />
        </Box>
        {!isLargerThan768 && (
          <Flex
            display={[isOpen ? "flex" : "none", "flex"]}
            align="center"
            justify={["center", "flex-end"]}
            flexBasis={["100%", "auto"]}
          >
            {menuItems.map((item) => (
              <Box
                key={item.label}
                as="button"
                onClick={() => {
                  const section = document.getElementById(item.id);
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                fontWeight="medium"
                px={["4", "6"]}
                py="2"
                _hover={{ textDecoration: "none", bg: "#7D9E6D" }}
              >
                {item.label}
              </Box>
            ))}
          </Flex>
        )}
        {isLargerThan768 && (
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="ghost"
            />
            <MenuList bg="white" boxShadow="md" rounded="md">
              {menuItems.map((item) => (
                <MenuItem
                  key={item.label}
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        )}
      </Flex>
    </Box>
  );
}

export default Navbar;
