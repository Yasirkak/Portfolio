//my work

function visibility(){
	document.getElementById("pVis1").style.visibility = "visible";
}

function hide(){
	document.getElementById("pVis1").style.visibility = "hidden";

}

function visibility2(){
	document.getElementById("pVis2").style.visibility = "visible";
}

function hide2(){
	document.getElementById("pVis2").style.visibility = "hidden";
}

function visibility3(){
	document.getElementById("pVis3").style.visibility = "visible";
}

function hide3(){
	document.getElementById("pVis3").style.visibility = "hidden";
}

//displays and hides the description on my work


function show(){
	document.getElementById("pixerSection").style.display = "none";
	document.getElementById("boinderSection").style.display = "none";

	var a = document.getElementById("sbSection");
	if (a.style.display ==="inline-block") {
		a.style.display = "none";
}else {
	a.style.display = "inline-block";
}
}
	
function show2(){
	document.getElementById("sbSection").style.display = "none";
	document.getElementById("boinderSection").style.display = "none";
	
	var a = document.getElementById("pixerSection");
	if (a.style.display ==="inline-block") {
		a.style.display = "none";
}else {
	a.style.display = "inline-block";
}
}

function show3(){
	document.getElementById("sbSection").style.display = "none";
	document.getElementById("pixerSection").style.display = "none";

	var a = document.getElementById("boinderSection");
	if (a.style.display ==="inline-block") {
		a.style.display = "none";
}else {
	a.style.display = "inline-block";
}
}

//nav-bar changes the color of the nav-bar


function fadeIn(){
	document.getElementById("navTop").style.color = "#980000";
}

function fadeOut(){
		document.getElementById("navTop").style.color = "white";
}

function fadeIn2(){
	document.getElementById("navAboutMe").style.color = "#980000";
}

function fadeOut2(){
		document.getElementById("navAboutMe").style.color = "white";
}

function fadeIn3(){
	document.getElementById("navMyWork").style.color = "#980000";
}

function fadeOut3(){
		document.getElementById("navMyWork").style.color = "white";
}

function fadeIn4(){
	document.getElementById("navContactMe").style.color = "#980000";
}

function fadeOut4(){
		document.getElementById("navContactMe").style.color = "white";
}


//nav-bar scrolls down to specific parts with the nav-bar

function scrollTop(){
	var element = document.getElementById("top");
	element.scrollIntoView({behavior: 'smooth', block: 'start'});
}


function scrollAboutMe(){
	var element = document.getElementById("aboutMe");
	element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function scrollMyWork(){
	var element = document.getElementById("myWork");
	element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

function scrollContactMe(){
	var element = document.getElementById("contactMe");
	element.scrollIntoView({behavior: 'smooth', block: 'start'});
}

//Öppnar ny flik med min linkedin 

function linked(){
	window.open("https://www.linkedin.com/in/yasir-kakar-23557b1b8");
}

