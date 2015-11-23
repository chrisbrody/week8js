// Modify the previous program such that only the users Alice and Bob are greeted with their names

// store user name
var usernameOrig = prompt('Is your name Alice or Bob...What is your name?')
// change to lowercase
var username = usernameOrig.toLowerCase()
// check if user is bob or alice
if (username == 'bob' || username == 'alice') {
	document.write('Welcome ', usernameOrig)
} else {
	document.write('Please get out ', usernameOrig)
}