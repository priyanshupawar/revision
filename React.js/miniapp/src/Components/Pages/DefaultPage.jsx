import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from "@chakra-ui/react";

function DefaultPage() {
  return (
    <>
      <Box textAlign={"center"} mt={150}>
        <Alert status="error"></Alert>
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Error 404 Page not found !!
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Sorry, the page you are searching for is currently unavailable
          </AlertDescription>
        </Alert>
      </Box>
    </>
  );
}

export default DefaultPage;
