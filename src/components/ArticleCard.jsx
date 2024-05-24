import { Box, Image, Text, VStack } from "@chakra-ui/react";

const ArticleCard = ({ image, headline, description }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" mb={4}>
      <Image src={image} alt={headline} />
      <Box p={4}>
        <VStack align="start">
          <Text fontSize="xl" fontWeight="bold">
            {headline}
          </Text>
          <Text>{description}</Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default ArticleCard;