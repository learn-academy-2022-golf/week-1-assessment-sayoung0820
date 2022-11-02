// // ASSESSMENT 1: Coding Practical Questions

// // To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// // Describing your process is required.

// // --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// // Describe your process:

// 1. Create function called fruity
// 2. Setup two parameters - fruit1, fruit2
// 3. Use conditional that will evaluate the strings
// 4. For this function we would use the .length built in method
// 5. If fruit1 has more chars, return fruit1
// 6. If fruit2 has more chars, return fruit2

// // Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// // Expected outcome: "banana"

// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"
// // Expected outcome: "cherry"


// const fruity = (string1, string2) => {
//     if(string1.length > string2.length) {
//         return string1
//  } else if(string1.length < string2.length) {
//         return string2
//   } else {
//         return "Oops, something went wrong"
//   }
// }

// console.log(fruity(fruit1, fruit2)) //banana
// console.log(fruity(fruit3, fruit4)) //cherry



// // --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// const temp1 = 42
// // Expected output: "42 is below boiling point"

// const temp2 = 350
// // Expected output: "350 is above boiling point"

// const temp3 = 212
// // Expected output: "212 is at boiling point"

// // Describe your process:

// 1. Create a function called water
// 2. Input a number to represent the temperature of the water and a number to represent the boiling point of water
// 3. The function should compare the temperature of the water against boiling point of water
// 4. Output should be a string that says "The water is below, at, or above boiling point"
// 5. Use a conditional to make an evaluation on the temperature of the water

// if the temperature of the water evaluates to below 212 degrees, it's below boiling point
// if the temperature of the water evaluates to equal to 212 degrees, it's at boiling point
// if the temperature of the water evaluates to above 212 degrees, it's above boiling point
// we need an else if none of the above is true, it will return an error

// const water = (waterTemp) => {
//     if(waterTemp === 212) {
//         return "212 is at boiling point"
//     } else if(waterTemp > 212) {
//         return "350 is above boiling point"
//     } else if(waterTemp < 212) {
//         return "42 is below boiling point"
//     } else {
//         return "Sorry that is not a valid temp"
//     }
// }

// console.log(water(212))
// console.log(water(350))
// console.log(water(42))
// console.log(water("test"))




// // --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.


// // Describe your process:
// 1. Create a variable called padresRunsarray that will combine the values of two arrays then return the length
// 2. The function uses the .length property
// 3. The .length property looks at the index then returns the number of values in the array


// const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
// const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// // Expected output: 9

// var padresRunsArray = [2, 5, 2, 2, 4, 6, 3, 5, 3,]
// console.log(padresRunsArray.length)




// // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// // Describe your process:

// 1. Create a function called curCohort that will reverse the values of the array
// 2. Convert the string into an array using the split method
// 3. Use the reverse method to reverse the values

// const currentCohort = "Golf 2022"
// Expected output: "2202 floG"

// var curCohort = ("Golf 2022")

// var curCohort = ("Golf 2022".split(""))
// console.log(curCohort)
// console.log(curCohort.reverse(""))




// // --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// // Describe your process:
// 1. Create function called numbersArray
// 2. Use the .lastindexof accessor method

// const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8

// var numbersArray = [13, 34, 42, 5, 5, 10, 27, 42, 10]

// console.log(numbersArray.lastIndexOf(42)) 
// console.log(numbersArray.lastIndexOf(10))
// console.log(numbersArray.lastIndexOf(100)) // -1 because the value does not exist




// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Describe your process:
// 1. Create a function called numbers
// 2. Set up two paramaters called numbers1 and numbers2
// 3. Use the .sort built in method 

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]

// let numbers1 = [79, 80, 72, 73, 82, 77, 76]
// numbers1.sort((a, b) => b - a)
// console.log(numbers1)

// let numbers2 = [59, 68, 62, 59, 66, 67, 66]
// numbers2.sort((a, b) => b - a)
// console.log(numbers2)