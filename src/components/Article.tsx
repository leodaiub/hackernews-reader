/* eslint-disable react-hooks/rules-of-hooks */
import {
  Flex,
  useColorModeValue,
  Box,
  chakra,
  Link,
  Image,
} from "@chakra-ui/react";
import { useGetStoryByIdQuery } from "../features/news/newsAPI";

export function Article({ id }: { id: string }) {
  const { data } = useGetStoryByIdQuery(id);

  return (
    <Box
      mx="auto"
      px={8}
      py={4}
      rounded="lg"
      shadow="lg"
      bg={useColorModeValue("white", "gray.800")}
      minW={{ sm: "sm", md: "2xl" }}
      maxW={{ sm: "sm", md: "2xl" }}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <chakra.span
          fontSize="sm"
          color={useColorModeValue("gray.600", "gray.400")}
        >
          {new Date(data?.time * 1e3).toLocaleDateString()}
        </chakra.span>
        <Link
          px={3}
          py={1}
          bg="gray.600"
          color="gray.100"
          fontSize="sm"
          fontWeight="700"
          rounded="md"
          _hover={{ bg: "gray.500" }}
        >
          {data?.score} +
        </Link>
      </Flex>

      <Box mt={2}>
        <Link
          fontSize="2xl"
          color={useColorModeValue("gray.700", "white")}
          fontWeight="700"
          _hover={{
            color: useColorModeValue("gray.600", "gray.200"),
            textDecor: "underline",
          }}
          href={data?.url}
          isExternal
        >
          {data?.title}
        </Link>
        <chakra.p
          dangerouslySetInnerHTML={{ __html: data?.text }}
          mt={2}
          color={useColorModeValue("gray.600", "gray.300")}
        ></chakra.p>
      </Box>

      <Flex justifyContent="space-between" alignItems="center" mt={4}>
        <Link
          color={useColorModeValue("brand.600", "brand.400")}
          _hover={{ textDecor: "underline" }}
          href={data?.url}
          isExternal
        >
          Read more
        </Link>

        <Flex alignItems="center">
          <Image
            mx={4}
            w={10}
            h={10}
            rounded="full"
            fit="cover"
            display={{ base: "none", sm: "block" }}
            src="https://source.unsplash.com/random/40x80"
            alt="avatar"
          />
          <Link
            color={useColorModeValue("gray.700", "gray.200")}
            fontWeight="700"
            cursor="pointer"
          >
            {data?.by}
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}
