import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { CropText } from "../utils";
import { service } from "../Data/data";

const Card = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Box
        p={6}
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="#A09E8E"
        _hover={{ boxShadow: "lg", transform: "translateY(-5px)" }}
        transition="all 0.3s ease"
      >
        <Box
          height="200px"
          width="100%"
          bg={`url(${imageUrl}) center center / cover no-repeat`}
        />
        <Box mt="4">
          <Heading textTransform="capitalize" size="md" color={"gray.800"}>
            {title}
          </Heading>
          <Box mt="2" color={"gray.600"}>
            <CropText text={description} />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
};

const Service = () => {
  return (
    <Box id="service" bg={"gray.100"} py={10}>
      <Heading as="h3" size="xl" mb="6" textAlign="center" color={"gray.800"}>
        Our Services
      </Heading>
      <SimpleGrid
        columns={[1, 2, 3, 4]}
        gap={10}
        mx={[4, 6, 10]}
        justifyContent="center"
      >
        {service.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Service;
