import { useFetchPhotosQuery, usePostPhotoMutation } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
import PhotosListItem from "./PhotosListItem";

const PhotosList = ({ album }) => {
  const { data, error, isFetching } = useFetchPhotosQuery(album);
  const [addPhoto, results] = usePostPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  };

  return (
    <div>
      {isFetching && <Skeleton className="h-8 w-8" times="3" />}
      {error && <div>Error fetching the photos</div>}
      {!isFetching && (
        <div>
          <div className="m-2 flex flex-row items-center justify-between">
            <h3 className="text-lg font-bold">Photos for {album.title}</h3>
            <Button loading={false} onClick={handleAddPhoto}>
              + Add Photo
            </Button>
          </div>
          <div className="mx-8 flex flex-wrap justify-center">
            {data.map((photo) => (
              <PhotosListItem key={photo.id} photo={photo} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotosList;
