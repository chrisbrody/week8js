// Modify the previous program to create a simple login system
var objPeople = [
	{
		username: 'Chris',
		password: 28
	},
	{
		username: 'Matt',
		password: 29
	},
	{
		username: 'Sam',
		password: 31
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(i = 0; i < objPeople.length; i++) {
		if (username == objPeople[i].username && password == objPeople[i].password) {
			console.log('Logged In!!')
		} else {
			console.log("incorrect username or password")
		}
	}
}