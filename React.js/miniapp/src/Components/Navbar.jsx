"use client";

import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaCartArrowDown } from "react-icons/fa";
import logo from "./logo.png";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to={"/"}>
            <Box boxSize="60px" mt={1}>
              <Image src={logo} borderRadius="full" boxSize="50px"></Image>
            </Box>
          </RouterLink>
          <RouterLink to={"/"}>
            <Text>Home</Text>
          </RouterLink>
          <RouterLink to={"/products"}>
            <Text>Product</Text>
          </RouterLink>

          <Flex
            alignItems={"center"}
            justifyContent={"space-evenly"}
            width={"20%"}
          >
            <RouterLink to={"/login"}>
              <Button>Login</Button>
            </RouterLink>
            <RouterLink to={"/register"}>
              <Button>Register</Button>
            </RouterLink>
            <RouterLink to={"/cart/:id"}>
              <Box>
                <FaCartArrowDown size={"20"} cursor={"pointer"} />
              </Box>
            </RouterLink>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
