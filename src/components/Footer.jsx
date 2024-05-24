import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="brand.900" color="white" py={4} mt={8}>
      <Flex direction="column" align="center">
        <Text mb={2}>© 2023 Financial Times</Text>
        <Flex>
          <Link href="/contact" mx={2}>
            Contact
          </Link>
          <Link href="/privacy" mx={2}>
            Privacy Policy
          </Link>
          <Link href="/terms" mx={2}>
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;