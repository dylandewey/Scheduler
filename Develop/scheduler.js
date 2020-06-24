//Variables
const date = $('#currentDay');
const timeBlock = $('time-block');
let todoItems = [];

//Gets time from momentjs
$(document).ready(function() {
    // sets date text in header
    const todaysDate = moment().format('LLLL');
    let currentDate = (date) 
    currentDate.text(todaysDate);
    console.log(todaysDate);
})

//Setup and array of objects for user input in each time slot
function schedule() {
    $timeBlock.each(function() {
        let thisBlock = $(this);
        let thisBlockHr = parseInt (thisBlock.attr('data-hour'));
        let todo = {
            hour: thisBlockHr,
            text: '',
        }
        todoItems.push(todo);
        console.log(todoItems);
    });
    localStorage.setItem('todos', JSON.stringify(todoItems));
}

    

    