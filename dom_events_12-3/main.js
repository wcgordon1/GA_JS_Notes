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
    console.log(event.target)
    console.dir(event.target)
    event.target.style.textDecoration = 'line-through';
    event.target.style.backgroundColor = generateRandomColor();

    //update the element that is beling clicked to have strikeThrough

})

//BONUS EXERCISE:::
// call this function in our loop above, and set a random background color everytime we click an li
function generateRandomColor() {
    const r = Math.floor(Math.random() * (256));
    const g = Math.floor(Math.random() * (256));
    const b = Math.floor(Math.random() * (256));
    return `rgb(${r}, ${g}, ${b})`
}

/*            MY CODE - WRONG - Look immediately below.
const pageEL = document.querySelector('body');
pageEL.addEventListener('click', function (event) {
    console.log(event.target)
    console.dir(event.target)
    event.target.style.backgroundColor = generateRandomColor();
})
*/

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', function (e) {

    console.log(e.currentTarget);

    bodyEl.style.backgroundColor = generateRandomColor();
})
/*

const bodyEl = document.querySelector('body');

bodyEl.addEventListener('click', function (e) {

    console.log(e.currentTarget)

    bodyEl.style.backgroundColor = generateRandomColor()
})

*/