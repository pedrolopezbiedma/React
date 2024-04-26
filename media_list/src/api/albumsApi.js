import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      // Endpoint to fetch the user's albums
      fetchAlbums: builder.query({
        providesTags: (result, error, arg) => [{ type: "Album", id: arg.id }],
        query: (user) => {
          return {
            method: "GET",
            url: "/albums",
            params: {
              userId: user.id,
            },
          };
        },
      }),
      // Endpoint to create an album to an user
      postAlbum: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Album", id: result.userId },
        ],
        query: (user) => {
          return {
            method: "POST",
            url: "albums",
            body: {
              userId: user.id,
              title: faker.commerce.productName(),
            },
          };
        },
      }),
      // Endpoint to remove an album from an user
      removeAlbum: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Album", id: result.userId },
        ],
        query: (album) => {
          return {
            method: "DELETE",
            url: `albums/${album.id}`,
          };
        },
      }),
    };
  },
});

// Exporting the endpoints.
export const {
  useFetchAlbumsQuery,
  usePostAlbumMutation,
  useRemoveAlbumMutation,
} = albumsApi;
export { albumsApi };
