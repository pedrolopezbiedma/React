import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID oXswKX93p0HxqmbSfI9nSEy4XHh6AUYw6M0R9TpLfRU'
        },
        params: {
            query: term
        }
    })

    return response.data.results;
}

export { searchImages }