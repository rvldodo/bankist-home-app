/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

/*
/////////////// Style, Attributes, Classes ///////////////
// Selecting elements
console.log(document.documentElement)
console.log(document.head)
console.log(document.body)

const header = document.querySelector('.header')
const allSections = document.querySelectorAll('.section')
console.log(allSections)

document.getElementById('section--1')
const allButtons = document.getElementsByTagName('button')
console.log(allButtons)

console.log(document.getElementsByClassName('btn'))

// Creating and inserting elements
const message = document.createElement('div')
message.classList.add('cookie-message')
message.textContent = 'We use cookied to improved functionality and analytics.'
message.innerHTML = 'We use cookied to improved functionality and analytics. <button class="btn btn--close-cookie"> Got it! </button>'

// header.prepend(message)
header.append(message)
// header.append(message.cloneNode(true))

// header.before(message)
header.after(message)

// Delete elements
document
.querySelector('.btn--close-cookie')
.addEventListener('click', () => {
  // message.remove();
  message.parentElement.removeChild(message)
})

// Styles
message.style.backgroundColor = '#37384d';
message.style.width = '120%';

console.log(message.style.backgroundColor)
console.log(message.style.color)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px'

document.documentElement.style.setProperty('--color-primary', 'orangered')

// Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt)
console.log(logo.className)

logo.alt = 'Beautiful minimalist logo'

// Non-standard
console.log(logo.designer)
console.log(logo.getAttribute('designer'))
logo.setAttribute('company', 'Bankist')

console.log(logo.src)
console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn')
console.log(link.href)
console.log(link.getAttribute('href'))

// Data attributes
console.log(logo.dataset.versionNumber)

// Classes
logo.classList.add('c', 'j')
logo.classList.remove('c', 'j')
logo.classList.toggle('c')
logo.classList.contains('c') // not includes

// Don't use 
logo.className = 'dodo'
*/

/*
/////////////// Types of Events and Events Handlers ///////////////
const h1 = document.querySelector('h1')

const alertH1 = (e) => {
  alert('addEventListener: Great! You are reading the heading :D')

}

h1.addEventListener('mouseenter', alertH1)

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000)

// h1.onmouseenter = (e) => {
//   alert('addEventListener: Great! You are reading the heading :D')
// }
*/

/*
/////////////// Event Propagation in Practice ///////////////
// rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
console.log(randomColor(0, 255))

const navLink = document.querySelector('.nav__link')
const navLinks = document.querySelector('.nav__links')
const nav = document.querySelector('.nav')

navLink.addEventListener('click', (e) => {
  navLink.style.backgroundColor = randomColor()
  console.log('LINK', e.target, e.currentTarget)

  // Stop propagation
  // e.stopPropagation()
})

navLinks.addEventListener('click', (e) => {
  navLinks.style.backgroundColor = randomColor()
  console.log('CONTAINER', e.target, e.currentTarget)
})

nav.addEventListener('click', (e) => {
  nav.style.backgroundColor = randomColor()
  console.log('NAV', e.target, e.currentTarget)
})
*/

/*
/////////////// DOM Traversing ///////////////
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parent
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(el => {
  if(el !== h1) el.style.transform = 'scale(0.5)'
})
*/

//////// Lifecycle DOM Events ////////
document.addEventListener('DOMContentLoaded', function(e) {
    console.log('HTML parsed and DOM tree built!', e);
  });
  
  window.addEventListener('load', function(e) {
    console.log('Page fully loaded', e);
  });
  
  // window.addEventListener('beforeunload', function(e) {
  //   e.preventDefault();
  //   console.log(e);
  //   e.returnValue = '';
  // })