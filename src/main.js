import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { renderImages } from './js/render-functions.js';
import { getPhotoBySearch } from './js/pixabay-api.js';

const formElem = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery-o');
const loaderElem = document.querySelector('.loader');
const loaderElem2 = document.querySelector('.loader2');
const loadMoreBtn = document.querySelector('.more-btn');

const lightbox = new SimpleLightbox('.gallery-o a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
});

let value;
let page;
let maxPage;


function onDocumentReady() {
  hideLoader();

  formElem.addEventListener('submit', onFormSubmit);
}

async function onFormSubmit(event) {
  event.preventDefault();

  showLoader();
  galleryEl.innerHTML = '';

  page = 1;
  value = formElem.querySelector('.input-search').value;

  try {
    const data = await getPhotoBySearch(value, page);
    renderImages(data.hits, page);      
    lightbox.refresh();

    maxPage = Math.ceil(data.totalHits / 15);
    
  } catch (error) {
    renderError(error);
  } finally {
    hideLoader();
    checkBtnVisibleStatus();
  }
}

document.addEventListener('DOMContentLoaded', onDocumentReady);

    function renderError(error) {
        maxPage = undefined;
        checkBtnVisibleStatus() 
        galleryEl.innerHTML = '';
        iziToast.show({
            message: `❌ "${error}". Please try again!`,
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
        const images = await getPhotoBySearch(value, page);
    
        renderImages(images.hits, page);
        lightbox.refresh();
            
        if (page > 1) {
            hideLoader2();
            checkBtnVisibleStatus();
        };
    } catch (error) {
        iziToast.show({
            message: `"${error}". UPS something wrong!`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
        }); 
    }
});

function endOfCollection () {
    if (page === maxPage) {
        maxPage = undefined;
        hideLoader2();
        hideMoreLoadBtn();
        iziToast.show({
            message: `❌ "We're sorry, but you've reached the end of search results."`,
            color: 'red',
            position: 'topRight',
            maxWidth: '400px',
        });
    
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
