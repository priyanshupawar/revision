"use client";

import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Submitted } from "./Submitted";

export default function CartPage() {
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        //   console.log(res.data);
        setCart(res.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const { title, price, image, category } = cart;
  return (
    <>
      <Heading>Cart Page</Heading>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"330px"}
          w={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"230px"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,

              filter: "blur(15px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(20px)",
              },
            }}
          >
            <Image
              src={image}
              rounded={"lg"}
              height={230}
              width={282}
              //   objectFit={"cover"}
              alt="#"
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {category}
            </Text>
            <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Text>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ₹ {Math.floor(price * 100)}
              </Text>
            </Stack>
            <Flex>
              <Button
                onClick={() => {
                  setCount(count - 1);
                }}
              >
                -
              </Button>
              <Text>{count}</Text>
              <Button
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                +
              </Button>
            </Flex>
          </Stack>
        </Box>
      </Center>

      <Center>
        <Box>
          <Heading>Total Price : ₹{Math.floor(count * price * 100)} </Heading>
          <Submitted />
        </Box>
      </Center>
    </>
  );
}
