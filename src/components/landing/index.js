import { Box, Button, Center, Link, Text } from "@chakra-ui/react";
import { LOGIN } from "lib/routes";

export default function LandingPage() {
  return (
    <Center w="100%" h="100vh">
      <Box>
        <Text size={'32px'}>Landing Page</Text>
        <Button
          mt="4"
          colorScheme="teal"
          size="md"
          w="full"
          as={Link}
          to={LOGIN}
        >
          Login
        </Button>
      </Box>
    </Center>
  );
}
