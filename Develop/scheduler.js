//Variables
let date = $('#currentDay');
let timeBlock = $('.time-block');
let todoItems = [];
let scheduleBlock = $('.schedule');
//Gets time/date from momentjs
let currentHour = moment().format('H');
let todaysDate = moment().format('LLLL');

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
    
        console.log(todo);
    });
    localStorage.setItem('todos', JSON.stringify(todoItems));
}
//format time blocks for past, present, future
function timeBlockSetup() {
    timeBlock.each(function() {
        let thisBlock = $(this);
        let thisBlockHr = parseInt(thisBlock.attr('data-hour'));

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
    let updateHour = $(this).parent().attr('data-hour');
    let addItem = (($(this).parent()).children('textarea')).val();
    console.log(addItem);
    for (var j = 0; j < todoItems.length; j++) {
        if (todoItems[j].hour == updateHour) {
            todoItems[j].text = addItem;
        }
    }
    localStorage.setItem('todos', JSON.stringify(todoItems));
    renderSchedule();
    schedule();
}


$(document).ready(function() {
    
    timeBlockSetup();
    if (!localStorage.getItem('todos')) {
        schedule();
    }
     
    date.text(todaysDate);
    console.log(todaysDate);
    console.log(currentHour);
    renderSchedule();
    
    
    scheduleBlock.on('click', 'button', saveHandler);
});



    

    