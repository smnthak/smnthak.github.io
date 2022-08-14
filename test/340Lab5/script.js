// JavaScript Document

//calls the init function when the page is done loading
window.onload = init;

//gets the page ready to respond to user input
function init() {
	//assigns the validateLogin function to the button's click handler
	document.getElementById("loginButton").onclick = validateLogin;
	document.getElementById("updateButton").onclick = validateUpdate;
}

function validateLogin(e) {
	//prevents the form from submitting if there is an error
	e.preventDefault();
	
	//assigns counter variable to the number of errors
	var counter = 0;
	
	//gets the value of the username input
	var isUsername = document.getElementById("username").value;
	//if the text field is empty, alert the user to enter a username
	if (isUsername === "") {
		alert("Username must be entered");
		counter++;
	}
	//if the username is more than 15 characters, alert the user
	if(isUsername && isUsername.length > 15) {
		alert("Username must be less than 15 characters.")
		counter++;
	}
	//assigns usernameFormat variable to correct username format
	var usernameFormat = /^[a-zA-Z0-9]+$/;
	//if the username is in the incorrect format, alert the user
	if (isUsername && !isUsername.match(usernameFormat)) {
		alert("Username cannot have special characters or spaces.")
		counter++;
	}
	
	//gets the value of the password input
	var isPwd = document.getElementById("pwd").value;
	//if the text field is empty, alert the user to enter a password
	if (isPwd === "") {
		alert("Password must be entered");
		counter++;
	} 
	//if the password is not 10-20 characters, alert the user
	if(isPwd && isPwd.length < 10 || isPwd.length > 20) {
		alert("Password must be 10 to 20 characters.")
		counter++;
	}
	
	//if there are no errors, submitLogin and showAccountInfo functions run
	if (counter === 0) {
		submitLogin();
		showAccountInfo();
	}
}

function submitLogin() {	
	//returns the message to the html file
	document.getElementById("loginOutput").innerHTML = "You are logged in!";
}

function showAccountInfo() {
	//shows the updateWindow div on the html file
	var targetDiv = document.getElementById("updateWindow");
	targetDiv.style.display = "block";
}

function validateUpdate(e) {
	//prevents the form from submitting if there is an error
	e.preventDefault();
	
	//assigns counter variable to the number of errors
	var counter = 0;
	
	//gets value of the name input
	var isName = document.getElementById("name").value;
	//if the text field is empty, alert the user to enter a name
	if (isName === "") {
		alert("Name must be entered");
		counter++;
	}
	
	//gets value of the email input
	var isEmail = document.getElementById("email").value;
	//if the text field is empty, alert the user to enter an email
	if (isEmail === "") {
		alert("Email must be entered");
		counter++;
	} 
	//assigns emailFormat variable to correct email format
	var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;	
	//if the email is in the incorrect format, alert the user
	if (isEmail && !isEmail.match(emailFormat)) {
		alert("Invalid email address.")
		counter++;
	}
	
	//gets value of the phone input
	var isPhone = document.getElementById("phone").value;
	//if the text field is empty, alert the user to enter a phone number
	if (isPhone === "") {
		alert("Phone number must be entered");
		counter++;
	} 
	//assigns phoneFormat variable to correct phone format
	var phoneFormat = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;	
	//if the phone number is in the incorrect format, alert the user
	if (isPhone && !isPhone.match(phoneFormat)) {
		alert("Invalid phone number. Must be in xxx-xxx-xxxx format.")
		counter++;
	}
	
	//gets value of the credit card value
	var isCredit = document.getElementById("credit").value;
	//if the text field is empty, alert the user to enter a credit card
	if (isCredit === "") {
		alert("Credit card must be entered.");
		counter++;
	}
	
	//if the credit card number is less than 13 digits long, alert the user
	if (isCredit && isCredit.length < 13) {
		alert("Invalid credit card.");
		counter++;
	}
	
	//if there are no errors, submitUpdate function runs
	if (counter === 0) {
		submitUpdate();
		counter++;
	}

}

//calls the creditCardType function when credit card number is being inputted
var creditInput = document.getElementById("credit");
creditInput.addEventListener("input",creditCardType);
	
function creditCardType() {
	//gets value of the credit card value
	var isCredit = document.getElementById("credit").value;

	//if the card number starts with 4, returns Visa to the html file
	if(isCredit.startsWith("4")) {
		document.getElementById("creditType").innerHTML = "Visa";
	}
	//if the card number starts with 5, returns MasterCard to the html file
	else if(isCredit.startsWith("5")) {
		document.getElementById("creditType").innerHTML = "MasterCard";
	}
	//if the card number starts with 6, returns Discover to the html file
	else if(isCredit.startsWith("6")) {
		document.getElementById("creditType").innerHTML = "Discover";
	}
	//if the card number starts with 3, returns American Express to the html file
	else if(isCredit.startsWith("3")) {
		document.getElementById("creditType").innerHTML = "American Express";
	}else {
		document.getElementById("creditType").innerHTML = "";
	}
	
}

function submitUpdate() {	
	//returns the message to the html file
	document.getElementById("updateOutput").innerHTML = "Successful!";
}
