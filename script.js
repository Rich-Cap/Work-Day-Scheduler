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
	["8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",]

var scheduler = $(".container");

$.each(hours, function(i, time){
	scheduler.append('<div class="time-block"><div class="row"><div class="hour">' + hours[i] + '</div><textarea class="description" placeholder="Description"></textarea><button class="saveBtn"><i class="fas fa-save"></i></button></div></div>');
	console.log(time);
});

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

// WHEN I click into a timeblock
// THEN I can enter an event

var description = $


// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage


