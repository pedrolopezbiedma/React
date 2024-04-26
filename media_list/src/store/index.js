import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { usersReducer } from "./slices/usersSlice";
import { albumsApi } from "../api/albumsApi";
import { photosApi } from "../api/photosApi";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer,
    [photosApi.reducerPath]: photosApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      albumsApi.middleware,
      photosApi.middleware
    );
  },
});

// Setting up listeners
setupListeners(store.dispatch);

// Exporting thunks
export * from "./thunks/fetchUsers";
export * from "./thunks/addUser";
export * from "./thunks/removeUser";

// Exporting generated query & mutations
export {
  useFetchAlbumsQuery,
  usePostAlbumMutation,
  useRemoveAlbumMutation,
} from "../api/albumsApi";
export {
  useFetchPhotosQuery,
  usePostPhotoMutation,
  useRemovePhotoMutation,
} from "../api/photosApi";
