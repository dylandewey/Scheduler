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
}

    

    