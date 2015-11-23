// Write a program that asks the user for a number n and prints the sum of the numbers 1 to n

// store the users answer
var usernumber = prompt('Choose a number, to see the total from 1 to that number')
// console the user answer
console.log(usernumber)
// store the total of numbers added together
var sum = 0
// loop through usernumber starting frmo 1
for (var i = 1; i <= usernumber; i++) {
	// take the current sum and add it to it self + i
	sum = sum + i
}
// write the total to the screen
document.write('The total from taking a user number and getting the sum of the numbers 1 to this number: ' + usernumber + ' is ' + sum)

