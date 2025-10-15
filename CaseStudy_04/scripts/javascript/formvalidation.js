// This function validates the user's name input
function validateName() {
    // Get the value from the "name" input field and remove any extra spaces around it
    var name = document.getElementById("name").value.trim();

    // Check if the name field isn't empty
    if (name.length > 0) {
        // This regular expression makes sure the name only contains letters and spaces
        var regexp = /^([A-Za-z\s]+)$/; 
        if (regexp.test(name)) {
            // If the name is too short (<2 characters) or too long (>50 characters), we alert the user
            if (name.length < 2 || name.length > 50) {
                alert("Name must be between 2 and 50 characters.");
                return false; // If the length isn't right, we stop here
            }
            // If all checks pass, the name is valid
            return true;
        } else {
            // If the name contains non-alphabetical characters, show an error message
            alert("Name has incorrect format, please enter alphabetical symbols only.");
            return false;
        }
    }
    // If the name field is empty, alert the user to fill it in
    alert("Please fill in your name.");
    return false;
}

// This function validates the email input
function validateEmail(){
    // Get the value from the "email" input field and remove any extra spaces
    var email = document.getElementById("email").value.trim(); // Should trim() before testing!

    // Make sure the email field isn't empty
    if(email.length > 0) {
        // This regular expression checks if the email follows a standard email format
        var regexp = /^([\w\.-])+@([\w]+\.){1,3}([A-z]){2,3}$/;
        if(regexp.test(email)) {
            // If the email format is correct, return true
            return true;
        } else {
            // If the email format is wrong, show an error message
            alert("Email entered in wrong format.You need an @ and a . You can refer to the placeholder");
            return false;
        }
    }
    // If the email field is empty, alert the user to fill it in
    alert("Please fill in your email.");
    return false;
}

// This function checks if the selected date is in the future
function validateDate() {
    // Get the date value from the input and convert it to a Date object
    var date = new Date(document.getElementById("date").value);
    var currentDate = new Date(); // Get today's date for comparison

    // Check if the selected year is in the future
    if(date.getFullYear() > currentDate.getFullYear()) {
        return true;
    }
    // If the year is the same, check if the selected month is in the future
    else if(date.getFullYear() == currentDate.getFullYear()) {
        if(date.getMonth() > currentDate.getMonth()) {
            return true;
        }
        // If the month is also the same, check if the day is in the future
        else if(date.getMonth() == currentDate.getMonth()) {
            if(date.getDate() > currentDate.getDate()) {
                return true;
            }
        }
    }
    // If none of the conditions are met, the date is in the past or today
    alert("Date must be in the future.");
    return false;
}
