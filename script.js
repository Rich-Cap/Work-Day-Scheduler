// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
var currentDay = moment();
var momentTime = moment('LT');
// console.log(currentDay);
console.log(moment());
console.log(moment('12 10').isBefore(moment()));
// console.log(currentDay.format('dddd ' + 'MMM Do YYYY'));
$("#currentDay").text(currentDay.format('LLLL'));
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
var hours =
	["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm",]

var scheduler = $(".container");
var save = $(".saveBtn");

$.each(hours, function (i, time) {
	scheduler.append('<div class="time-block"><div class="row"><div class="hour">' + hours[i] + '</div><textarea class="description" id="time' + hours[i] + '"></textarea><button class="saveBtn" id="save' + hours[i] + '"><i class="fas fa-save"></i></button></div></div>');
	console.log(time);
});

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

if ((new Date().getHours()) === 9){
	$("#time9am").attr("class", "present");
} else if ((new Date().getHours()) > 9){
	$("#time9am").attr("class", "past");
} else{
	$("#time9am").attr("class", "future");
};

if ((new Date().getHours()) === 10){
	$("#time10am").attr("class", "present");
} else if ((new Date().getHours()) > 10){
	$("#time10am").attr("class", "past");
} else{
	$("#time10am").attr("class", "future");
};

if ((new Date().getHours()) === 11){
	$("#time11am").attr("class", "present");
} else if ((new Date().getHours()) > 11){
	$("#time11am").attr("class", "past");
} else{
	$("#time11am").attr("class", "future");
};

if ((new Date().getHours()) === 12){
	$("#time12pm").attr("class", "present");
} else if ((new Date().getHours()) > 12){
	$("#time12pm").attr("class", "past");
} else{
	$("#time12pm").attr("class", "future");
};

if ((new Date().getHours()) === 13){
	$("#time1pm").attr("class", "present");
} else if ((new Date().getHours()) > 13){
	$("#time1pm").attr("class", "past");
} else{
	$("#time1pm").attr("class", "future");
};

if ((new Date().getHours()) === 14){
	$("#time2pm").attr("class", "present");
} else if ((new Date().getHours()) > 14){
	$("#time2pm").attr("class", "past");
} else{
	$("#time2pm").attr("class", "future");
};

if ((new Date().getHours()) === 15){
	$("#time3pm").attr("class", "present");
} else if ((new Date().getHours()) > 15){
	$("#time3pm").attr("class", "past");
} else{
	$("#time3pm").attr("class", "future");
};

if ((new Date().getHours()) === 16){
	$("#time4pm").attr("class", "present");
} else if ((new Date().getHours()) > 16){
	$("#time4pm").attr("class", "past");
} else{
	$("#time4pm").attr("class", "future");
};

if ((new Date().getHours()) === 17){
	$("#time5pm").attr("class", "present");
} else if ((new Date().getHours()) > 17){
	$("#time5pm").attr("class", "past");
} else{
	$("#time5pm").attr("class", "future");
};

// WHEN I click into a timeblock
// THEN I can enter an event
var input9am = document.querySelector("#time9am");
var input10am = document.querySelector("#time10am");
var input11am = document.querySelector("#time11am");
var input12pm = document.querySelector("#time12pm");
var input1pm = document.querySelector("#time1pm");
var input2pm = document.querySelector("#time2pm");
var input3pm = document.querySelector("#time3pm");
var input4pm = document.querySelector("#time4pm");
var input5pm = document.querySelector("#time5pm");

var display9am = document.querySelector("#time9am");
var display10am = document.querySelector("#time10am");
var display11am = document.querySelector("#time11am");
var display12pm = document.querySelector("#time12pm");
var display1pm = document.querySelector("#time1pm");
var display2pm = document.querySelector("#time2pm");
var display3pm = document.querySelector("#time3pm");
var display4pm = document.querySelector("#time4pm");
var display5pm = document.querySelector("#time5pm");

var saveButton = $(".saveBtn");

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
saveButton.on("click", function(event) {
	saveSchedule();
});

function saveSchedule(){
	event.preventDefault();

	// create schedule object from submission
	var schedule = {
	time9am: input9am.value.trim(),
	time10am: input10am.value.trim(),
	time11am: input11am.value.trim(),
	time12pm: input12pm.value.trim(),
	time1pm: input1pm.value.trim(),
	time2pm: input2pm.value.trim(),
	time3pm: input3pm.value.trim(),
	time4pm: input4pm.value.trim(),
	time5pm: input5pm.value.trim(),
	};

	// set new submission
	localStorage.setItem("schedule", JSON.stringify(schedule));	
};

// WHEN I refresh the page
// THEN the saved events persist
	// get most recent submission
	var lastSumbit = JSON.parse(localStorage.getItem("schedule"));
	display9am.textContent = lastSumbit.time9am;
	display10am.textContent = lastSumbit.time10am;
	display11am.textContent = lastSumbit.time11am;
	display12pm.textContent = lastSumbit.time12pm;
	display1pm.textContent = lastSumbit.time1pm;
	display2pm.textContent = lastSumbit.time2pm;
	display3pm.textContent = lastSumbit.time3pm;
	display4pm.textContent = lastSumbit.time4pm;
	display5pm.textContent = lastSumbit.time5pm;