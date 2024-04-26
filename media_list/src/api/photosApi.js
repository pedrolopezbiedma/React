import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const photosApi = createApi({
  reducerPath: "photos",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3005",
  }),
  endpoints: (builder) => {
    return {
      // Endpoint to fetch the albums photos
      fetchPhotos: builder.query({
        providesTags: (result, error, arg) => [{ type: "Photo", id: arg.id }],
        query: (album) => {
          return {
            method: "GET",
            url: "/photos",
            params: {
              albumId: album.id,
            },
          };
        },
      }),
      // Endpoint to add a new photo to an album
      postPhoto: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Photo", id: result.albumId },
        ],
        query: (album) => {
          return {
            method: "POST",
            url: "/photos",
            body: {
              albumId: album.id,
              url: faker.image.url({ width: 150, height: 150 }),
            },
          };
        },
      }),
      // Endpoint to remove a photo from an album
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, arg) => [
          { type: "Photo", id: result.albumId },
        ],
        query: (album) => {
          return {
            method: "DELETE",
            url: `photos/${album.id}`,
          };
        },
      }),
    };
  },
});

// Exporting the endpoints.
export const {
  useFetchPhotosQuery,
  usePostPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
