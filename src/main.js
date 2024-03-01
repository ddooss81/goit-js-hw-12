`use strict`;

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {renderImages} from './js/render-functions.js';
import {getPhotoSearch} from './js/pixabay-api.js';

const formElem = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-o');
const loaderElem = document.querySelector('.loader');


document.addEventListener('DOMContentLoaded', () => {

    hideLoader();
    
    formElem.addEventListener('submit', onSubmit);

    function onSubmit(e) {
        e.preventDefault();
        showLoader();
        galleryEl.innerHTML = '';
        const value = formElem.querySelector('.input-search').value.trim();
        getPhotoSearch(value)
            .then(data => {
                renderImages(data.hits);
            })
            .catch(error => {
                renderError(error);
            })
            .finally(() => {
                hideLoader();
            });
    }

    function renderError(error) {
        galleryEl.innerHTML = '';
        iziToast.show({
            message: `❌ "${error.message}". Please try again!`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
        });
    }
});

function showLoader() {
    loaderElem.style.display = 'block';
}

function hideLoader() {
    loaderElem.style.display = 'none';
}