// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment();
// console.log(currentDay.format('dddd ' + 'MMM Do YYYY'));
$("#currentDay").text(currentDay.format('dddd, ' + 'MMM Do YYYY'));

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

var hours = 
	["8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm",]

var scheduler = $(".container");

$.each(hours, function(i, time){
	scheduler.append('<div class="time-block"><div class="row"><div class="hour">' + hours[i] + '</div><textarea class="description" placeholder="Description"></textarea><button class="saveBtn">Button</button></div></div>');
	console.log(time);
})
