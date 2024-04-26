import { useFetchAlbumsQuery, usePostAlbumMutation } from "../store";

import Skeleton from "./Skeleton";
import Button from "./Button";
import AlbumsListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = usePostAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  return (
    <div>
      {isFetching && <Skeleton className="h-10 w-full"></Skeleton>}
      {error && <div>Error loading the albums...</div>}
      {!isFetching && (
        <div>
          <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Albums for {user.name}</h3>
            <Button loading={results.isLoading} onClick={handleAddAlbum}>
              + Add Album
            </Button>
          </div>
          {data.map((album) => (
            <AlbumsListItem album={album} key={album.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default AlbumsList;
