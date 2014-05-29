//Text Field and Label
	//Main site field

var headerLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Log in!",
	font: {fontSize: 25},
	color: "#E47100",
	top: 45,
	left: margin*2.5
});

var userLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Username Here",
	font: {fontSize: 15, fontWeight: "bold"},
	color: "#CC6500",
	top: 90,
	left: margin*3
});

var userField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 120,
	width: 250, 
	height: 30,
	hintText: "Username",
	value: ""
});

var passLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Password (6 character minimum)",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 160,
	color: "#CC6500",
	left: margin*3
});

var passField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	bordercolor: "#000",
	color: '#336699',
	top: 190,
	width: 250, 
	height: 30,
	passwordMask: true,
	hintText: "Password (Six character minimum)"
});

	//Main Site Field end
	
	//Sign Up Field

var emailField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 40,
	width: 250, 
	height: 30,
	hintText: "E-mail Address (lowercase)",
	value: ""
});

var emailLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Email Address (lowercase only!)",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 10,
	color: "#CC6500",
	left: margin*3
});


var userSignupField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 110,
	width: 250, 
	height: 30,
	hintText: "Username",
	value: ""
});

var userSignupLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Username",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 80,
	color: "#CC6500",
	left: margin*3
});

var passSignupField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 185,
	width: 250, 
	height: 30,
	hintText: "Password",
	passwordMask: true
});

var passSignupLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Enter Password (6 Characters!)",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 155,
	color: "#CC6500",
	left: margin*3
});

var passVerifyField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 260,
	width: 250, 
	height: 30,
	hintText: "Verify Password",
	passwordMask: true
});

var verifyLabel = Ti.UI.createLabel({
	shadowColor: "#000",
	text: "Verify Password",
	font: {fontSize: 15, fontWeight: "bold"},
	top: 230,
	color: "#CC6500",
	left: margin*3
});

	//Signup Field end
//End Text Fields and Labels

var loginButton = Ti.UI.createLabel({
	borderRadius: 50,
	borderColor: "#000",
	text: "Sign In",
	backgroundColor: "#E47100",
	height: 50,
	width: "80%",
	top: 255,
	textAlign: "center"
});

var createButton = Ti.UI.createLabel({
	borderColor: "#000",
	borderRadius: 10,
	text: "Sign Up!",
	backgroundColor: "#CC6500",
	height: 50,
	width: "80%",
	top: 340,
	textAlign: "center"
});

var signupButton = Ti.UI.createLabel({
	borderColor: "#000",
	borderRadius: 10,
	text: "Confirm",
	backgroundColor: "#CC6500",
	height: 50,
	width: "80%",
	top: 340,
	textAlign: "center"
});

//functions - main screen

var userCheck = function(){
	if(userField.value === ""){
		alert("No username entered!");
		return false;
	}else{
		passCheck();
		return true;
		passCheck();
	};
};

var passCheck = function (){ 
	if(passField.value.length < 6){
		alert("Password must be 6 characters long.");
	}else if (passField.value.length >= 6){
		alert("Successful login!");
	};
};

//functions - main screen end
//functions - signup screen

var emailCheck = function(){
	var checkValue = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
	if (checkValue.test(emailField.value)){
		userSignupCheck();
	}else{
		alert("Email incorrect! Remember to use xxxx@xxx.com format");
	};
};

var userSignupCheck = function(){
	if(userSignupField.value === ""){
		alert("Username not entered!");
	}else{
		passSignupCheck();
		return true;
	};
};

var passSignupCheck = function(){
	if(passSignupField.value.length < 6){
		alert("Password must be 6 characters or over.");
	}else if (passSignupField.value.length >= 6){
		passVerifyCheck();
	};
};

var passVerifyCheck = function(){
	if(passSignupField.value != passVerifyField.value){
		alert("Passwords do not match!");
	}else if (passSignupField.value === passVerifyField.value){
		alert("Successful signup!");
	};
};

var signupOpen = function(){
	navWindow.openWindow(newWindow);
};

loginButton.addEventListener("click", userCheck);
createButton.addEventListener("click", signupOpen);
signupButton.addEventListener("click", emailCheck);

newView.add(emailLabel, emailField, userSignupLabel, userSignupField, passSignupLabel, passSignupField, verifyLabel, passVerifyField, signupButton);
mainView.add(headerLabel, userLabel, userField, passLabel, passField, loginButton, createButton);
mainWindow.add(border, mainView);