//The addEventListener approach is widely considered to be the best practice because it has the flexibility of adding multiple listener functions!

console.log('main.js is being loaded by the script tag in html')

/*Here is the common syntax for registering an event listener for a given event:
element.addEventListener(<event-name>, <callback>, <use-capture>);</use-capture> */

const h1El = document.querySelector('h1');

h1El.addEventListener('click', function () {
    console.log('im click on the h1')
})

//logs how many times the botton is clicked in browser console.
const btnEl = document.querySelector('button');
console.log(btnEl);

btnEl.addEventListener('click', function () {
    console.log('button is being clicked')
})