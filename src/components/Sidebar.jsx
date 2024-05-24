import { Box, Text, VStack } from "@chakra-ui/react";

const Sidebar = ({ articles }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" p={4} width="100%">
      <Text fontSize="2xl" mb={4}>
        Trending Articles
      </Text>
      <VStack align="start" spacing={4}>
        {articles.map((article, index) => (
          <Box key={index}>
            <Text fontSize="lg" fontWeight="bold">
              {article.headline}
            </Text>
            <Text>{article.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;