import { useState } from 'react';
import { searchImages } from './api/Api'
import SearchBar from "./components/SearchBar";
import ImageList from './components/ImageList';

const App = () => {
    const [images, setImages] = useState([])

    const handleSearch = async (term) => {
        const images = await searchImages(term);
        setImages(images)
    }

    return(
        <div>
            <SearchBar handleSearch = { handleSearch } />
            <ImageList images = { images }/>
        </div>
    )
}

export default App;