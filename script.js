// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var currentDay = moment();
// console.log(currentDay.format('dddd ' + 'MMM Do YYYY'));
$("#currentDay").text(currentDay.format('dddd, ' + 'MMM Do YYYY'));