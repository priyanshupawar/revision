import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

function ProductCard({ id, title, price, image, description, category }) {
  return (
    <>
      <Card maxW="sm">
        <RouterLink to={`/products/${id}`}>
          <CardBody>
            <Image
              boxSize={"230px"}
              src={image}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{title}</Heading>
              <Text>{category}</Text>
              <Text color="blue.600" fontSize="2xl">
                ₹ {price * 100}
              </Text>
            </Stack>
          </CardBody>
        </RouterLink>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
}

export default ProductCard;
