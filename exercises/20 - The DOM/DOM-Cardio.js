// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const myUl = document.createElement('ul');

// add three list items with the words "one, two three" in them
const threeItems = ['one', 'two', 'three'];

const makeThreeItems = () => {
  let item;
  for (let i = 0; i < threeItems.length; i += 1) {
    item = document.createElement('li');
    item.textContent = threeItems[i];
    console.log(item);
    myUl.appendChild(item);
  }
};

makeThreeItems();

// put that list into the above wrapper
myDiv.appendChild(myUl);

// create an image
const myImg = document.createElement('img');

// set the source to an image
myImg.src =
  'https://cdn.dribbble.com/users/2332534/screenshots/6007806/002_alana_tomlin_japanese_dancing_frogs.jpg';

// set the width to 250
myImg.width = 250;

// add a class of cute
myImg.classList.add('cute');

// add an alt of Cute Puppy
myImg.alt = 'Cute Puppy';

// Append that image to the wrapper
myDiv.appendChild(myImg);

// with HTML string, make a div, with two paragraphs inside of it
// eslint-disable-next-line no-undef
const createNode = html =>
  new DOMParser().parseFromString(html, 'text/html').body.firstChild;

const divFromHtmlString = createNode('<div><p>Ayo!!</p><p>Second P!</p></div>');
console.log(divFromHtmlString);

// put this div before the unordered list from above

myUl.insertBefore(divFromHtmlString, myUl.childNodes[0]);
// Wes used "el.insertAdjacent" and insertAdjacentHTML
// add a class to the second paragraph called warning
const secondDiv = document.querySelectorAll('div')[1];
// Wes used el.firstElementChild to limit the scope of the query.
secondDiv.classList.add('warning');

// remove the first paragraph These both work!!

// 1. document.querySelectorAll('div')[0].remove();
// /* 2. */ document.querySelector('div:first-of-type').remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height

// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

const generatePlayerCard = (name, age, height) => {
  const playerCardHtml = `
    <div class="playerCard">
    <h2>${name} - ${age}</h2>
    <p>They are ${height} and ${age} years old. In Dog years this person would be ${age *
    7}. That would be a tall dog!</p>
    <button class="delete">Delete</button>
    </div>`;

  return createNode(playerCardHtml);
};

console.log(generatePlayerCard('Sean', 25, '6\'1"'));

// make a new div with a class of cards
const newDiv = document.createElement('div');
newDiv.classList.add('cards');
console.log(newDiv);
// Have that function make 4 cards
const players = [
  ['Sean', 25, '6\'1"'],
  ['Jasmine', 43, '5\'6"'],
  ['Deidra', 29, '5\'9"'],
];
players.map(
  (player, i) =>
    (players[i] = generatePlayerCard(player[0], player[1], player[2]))
);
console.log(players);
// append those cards to the div
const appendNodeArrayToDestination = (nodeArray, destEl) => {
  console.log(destEl);
  for (let i = 0; i < nodeArray.length; i += 1) {
    destEl.appendChild(nodeArray[i]);
  }
};
appendNodeArrayToDestination(players, newDiv);
// put the div into the DOM just before the wrapper element
myDiv.insertAdjacentElement('beforebegin', newDiv);
// Bonus, put a delete Button on each card so when you click it, the whole card is removed
const handleDeleteButtonClick = e => {
  e.target.parentNode.remove();
};
const deleteButtons = document.querySelectorAll('.delete');
deleteButtons.forEach((button, i) => {
  button.addEventListener('click', handleDeleteButtonClick);
});
// select all the buttons!
// make out delete function
// loop over them and attach a listener
