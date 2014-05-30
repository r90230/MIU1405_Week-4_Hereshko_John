//Windows and Views


//End Windows and Views

//Default Numbers

var pencils = 30;
var pens = 25;
var projects = 32;
var computers = 27;
var sketchpads = 13;

//End Default Numbers

		//Changing Variables

var pencilsField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 40,
	width: 50,
	right: margin*3, 
	height: 30,
	value: 30,
	maxLength: 2,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var labelPencilsChange = Ti.UI.createLabel({
	text: "Pencils",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 40,
	left: margin*3
});

var pensField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 80,
	width: 50,
	right: margin*3, 
	height: 30,
	value: 25,
	maxLength: 2,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var labelPensChange = Ti.UI.createLabel({
	text: "Pens",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 80,
	left: margin*3
}); //

var projectsField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 120,
	width: 50,
	right: margin*3, 
	height: 30,
	value: 32,
	maxLength: 2,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var labelProjectsChange = Ti.UI.createLabel({
	text: "Projects",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 120,
	left: margin*3
}); //

var computersField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 160,
	width: 50,
	right: margin*3, 
	height: 30,
	value: 27,
	maxLength: 2,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var labelComputersChange = Ti.UI.createLabel({
	text: "Computers",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 160,
	left: margin*3
}); //

var sketchpadsField = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	borderColor: "#000",
	color: '#336699',
	top: 200,
	width: 50,
	right: margin*3, 
	height: 30,
	value: 13,
	maxLength: 2,
	keyboardType: Ti.UI.KEYBOARD_NUMBER_PAD
});

var labelSketchpadsChange = Ti.UI.createLabel({
	text: "Sketchpads",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 200,
	left: margin*3
});

var saveTheNumbers = Ti.UI.createLabel({
	borderRadius: 10,
	borderColor: "#000",
	text: "Confirm changes?",
	backgroundColor: "#E47100",
	height: 50,
	width: "80%",
	top: 260,
	textAlign: "center"
});

changeView.add(labelPencilsChange, pencilsField, labelPensChange, pensField, labelProjectsChange,
	projectsField, labelComputersChange, computersField, labelSketchpadsChange, sketchpadsField, saveTheNumbers);

//End Changing Variables


//Displaying numbers main

var labelPencils = Ti.UI.createLabel({
	text: "Pencils",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 40,
	left: margin*3
});

var showPencils = Ti.UI.createLabel({
	text: pencilsField.value,
	font: {fontSize: 15},
	color: "#CC6500",
	top: 40,
	right: margin*3
});

var labelPens = Ti.UI.createLabel({
	text: "Pens",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 80,
	left: margin*3
});

var showPens = Ti.UI.createLabel({
	text: pens,
	font: {fontSize: 15},
	color: "#CC6500",
	top: 80,
	right: margin*3
});

var labelProjects = Ti.UI.createLabel({
	text: "Projects",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 120,
	left: margin*3
});

var showProjects = Ti.UI.createLabel({
	text: projects,
	font: {fontSize: 15},
	color: "#CC6500",
	top: 120,
	right: margin*3
});

var labelComputers = Ti.UI.createLabel({
	text: "Computers",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 160,
	left: margin*3
});

var showComputers = Ti.UI.createLabel({
	text: computers,
	font: {fontSize: 15},
	color: "#CC6500",
	top: 160,
	right: margin*3
});

var labelSketchpads = Ti.UI.createLabel({
	text: "Sketchpads",
	font: {fontSize: 18, fontWeight: "bold"},
	color: "#CC6500",
	top: 200,
	left: margin*3
});

var showSketchpads = Ti.UI.createLabel({
	text: sketchpads,
	font: {fontSize: 15},
	color: "#CC6500",
	top: 200,
	right: margin*3
});

//buttons

var wannaChange = Ti.UI.createLabel({
	borderRadius: 10,
	borderColor: "#000",
	text: "Change Count?",
	backgroundColor: "#E47100",
	height: 50,
	width: "80%",
	top: 260,
	textAlign: "center"
});

var confirmChange = Ti.UI.createLabel({
	borderRadius: 10,
	borderColor: "#000",
	text: "Confirm Count",
	backgroundColor: "#E47100",
	height: 50,
	width: "80%",
	top: 335,
	textAlign: "center"
});

countView.add(labelPencils, showPencils, labelPens, showPens, 
	labelProjects, showProjects, labelComputers, showComputers, 
	labelSketchpads, showSketchpads, wannaChange, confirmChange);

//End Displaying numbers main




//Functions

var changingCount = function(){
	navWindow.openWindow(changeWindow);
};

var confirmingCount = function(fin){
	var fin = Titanium.UI.createAlertDialog({message:'Do you want to confirm count?', buttonNames: ['Yes','No']});
	fin.addEventListener("click", function(ev){
	if (ev.index == 0){
		alert("Count was saved! Thank you.");
	} else if (ev.index == 1){};
});
	fin.show();
};

var savingTheNumbers = function(){
	pencils = pencilsField.value;
	showPencils.text = pencils;
	pens = pensField.value;
	showPens.text = pens;
	projects = projectsField.value;
	showProjects.text = projects;
	computers = computersField.value;
	showComputers.text = computers;
	sketchpads = sketchpadsField.value;
	showSketchpads.text = sketchpads;
	changeWindow.close();
};

saveTheNumbers.addEventListener("click", savingTheNumbers);
wannaChange.addEventListener("click", changingCount);
confirmChange.addEventListener("click", confirmingCount);

//End Functions