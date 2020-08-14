import itemTemplate from '../templates/gallery-items.hbs';
import products from '../menu.json';

const markup = itemTemplate(products);
const product = document.querySelector('.js-menu');
product.insertAdjacentHTML('beforeend', markup);