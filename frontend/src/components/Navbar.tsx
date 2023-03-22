import {
  Avatar,
  Box,
  Button,
  Center,
  Flex,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import Logo from "./Images/brand-logo.png";

export default function Navbar() {
  return (
    <>
      <Box backgroundColor={"#F5F9FF"} px={10} id={"navbar"} marginTop="3">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <RouterLink to="/">
            <Box>
              <img src={Logo} style={{ height: 55, width: 240 }} />
            </Box>
          </RouterLink>

          <Flex id={"idButton"} alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"md"} src={"image.png"} />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"2xl"} src={"image.png"} />
                  </Center>
                  <br />

                  {/* if user is logged in, show email, if not show Guest */}
                  {/* {user ? (
                    <Center>
                      <p>{user.email}</p>
                    </Center>
                  ) : (
                    <Center>
                      <p>Guest</p>
                    </Center>
                  )}
                  <br />
                  <MenuDivider />
                  */}

                  {/* if user exists, show logout button */}
                  {/*{user ? (
                    <MenuItem onClick={onLogout}>Logout</MenuItem>
                  ) : (
                    <MenuItem onClick={onLogin}>Login</MenuItem>
                  )} */}
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
