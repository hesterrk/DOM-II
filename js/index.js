// Your code goes here

//mouseover

const imageclick = document.querySelector('img');

imageclick.addEventListener('click', (event) => {
	event.target.style.transform = "scale(1.2)";

});


const title = document.querySelector('.logo-heading');

title.addEventListener('mouseover', (event) => {
	event.target.style.color = "blue";
});

 
const anykey = document.querySelector('body');

// when user presses any key on website the effects occur

anykey.addEventListener('keydown', (event) => {
	alert('KeyDown!');
	event.target.style.backgroundColor = "coral";
})

const wheelevent = document.querySelector('body');

// event fires when the user rotates a wheel button on a  a mouse aka like zooming in and out! or mouse scrolls 
//if want to change font size or box size 

wheelevent.addEventListener('wheel', (event) => {

	event.target.style.fontSize = "25px";
	event.target.style.backgroundColor = "lightgreen";

})


const dragevent = document.querySelector('img');

//dragging an element triggers this event

dragevent.addEventListener('drag', (event) => {
	console.log("i was dragged");
	event.target.style.border = "2px red solid";


})



const dropevent = document.querySelector('.nav');

//dropping an element triggers this event

dropevent.addEventListener('drop', (event) => {
	console.log("i was dropped");
	event.target.style.border = "2px blue solid";


});



window.addEventListener('load', (event) => {
	alert("loaded");

})


window.addEventListener('resize', (event) => {
	alert("changed window size");

})



//scroll event


