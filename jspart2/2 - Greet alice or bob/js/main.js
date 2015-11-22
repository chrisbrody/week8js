// Modify the previous program such that only the users Alice and Bob are greeted with their names
var usernameOrig = prompt('Is your name Alice or Bob...What is your name?')
var username = usernameOrig.toLowerCase()
if (username == 'bob' || username == 'alice') {
	document.write('Welcome ', usernameOrig)
} else {
	document.write('Please get out ', usernameOrig)
}