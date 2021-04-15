// Actual Status of Code Offered: current day displayed in header using id=currentDay.

// Main complication: Each time block should be color coded to show if it is past(grey), present(red),future(green).

// Functionality: When clicking on time block enter input from user (send to LocalStorage). Save input to local storage when save button is clicked (when refreshed info is not erased --> preventDefault).

// On click function (Equiavalent to eventlistner in vanila js)
$(".saveButton").on("click", function (event) {
    // Prevents refresh when saveButton is clicked
   event.preventDefault();

    // Variable "textarea" holds the previous sibling tag object of saveButton which is textarea.
    var textarea = $(this).prev();

    // Variable "id" sets variable textarea to its id
    // Method attribute when it only receives the key, it reads the id. 
    // Without setting an id, it would be impossible to know to which node the text will belong to. 
    var id = textarea.attr("id");
console.log(id);

    // We need to save the written text in a variable for storage.
    // Variable "value" holds (the value of textarea)
    // When you don't pass a value to .val() it reads. 
    var value = textarea.val();
    
    // Once we have the key + the value (in variables)
    // We proceed to set item's id and value in local storage
    localStorage.setItem(id, value);
});

// I need to reed all the blocks to see if there is a string saved in local storage. 
// Using method getitems from local storage and put them inside variables
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

// I'm selecting the jquery node object and assigning it to a variable
// Specifically assigning id's to to variables
// For learning purposes I'm doing half (morning hours) in vanilla js and half in jquery (afternoon hours). Functionality will remain the same.
var textarea9 = document.getElementById("hr-9");
var textarea10 = document.getElementById("hr-10");
var textarea11 = document.getElementById("hr-11");
var textarea12 = document.getElementById("hr-12");;
var textarea1 = $("#hr-1");
var textarea2 = $("#hr-2");
var textarea3 = $("#hr-3");
var textarea4 = $("#hr-4");
var textarea5 = $("#hr-5");
console.log(textarea9);

// The values from local storage are displayed in the textarea by using id variables
// For learning purposes I'm doing half (morning hours) in vanilla js and half in jquery (afternoon hours). Functionality will remain the same.
textarea9.value=textareaVal9;
textarea10.value=textareaVal10;
textarea11.value=textareaVal11;
textarea12.value=textareaVal12;
textarea1.val(textareaVal1);
textarea2.val(textareaVal2);
textarea3.val(textareaVal3);
textarea4.val(textareaVal4);
textarea5.val(textareaVal5);
console.log(textarea9);

// Creating variable "date" which holds current date.
var date = moment().format("dddd, MMMM Do, YYYY");

// Displaying the date in currentDay id by changin the text
$("#currentDay").text(date);

// Defining time and colorBlockZones function
function colorBlockZones() {

    // I want to obtain the current hour so: I called moment (https://stackoverflow.com/questions/38981976/moment-get-current-date) and then extracted the hours and stored them in a variable called "currentHour" which now holds the current hour.
    var currentHour = moment().hours();

    // Function for each class block to determine if it's past, present, or future
    $(".block").each(function() {

        // Variable "blockHour" holds id hour from class block and parseInt is used to change it from a string to an integer.
        var blockHour = parseInt($(this).attr("id"));

        // We need to compare the variable blockHour (integer inside) with currentHour.
        // Adding if statement to determine if in the past hour's
        if (blockHour < currentHour) {
            // Adds color grey to blocks from "past"
            $(this).addClass("past");
        }

        // The else if statement is to determine if it's the current hour
        else if (blockHour === currentHour) {
            // Removes color grey from blocks
            $(this).removeClass("past");
            // Adds color red to blocks
            $(this).addClass("present");
        }

        // Last else statement to determine if it's in the future (rest of options --> else)
        else {
            // Removes grey from blocks
            $(this).removeClass("past");
            // Removes red from blocks
            $(this).removeClass("present");
            // Adds green to the blocks
            $(this).addClass("future");
        }

    });

};

// Calling the funtion colorBlockZones() to be executed in order to have the color that corresponds to the time.
colorBlockZones();



