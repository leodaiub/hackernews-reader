import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const storiesApi = createApi({
  reducerPath: "storiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hacker-news.firebaseio.com/v0/",
  }),
  endpoints: (builder) => ({
    getStories: builder.query<string[], void>({
      query: () => "topstories.json?print=pretty",
    }),
    getStoryById: builder.query<any, string>({
      query: (id) => `item/${id}.json?print=pretty`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetStoriesQuery, useGetStoryByIdQuery } = storiesApi;
