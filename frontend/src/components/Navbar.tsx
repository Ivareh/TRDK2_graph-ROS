import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "./Images/brand-logo.png";

/*Component reworked from chakra navigation component*/

export default function Navbar() {
  return (
    <>
      <Box backgroundColor={"#F5F9FF"} px={10} id={"navbar"} marginTop="3">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <RouterLink to="/">
              <Box>
                <img src={Logo} style={{ height: 55, width: 240 }} />
              </Box>
            </RouterLink>
            <HStack spacing={8} display={{ base: "none", md: "flex" }}>
              <RouterLink to="/entity">
                <Text
                  px={3}
                  py={2}
                  rounded={"full"}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  {" "}
                  Grafside{" "}
                </Text>
              </RouterLink>
            </HStack>
          </HStack>

          <Flex id={"idButton"} alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                  px={3}
                  py={2}
                  _hover={{
                    textDecoration: "none",
                    bg: useColorModeValue("gray.200", "gray.700"),
                  }}
                >
                  <Avatar size={"md"} src={"image.png"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"image.png"} />
                  </Center>
                  <br />
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
