import { Button, Stack, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import { Article } from "../../components/Article";
import { useGetStoriesQuery } from "./newsAPI";

export function News() {
  const PER_PAGE = 5;
  const [page, setPage] = useState(1);
  const { data: stories = [] } = useGetStoriesQuery();

  const nextPage = () => {
    setPage((page) => page + 1);
  };

  return (
    <Stack
      bg={useColorModeValue("#F9FAFB", "gray.600")}
      p={50}
      w="full"
      alignItems="center"
      justifyContent="space-between"
      wrap="wrap"
    >
      {stories.slice(0, page * PER_PAGE).map((storyId) => (
        <Article key={storyId} id={storyId} />
      ))}
      <Button
        _hover={{ bg: "gray.500" }}
        bg="gray.800"
        color="#F9FAFB"
        onClick={nextPage}
      >
        More
      </Button>
    </Stack>
  );
}
