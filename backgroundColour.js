var h3 = document.querySelector("h3");
var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var body = document.getElementById("body"); 

function changeBackground (){
	body.style.background = "linear-gradient(to right,"+ colour1.value+ "," + colour2.value + ")";
	h3.textContent = body.style.background
}

colour1.addEventListener("input", changeBackground)

colour2.addEventListener("input", changeBackground)

