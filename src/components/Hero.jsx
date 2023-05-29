import {
  Box,
  Heading,
  Button,
  Flex,
  useColorModeValue,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { hero_bg_img } from "../assets";
import {
    MdConstruction
} from "react-icons/md";

const Hero = () => {
  const motionProps = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const fontSize = useBreakpointValue({ base: "2xl", md: "4xl", lg: "5xl" });
  const mb = useBreakpointValue({ base: 2, md: 4, lg: 6 });
  const gap = useBreakpointValue({ base: 2, md: 4, lg: 6 });
  const textColor = useColorModeValue("#0a192f", "#f5f5f5");
  const bg = useColorModeValue("#A09E8E");

  return (
    <Box
      bgImage={hero_bg_img}
      bgSize="cover"
      bgRepeat="no-repeat"
      pt="4"
      pb="12"
      px={{ base: "12", md: "20" }}
      id="home"
    >
      <Box
        className=" backdrop-blur-sm p-4 rounded-md"
        maxW="7xl"
        mx="auto"
        textAlign={{ base: "center", md: "left" }}
      >
        <motion.div {...motionProps}>
          <Flex h="80vh" alignItems="center" justifyContent="center">
            <Box textAlign="center">
              <Heading
                as="h1"
                fontSize={fontSize}
                fontWeight="bold"
                color={textColor}
                mb={mb}
                gap={gap}
                lineHeight="1.2"
              >
                <span className=" text-blue-800 font-bold text-6xl">Maarz</span> Your
                Dream Our Project
              </Heading>
              <Heading size="2xl" fontWeight="bold" mb={6}>
                RENOVATION REDEFINED
              </Heading>
              <Heading size="md" mb={8}>
                Bringing your renovation visions to life, one project at a time
              </Heading>
              <Flex justifyContent="center" flexWrap="wrap">
                <Button
                  leftIcon={<MdConstruction />}
                  colorScheme="blue"
                  variant="solid"
                  size="lg"
                  mr={4}
                  mb={4}
                >
                  <Link href="tel:+16475475954">Book Now</Link>
                </Button>
              </Flex>
            </Box>
          </Flex>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
