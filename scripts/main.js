let myImage = document.querySelector('img');

myImage.onmouseover = function(){
	myImage.setAttribute('height', "150px");
}

myImage.onmouseout = function() {
	myImage.setAttribute('height', "100px");
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

//document.querySelector('h1').textContent =  prompt('Hello');

function setUserName(){
	let myName = prompt('Please enter your name.');
	if(!myName){
		setUserName();
	} else {
		localStorage.setItem('name',myName);
		myHeading.textContent = 'Mozilla is cool, ' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}