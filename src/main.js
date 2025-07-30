import countriesList from './data/countries.json';
const templateCountries = document.querySelector("#countries");

console.log(countriesList, templateCountries);

const template = Handlebars.compile(templateCountries.innerHTML);

const markup = template (
    {countries:countriesList}
);

console.log(markup);

const gallery = document.querySelector('.gallery');

gallery.insertAdjacentHTML('beforeend', markup);