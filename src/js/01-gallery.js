// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


console.log(galleryItems);

const ulEl = document.querySelector('.gallery');

function creatItemsMarkup () {
    const picture = galleryItems.map(({preview, original, description})=> {
    return `
           <a class="gallery__item" href="${original}">
         <img
           class="gallery__image"
           src="${preview}"
           
           alt=""
           title="${description}"
         />
       </a>`;
    }).join('');
    ulEl.insertAdjacentHTML('beforeend', picture)
    };
    
    creatItemsMarkup ();
    
    ulEl.addEventListener('click', onClick);
    
    function onClick (event) {
        if(event.target.nodeName !== 'IMG') {
          return;
        }
        console.log(event.target.nodeName);
        event.preventDefault();
       
        new SimpleLightbox('.gallery a', { captionDelay:250, scrollZoom:false});

    };

