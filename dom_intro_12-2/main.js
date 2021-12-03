console.log('main.js file is loaded by our html document, the script tag')

// Select element off the dom and store it in a variable
const h1 = document.getElementById('title');
// verify we selected the element
console.log(h1, ' <h1 variable')

// If we want to look at the properties of an element (element is an object)
console.dir(h1);

//update the text of the h1
h1.innerText = 'Goodbye Cruel World';

// setting a property on an html element
h1.style.color = 'red';

// Getting a property 
const h1Color = h1.style.color;
console.log(h1Color);

// GETTING WITH A METHOD
const h1ClassName = h1.getAttribute('class');

// set attribute
h1.setAttribute('style', 'color: orange')

const pEl = document.querySelector('.cool');

pEl.innerHTML = `I'm  <strong>HUNGRY</strong> and want a taco!`

console.log(pEl);

const aEl = document.querySelector('a');
aEl.setAttribute('href', 'https://www.google.com')


const commentEls = document.querySelectorAll('.comment');
console.log(commentEls);

/* for...of loop - easy
for(let commentEl of commentEls) {
    console.log(commentEl);
} */

// iterate over the comments same as for... of above and print out the text
//

commentEls.forEach((comm) => {
    console.log(comm.innerText)
    comm.style.color = 'red';
    comm.style.backgroundColor = 'purple';
    comm.style.width = '300px';
})

