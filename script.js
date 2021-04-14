// current day displayed in header using id=currentDay.

// each time block is color coded to show if it is past(grey), present(red),future(green).

// example: current time is red(present), if curent time is 11am everything before 11am is grey(past). else everyhing after 11am is green(future). 

// when clicking on time block enter input from user.
// save input to local storage when save button is clicked (when refreshed info is not erased).

// on click function
$(".saveButton").on("click", function (event) {
    // prevents refresh when saveButton is clicked
   event.preventDefault();

    // variable "textarea" holds the previous sibling tag object of saveButton which is textarea.
    var textarea = $(this).prev();

    // variable "id" holds (sets variable textarea to its id)
    // Method attribute when it only receives the key, it reads the id. 
    // Without setting an id, it would be impossible to know to which node the text will belong to. 
    var id = textarea.attr("id");
console.log(id);

    // We need to save the written text in a variable for storage.
    // variable "value" holds (the value of textarea)
    // when you don't pass a value to .val() it reads. 
    var value = textarea.val();
    
    // Once we have the key + the value (in variables)
    // we proceed to sets items id and value in local storage
    localStorage.setItem(id, value);
});

// I need to reed all the blocks to see if there is a string saved in local storage. 
// get items from local storage and set them to variables
var textareaVal9 = localStorage.getItem("hr-9");
var textareaVal10 = localStorage.getItem("hr-10");
var textareaVal11 = localStorage.getItem("hr-11");
var textareaVal12 = localStorage.getItem("hr-12");
var textareaVal1 = localStorage.getItem("hr-1");
var textareaVal2 = localStorage.getItem("hr-2");
var textareaVal3 = localStorage.getItem("hr-3");
var textareaVal4 = localStorage.getItem("hr-4");
var textareaVal5 = localStorage.getItem("hr-5");
console.log(textareaVal9);

// selecting the jquery node object and assigning it to a variable
// specifically assigning id's to to variables
var textarea9 = document.getElementById("hr-9");
var textarea10 = $("#hr-10");
var textarea11 = $("#hr-11");
var textarea12 = $("#hr-12");
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");
console.log(textarea9);

// the values from local storage are displayed in the textarea by using id variables
textarea9.value=textareaVal9;
textarea10.val(textareaVal10);
textarea11.val(textareaVal11);
textarea12.val(textareaVal12);
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);
console.log(textarea9);

// variable "date" holds current date.
var date = moment().format("dddd, MMMM Do, YYYY");

// display date in currentDay id 
$("#currentDay").text(date);

// time function
function colorBlockZones() {

    // I want to obtain the current hour so: I called moment and then extracted the hours and stored them in a variable called "currentHour" which now holds the current hour.
    var currentHour = moment().hours();

    // function for each class block to ditermine if it's past, present, or future
    $(".block").each(function () {

        // variable "hour" holds id hour from class block and pareInt is used to chang it from a string to an integer.
        var hour = parseInt($(this).attr("id"));

        // if statement to ditermin if in the past hour's
        if (hour < currentHour) {
            // adds grey to blocks
            $(this).addClass("past");
        }

        //else if statement to ditermin if in the present hour
        else if (hour === currentHour) {
            // removes grey to blocks
            $(this).removeClass("past");
            // adds red to blocks
            $(this).addClass("present");
        }

        // else statement to ditermin if in the future's
        else {
            // removes grey to blocks
            $(this).removeClass("past");
            // removes red to blocks
            $(this).removeClass("present");
            // adds green to blocks
            $(this).addClass("future");
        }

    });

};

// call the funtion colorBlockZones()
colorBlockZones();



