import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
let formData = JSON.parse (localStorage.getItem(STORAGE_KEY)) || {};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(handleformData, 500));
form.addEventListener('submit', handleFormSubmit);

//-----------input------------------
function handleformData (event) {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
    }
//------------submit------------------
function handleFormSubmit(event) {
    event.preventDefault();// Забороняємо перезагружати сторінку
    event.currentTarget.reset();//очищаємо введені дані з форми
    localStorage.removeItem(STORAGE_KEY);  //очищаємо локальні дані
    console.log(formData);
    formData = {};    
}

function removePages () {
    if (formData) {
        let {email, message} = form.elements;
        email.value = formData.email || '';
        message.value = formData.message || '';
    }
}
 removePages(); 