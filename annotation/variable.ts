const apples: number = 5
let speed: string = 'fast'
let now : Date = new Date()
//  Array
let colors: string[] = ['red', 'green', 'yellow', '']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, false, false]

// Classes
class Car {}
let car: Car = new Car()

// Object 
let point: { x: number; y: number } ={
  x:10, 
  y:20
}
//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
  
}
// when to use annotation
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: { x: number; y: number } = JSON.parse(json)
console.log(coordinates);

// 2) When declare a variable on one line with
// and initalizate it later
let words = ['red', 'green', 'blue']
let foundWord: boolean 

for (let i = 0; i < words.length; i++){
  if (words[i] === 'green'){
    foundWord = true
  }
}
// 3) 
let numbers = [-10, 1, 12]
let numberAboveZero: boolean | number = false;

for (let i = 0 ; i < numbers.length; i++) {
  if (numbers[i] > 0){
    numberAboveZero = numbers[i]
  }
}