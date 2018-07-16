/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
document.getElementById("matCount").innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
document.getElementById("msgCount").innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
document.getElementById("fullname").innerHTML = "Ronald McDonald";

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
document.getElementById("age").innerHTML = 63;

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
var jobBox = document.createElement("div");
var targetDiv = document.getElementById("data");
jobBox.id = "job";
jobBox.innerHTML = "Clown and Restauranteur";
targetDiv.appendChild(jobBox);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
var hobBox = document.createElement("div");
hobBox.id = "hobbies";
hobBox.innerHTML = "Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.";
targetDiv.appendChild(hobBox);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
var locBox = document.createElement("div");
locBox.id = "location";
locBox.innerHTML = "Honolulu, HI";
targetDiv.appendChild(locBox);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
var wantsBox = document.createElement("div");
wantsBox.id = "wants";
wantsBox.innerHTML = "Looking for a Mrs. McDonald.";
targetDiv.appendChild(wantsBox);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
var pro2 = document.createElement("p");
var targetDiv2 = document.getElementById("profile");
pro2.id = "pro2";
pro2.innerHTML = "I am Ronald. I like fries and stealing other people's french fries.";
targetDiv2.appendChild(pro2);


//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
var fName = document.getElementsByClassName("firstName");
fName[0].innerHTML = "Wendy";

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
var otherAgeArr = document.getElementsByClassName("otherAge");
otherAgeArr[0].innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
var statusArr = document.getElementsByClassName("status");
statusArr[0].innerHTML = "Single Mother";

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
fName[1].innerHTML = "Peko Chan";

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
otherAgeArr[1].innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
var images = document.getElementsByClassName("other")
images[2].src = "http://images6.fanpop.com/image/photos/39100000/Selena-Gomez-katrina-and-clau-E2-9D-A4-39169808-386-500.png";

 //div with class name of firstName
 fName[2].innerHTML = "Selena";

 //div with class name of otherAge
 otherAgeArr[2].innerHTML = 26;

 //div with class name of status
 statusArr[2].innerHTML = "Justin's Ex";

 //div with class anem of Motto
 var mottoArr = document.getElementsByClassName("motto");
 mottoArr[2].innerHTML = "I've been running with the wolves.";




