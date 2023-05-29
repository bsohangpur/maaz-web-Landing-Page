import { Box, Flex, Heading, Text, Image, Link } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { projects } from "../Data/data";

function ProjectCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        maxW="xs"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        my={4}
        _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
        transition="all 0.3s ease"
      >
        <Image src={data.imageUrl} alt={data.title} />
        <Box p={6}>
          <Text fontWeight="bold" fontSize="xl">
            {data.title}
          </Text>
          <Text mt={2}>{data.description}</Text>
          {/* <Link href={data.projectUrl} isExternal mt={4}>
            View Project
          </Link> */}
        </Box>
      </Box>
    </motion.div>
  );
}

function Project() {
  return (
    <Box id="project" py={10}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Projects
      </Heading>
      <Flex gap={4} flexWrap='wrap' justify='center' mx={12} align="center">
        {projects.map((value) => {
          return (
            <Box key={value.title}>
              <ProjectCard data={value} />
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
}

export default Project;
