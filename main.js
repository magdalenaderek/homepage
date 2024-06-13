const firstName = 'Magdalena';
const age = 38;

console.log(`Witaj, nazywam się ${firstName} i mam ${age} lat.`);

const header = document.querySelector('h1')

console.log(header)

const articleHeader = document.querySelector('.article__header--js')
console.log(articleHeader)
const button = document.querySelector('.article__button--js')
console.log(button)

const clickFunction = (e) => {
    console.log(e);
    articleHeader.innerHTML = 'Niespodzianka!'
}

button.addEventListener('click', clickFunction)