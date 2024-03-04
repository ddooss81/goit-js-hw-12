import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import {renderImages} from './js/render-functions.js';
import {getPhotoSearch} from './js/pixabay-api.js';
import {renderMoreImages} from './js/render-functions.js';


const formElem = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-object');
const loaderElem = document.querySelector('.loader');
const loaderElem2 = document.querySelector('.loader2');
const loadMoreBtn = document.querySelector('.more-btn');

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
};

let value;
let page;
let maxPage;

document.addEventListener('DOMContentLoaded', () => {

    hideLoader();
    
    formElem.addEventListener('submit', onSubmit);


    async function onSubmit(e) {
    e.preventDefault();
    showLoader();
    galleryEl.innerHTML = '';
    page = 1;
    value = formElem.querySelector('.input-search').value;
    try {
        const data = await getPhotoSearch(value, page);
        renderImages(data.hits);
    
        maxPage = Math.ceil(data.totalHits / 15);

            let lightbox = new SimpleLightbox('.gallery-object a', options);
            lightbox.on('show.simplelightbox');
            lightbox.refresh();
            formElem.reset();
    
    } catch (error) {
        renderError(error);
         
    } finally {
        hideLoader();
        checkBtnVisibleStatus(); 
    }   
    }
})

    function renderError(error) {
        checkBtnVisibleStatus(); 
        galleryEl.innerHTML = '';
            iziToast.show({
            message: `"${error}". Please try again!`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
            }); 
    };

function showLoader() {
    loaderElem.style.display = 'block';
}

function hideLoader() {
    loaderElem.style.display = 'none';
}
function showLoader2() {
    loaderElem2.classList.remove('hidden');
}

function hideLoader2() {
    loaderElem2.classList.add('hidden');
}

loadMoreBtn.addEventListener("click", async () => {
    page += 1;
    showLoader2();
    try {
        const images = await getPhotoSearch(value, page);
    
        renderMoreImages(images);
    
            let lightbox = new SimpleLightbox('.gallery-object a', options);
            lightbox.on('show.simplelightbox');
            lightbox.refresh();
            formElem.reset();
            
            const height = galleryEl.firstElementChild.getBoundingClientRect().height;
            scrollBy({
                behavior: 'smooth',
                top: height * 2,
            })

        if (page > 1) {
            hideLoader2();
            checkBtnVisibleStatus();
        };
    } catch (error) {
        console.log(error);
    }
});

function endOfCollection () {
    if (page === maxPage) {
        hideLoader2();
        hideMoreLoadBtn();
        iziToast.show({
            message: `"We're sorry, but you've reached the end of search results."`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
        });
        maxPage = undefined;
    
    }
}

loadMoreBtn.addEventListener("click", endOfCollection)

function showMoreLoadBtn() {
  loadMoreBtn.classList.remove('hidden');
}
function hideMoreLoadBtn() {
  loadMoreBtn.classList.add('hidden');
}

function checkBtnVisibleStatus() {
    if (page >= maxPage || maxPage === undefined) {
      hideMoreLoadBtn();
  
  } else {
    showMoreLoadBtn();
  }
}
