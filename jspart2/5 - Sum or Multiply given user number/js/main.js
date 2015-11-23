// Write a program that asks the user for a number n and gives him the possibility to choose between computing the sum and computing the product of 1,…,n

function getUserNumber() {
	// store user number
	var userNum = document.getElementById('usernumber').value
	// console user number 
	console.log("Original user number is: " + userNum)

	// add numbers 1 to n
	if ( document.getElementById('addition').checked ) {
		console.log('add')
		var sum = 0
		for(var i = 1; i <= userNum; i++) {
			sum = sum + i
			document.getElementById('result').innerHTML = "Your added sum is: " + sum
		}
	}
	// multiply numbers 1 to n
	if ( document.getElementById('multiply').checked ) {
		console.log('add')
		var sum = 1
		for(var i = 1; i <=userNum; i++) {
			sum = sum * i
			document.getElementById('result').innerHTML = "" + sum
		}
	}
}


	
