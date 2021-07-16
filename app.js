// 0 - 9
// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9);

// Log out numbers from 0 - 9
//  Starting num | limit
// for (let num = 0; num < 6; num++) {
//   console.log(num);
// }

// for (let i = 0; i < 20; i++) {
//   console.log(i)
// }

// const presidents = [
//   "Donald", // 0
//   "Barack", // 1
//   "George Jr", // 2 
//   "Bill", // 3
//   "George", // 4
//   "Ronald", // 5
//   "Jimmy", // 6
//   "Gerald", // 7
//   "Richard", 
//   "Lyndon", 
//   "John", 
//   "Dwight", 
//   "Harry", 
//   "Franklin", 
//   "Herbert", 
//   "Calvin", 
//   "Warren", 
//   "Woodrow", 
//   "William", 
//   "Theodore"
// ];

// // for (let i = 1; i < presidents.length; i += 2) {

// //   console.log(presidents[i]);
// // }

// const groceryList = [
//   'eggs',
//   'bread',
//   'cheese',
//   'orange juice'
// ];

// // for (let i = 0; i < groceryList.length; i++) {
// //   console.log(groceryList[i]);
// // }

// //////////////////////////////////////////////////////
// const menu = [
//   {name: "pizza", glutenFree: false},
//   {name: "salad", glutenFree: true},
//   {name: "donut", glutenFree: false},
//   {name: "steak", glutenFree: true},
//   {name: "chicken", glutenFree: true},
//   {name: "cheeseburger", glutenFree: false}
// ];

// const glutenFreeArray = [];

// for (let i = 0; i < menu.length; i++) {
//   // console.log(menu[i].glutenFree);

//   // if the menu item is gluten free
//   if (menu[i].glutenFree === true) {
//     // then push it into the glutenFree array
//     glutenFreeArray.push(menu[i].name);
//   }
// }

// // console.log(glutenFreeArray);
// //////////////////////////////////////////////////////
// const kids = [
//   {
//     name: 'Jill',
//     favColor: 'blue'
//   },
//   {
//     name: 'Jane',
//     favColor: 'purple'
//   },
//   {
//     name: 'Victor',
//     favColor: 'blue'
//   }
// ]

// // We want to get a new array of the kids that have a
// // fav color of blue

// //////////////////////////////////////////////////////////
// const cars = [
//   {
//     make: 'Toyota',
//     model: 'Tacoma'
//   },
//   {
//     make: 'Honda',
//     model: 'Civic'
//   },
//   {
//     make: 'Toyota',
//     model: 'Scion'
//   },
//   {
//     make: 'Fiat',
//     model: '500'
//   }
// ]

// // We want a new array of just the car models

// const carModels = [];

// for (let i = 0; i < cars.length; i++) {
//   console.log(cars[i].model);

//   carModels.push(cars[i].model);
// }

// console.log(carModels);

// ///////////////////////////////////////////////////////////
// const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9, 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",}, 6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2, "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]

// const notNumbers = [];

// for (let i = 0; i < mixedArray.length; i++) {
//   console.log(mixedArray[i]);


//   if (typeof mixedArray[i] === 'number') {
//     // then push into the new array
//     notNumbers.push(mixedArray[i]);  
//   }
// }

// console.log(notNumbers);

// const someValue = true;
// const someValue2 = 'apple';
// const someValue3 = 5;

// // Use typeof to check the data type of a value
// console.log(typeof someValue); // => 'boolean'
// console.log(typeof someValue2); // => 'string'
// console.log(typeof someValue3); // => 'number'

///////////////////////////////////////////////////////////////
// Functions - Let us save code for later

// Access the button in JS
// Look for the element with the id of button and store
// it in a variable
const buttonEl = document.querySelector('#button');

function sayHi() {
  console.log('Hi there');
}

// When the button is clicked
// call the function

// addEventListener - allows to add an event listener
// Adding an event listener to listen for a click
// on the button.
// when the button is clicked sayHi will be called.
buttonEl.addEventListener('click', sayHi);