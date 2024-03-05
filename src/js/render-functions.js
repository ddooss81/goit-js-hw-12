  
const galleryEl = document.querySelector('.gallery-o');

const options = {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  animation: 250,
};
export function renderImages(array, page) {
    const markup = array
        .map(
            ({
                largeImageURL,
                webformatURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => {
                return `
        <div class="gallery">
            <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" title="${tags}" width="380" height="220" />
            <ul class="info-cards-container">
                <li class="info-cards-elements">likes<span>${likes}</span></li>
                <li class="info-cards-elements">views<span>${views}</span></li>
                <li class="info-cards-elements">comments<span>${comments}</span></li>
                <li class="info-cards-elements">downloads<span>${downloads}</span></li>
            </ul>
            </a>
        </div>
        `;
            }
        )
        .join('');
    if (page === 1) {
        galleryEl.innerHTML = markup;
    } else {
        galleryEl.insertAdjacentHTML("beforeend", markup);
        const height = galleryEl.lastElementChild.getBoundingClientRect().height;
        scrollBy({
            behavior: 'smooth',
            top: height * 3,
        });
    }
}
