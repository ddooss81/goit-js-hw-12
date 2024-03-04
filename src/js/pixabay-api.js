import axios from "axios";

export async function getPhotoSearch(value, currentPage) {
    try {
        const KEY = '42613362-c652a11a2e3360cb77c84ae86';
        const response = await axios.get('https://pixabay.com/api/', {
            params: {
                key: KEY,
                q: value,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: 'true',
                page: currentPage,
                per_page: '15'
            }
        });

        if (response.data.total === 0) {
            throw new Error('No images found');
        }
   
    return response.data;
    } catch (error) {
        throw error; 
    }
}

