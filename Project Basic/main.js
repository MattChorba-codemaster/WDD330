var i = 0;

function geoFindMe() {

	if (i < 1) {
		const status = document.querySelector('#status');
		const mapLink = document.querySelector('#map-link');
  
		mapLink.href = '';
		mapLink.textContent = '';
  
		function success(position) {
	  	  const latitude  = position.coords.latitude;
	  	  const longitude = position.coords.longitude;
  
	  	status.textContent = '';
	  	mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	  	mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
	
	  	buttonMaker("Show_All")
	  	buttonMaker("No_MSG")
	  	buttonMaker("Japanese")
	  	buttonMaker("Vietnamese")
	  	buttonMaker("Cantonese")
	  	buttonMaker("Fusian")

	  filterSelection("Show_All")
	}
  
	function error() {
	  status.textContent = 'Unable to retrieve your location';
	}
  
	if(!navigator.geolocation) {
	  status.textContent = 'Geolocation is not supported by your browser';
	} else {
	  status.textContent = 'Locating…';
	  navigator.geolocation.getCurrentPosition(success, error);
	}
	i++;
	}
  
  }
  
document.querySelector('#find-me').addEventListener('click', geoFindMe);

function buttonMaker(buttonName) {
	var x = buttonName;
	console.log(x);
	var searchString = "filterSelection(" + "'" + x + "'" + ")";
	console.log(searchString);
	const buttn = document.createElement("button");
	buttn.className = 'btn';
	const node = document.createTextNode(x);
	buttn.appendChild(node);
	buttn.setAttribute("onclick", searchString);
	const element = document.getElementById("myBtnContainer");
	element.appendChild(buttn);
}
  

function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterDiv");
	if (c == "Show_All") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	for (i = 0; i < x.length; i++) {
		RemoveClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
		}
	}

// Show filtered elements
function AddClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
		element.className += " " + arr2[i];
		}
		}
	}

// Hide elements that are not selected
function RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
		arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
	}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
	var current = document.getElementsByClassName("active");
	current[0].className = current[0].className.replace(" active", "");
	this.className += " active";
	});
	}