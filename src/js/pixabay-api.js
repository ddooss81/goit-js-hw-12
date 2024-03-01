`use strict`;

export function getPhotoSearch(searchValue) {
    const linkUrl = 'https://pixabay.com/api/';
    const key = '42613362-c652a11a2e3360cb77c84ae86';
    const q = `?key=${key}&q=${searchValue}`;
    const image_type =
        '&image_type=photo&orientation=horizontal&safesearch=true';
    const url = linkUrl + q + image_type;

    return fetch(url)
        .then(res => res.json())
        .then(data => {
        if (data.total === 0) {
            throw new Error('No images found');
        }
        return data;
        });
    }