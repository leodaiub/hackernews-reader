import {
  chakra,
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  useDisclosure,
  Box,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const mobileNav = useDisclosure();

  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const bg = useColorModeValue("white", "gray.800");

  return (
    <Box pos="relative">
      <chakra.header
        transition="box-shadow 0.2s"
        bg={bg}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center" w="full">
              <Link
                fontSize="2xl"
                color={useColorModeValue("gray.700", "white")}
                fontWeight="700"
                _hover={{
                  color: useColorModeValue("gray.600", "gray.200"),
                  textDecor: "underline",
                }}
              >
                Hacker News
              </Link>
            </Flex>

            <Flex
              justify="flex-end"
              w="full"
              maxW="824px"
              align="center"
              color="gray.400"
            >
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: "0", md: "3" }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
              <IconButton
                display={{ base: "flex", md: "none" }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue("gray.800", "inherit")}
                variant="ghost"
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  );
};

export default Header;
