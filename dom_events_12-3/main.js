//The addEventListener approach is widely considered to be the best practice because it has the flexibility of adding multiple listener functions!

console.log('main.js is being loaded by the script tag in html')

//Here is the common syntax for registering an event listener for a given event:
//element.addEventListener(<event-name>, <callback>, <use-capture>);</use-capture></callback>

//const h1El = document.querySelector('h1');

//h1El.addEventListener('click', function () {
// console.log('im clicking on the h1')
//})

//logs how many times the button is clicked in browser console.
const btnEl = document.querySelector('button');
console.log(btnEl)

btnEl.addEventListener('click', function (event) {
    // console.log('button is being clicked')
    // console.log(event)

    // Create a list element
    const liEl = document.createElement('li');
    // console.dir(liEl);

    const inputEl = document.querySelector('input');
    // console.log(inputEl.value) // < - What is inside the input
    // Put whatever text is in the input inside of the list element that we created
    // How do I update the text in my liEl tag?
    liEl.innerText = inputEl.value;

    console.log(liEl)
    // then we want to put that element (li) at the end of ul tag 

    const ulEl = document.querySelector('ul')

    ulEl.appendChild(liEl);

    // clear the input
    inputEl.value = ''
}); // <---- End of the callback function

const ulEl = document.querySelector('ul')
ulEl.addEventListener('click', function (event) {
    event.target.style.textDecoration = 'line-through';
})

const clickThrough = '';