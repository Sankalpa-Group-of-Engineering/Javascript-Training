let numberList = [1, 2, 3]
numberList[0] = 10
console.log(numberList) // [10, 2, 3]

let nums = [1, 2, 3]
let numbers = [1, 2, 3] //nums
console.log(nums == numbers) // false

let userOne = {
  name: 'Ram',
  role: 'teaching',
  country: 'Nepal'
}
let userTwo = {
  name: 'Ram',
  role: 'teaching',
  country: 'Nepal'
}
console.log(userOne == userTwo) // false

let userThree = userTwo
console.log(userThree == userTwo)  // true