//Variables
const date = $('#currentDay');
const timeBlock = $('time-block');
let todoItems = [];
let scheduleBlock = $('.schedule');
let currentHour = moment().format('H');

//Setup and array of objects for user input in each time slot
function schedule() {
    timeBlock.each(function() {
        let thisBlock = $(this);
        let thisBlockHr = parseInt(thisBlock.attr('data-hour'));
        let todo = {
            hour: thisBlockHr,
            text: '',
        }
        todoItems.push(todo);
        console.log(todoItems);
    });
    localStorage.setItem('todos', JSON.stringify(todoItems));
}
//format time blocks for past, present, future
function timeBlockSetup() {
    timeBlock.each(function() {
        let thisBlock = $(this);
        let thisBlockHr = parseInt (thisBlock.attr('data-hour'));

        if (thisBlockHr == currentHour) {
            thisBlock.addClass('present').removeClass('past future');
        }
        if (thisBlockHr < currentHour) {
            thisBlock.addClass('past').removeClass('present future');
        }
        if (thisBlockHr > currentHour) {
            thisBlock.addClass('future').removeClass('past present');
        }
        console.log(currentHour);
    });
}

function renderSchedule () {
    todoItems = localStorage.getItem('todos');
    todoItems = JSON.parse(todoItems);

    for (var i = 0; i < todoItems.length; i++) {
        let itemHour = todoItems[i].hour;
        let itemText = todoItems[i].text;

        $('[data-hour=' + itemHour + ']').children('textarea').val(itemText);
    }
console.log(todoItems);   
}

function saveHandler () {
    let thisBlock = $(this).parent();
    let updateHour = $(this).parent().attr('data-hour');
    let addItem = (($(this).parent()).children('textarea')).val();

    for (var j = 0; j < todoItems.length; j++) {
        if (todoItems[j].hour == updateHour) {
            todoItems[j].text = addItem;
        }
    }
    localStorage.setItem('todos', JSON.stringify(todoItems));
    renderSchedule();
}

//Gets time from momentjs
$(document).ready(function() {
    // sets date text in header
    timeBlockSetup();
    const todaysDate = moment().format('LLLL'); 
    const hour = moment().format('H');
    date.text(todaysDate);
    console.log(todaysDate);
    
    scheduleBlock.on('click', 'button', saveHandler);
})


    

    