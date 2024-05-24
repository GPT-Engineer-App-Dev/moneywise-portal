import { Box, Container, Flex, VStack } from "@chakra-ui/react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import Sidebar from "../components/Sidebar";

const articles = [
  {
    image: "https://via.placeholder.com/150",
    headline: "Breaking News: Market Hits Record High",
    description: "The stock market reached an all-time high today as investors reacted positively to the latest economic data.",
  },
  {
    image: "https://via.placeholder.com/150",
    headline: "Tech Giants Release New Gadgets",
    description: "Leading technology companies have unveiled their latest products, promising to revolutionize the industry.",
  },
  {
    image: "https://via.placeholder.com/150",
    headline: "Global Politics: New Alliances Formed",
    description: "Countries around the world are forming new alliances in response to recent geopolitical shifts.",
  },
];

const trendingArticles = [
  {
    headline: "Editor's Pick: The Future of AI",
    description: "An in-depth look at how artificial intelligence is shaping the future.",
  },
  {
    headline: "Market Analysis: What to Expect This Quarter",
    description: "Experts share their predictions for the upcoming financial quarter.",
  },
  {
    headline: "Opinion: The Impact of Climate Change",
    description: "A thought-provoking piece on the long-term effects of climate change.",
  },
];

const Index = () => {
  return (
    <Box>
      <NavBar />
      <Container maxW="container.xl" mt={8}>
        <Flex direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex="3">
            <VStack spacing={8}>
              {articles.map((article, index) => (
                <ArticleCard
                  key={index}
                  image={article.image}
                  headline={article.headline}
                  description={article.description}
                />
              ))}
            </VStack>
          </Box>
          <Box flex="1" ml={{ md: 8 }} mt={{ base: 8, md: 0 }}>
            <Sidebar articles={trendingArticles} />
          </Box>
        </Flex>
      </Container>
      <Footer />
    </Box>
  );
};

export default Index;