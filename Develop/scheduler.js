const date = $('#currentDay');


//Gets time form momentjs
$(document).ready(function () {
    // sets date text in header
    const todaysDate = moment().format('LLLL');
    let dateHeader = (date) 
    dateHeader.text(todaysDate);
    console.log(todaysDate);
})
    

    