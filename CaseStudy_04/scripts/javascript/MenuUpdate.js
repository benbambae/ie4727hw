var priceArray = [0.0, 0.0, 0.0]; 
// This array holds the prices for each coffee type. 
// priceArray[0] = Just Java price, priceArray[1] = Cafe au Lait price, priceArray[2] = Iced Cappuccino price.
// Starting with 0 for each, meaning no coffee is ordered yet.

function calculatePrice(id) {
    // This function figures out the price for a specific coffee type based on its id (1 for Just Java, 2 for Cafe au Lait, 3 for Iced Cappuccino).

    // First, we validate the quantity to make sure the user entered a valid number.
    if (!validateInput(id)) return; // If the quantity is not valid, stop here and do nothing.

    // Now, we switch between the different coffee types to calculate their price.
    switch (id) {
        case 1: // If it's Just Java (id = 1)
            priceArray[0] = 2.0 * getQuantity(id); // Multiply $2.00 by the number of cups (quantity).
            // Update the subtotal for Just Java on the webpage to show how much it costs.
            document.getElementById("regularTotal").innerHTML = priceArray[0].toFixed(2);
            break;

        case 2: // If it's Cafe au Lait (id = 2)
            // Check if the user selected the "single" size (which costs $2.00).
            if (document.getElementById("cafeLow").checked) {
                priceArray[1] = 2.0 * getQuantity(id);
            } 
            // Otherwise, if they picked "double" size, charge $3.00 instead.
            else {
                priceArray[1] = 3.0 * getQuantity(id);
            }
            // Update the subtotal for Cafe au Lait on the webpage to show the correct price.
            document.getElementById("cafeTotal").innerHTML = priceArray[1].toFixed(2);
            break;

        case 3: // If it's Iced Cappuccino (id = 3)
            // Check if they picked "single" size, which costs $4.75.
            if (document.getElementById("cappuccinoLow").checked) {
                priceArray[2] = 4.75 * getQuantity(id);
            } 
            // Otherwise, it's a "double" size, which costs $5.75.
            else {
                priceArray[2] = 5.75 * getQuantity(id);
            }
            // Update the subtotal for Iced Cappuccino on the webpage to show the correct price.
            document.getElementById("cappuccinoTotal").innerHTML = priceArray[2].toFixed(2);
            break;
    }

    // After calculating the price for the selected coffee, we update the total price for all coffees.
    Cal_total();
}

function calculateTotal() {
    // This function adds up all the individual prices (Just Java, Cafe au Lait, Iced Cappuccino) 
    // and returns the total price for everything.
    return priceArray[0] + priceArray[1] + priceArray[2];
}

function Cal_total() {
    // This function displays the total price on the webpage by calling calculateTotal() to add everything up.
    document.getElementById("totalPrice").innerHTML = calculateTotal().toFixed(2);
}

function validateInput(id) {
    // This function checks if the quantity the user entered is valid.
    // It gets the quantity from the getQuantity() function below.
    let quantity = getQuantity(id);

    // Check if the quantity is not a number, less than 0, or not an integer (whole number).
    if (isNaN(quantity) || quantity < 0 || !Number.isInteger(Number(quantity))) {
        // If the quantity is invalid, show an alert to the user.
        alert("Please enter a valid positive integer for quantity.");
        // Reset the quantity to 0 so the user can fix their mistake.
        resetQuantity(id); 
        return false; // Return false because the input is invalid.
    }
    return true; // If everything is okay, return true.
}

function getQuantity(id) {
    // This function gets the quantity input for the selected coffee type.
    // It checks which coffee type we’re dealing with based on the id.

    switch (id) {
        case 1:
            return document.getElementById("regularQuan").value; // Get quantity for Just Java
        case 2:
            return document.getElementById("cafeQuan").value; // Get quantity for Cafe au Lait
        case 3:
            return document.getElementById("cappuccinoQuan").value; // Get quantity for Iced Cappuccino
    }
}

function resetQuantity(id) {
    // If the user enters an invalid quantity, we reset it to 0 using this function.
    switch (id) {
        case 1:
            document.getElementById("regularQuan").value = 0; // Reset Just Java quantity to 0
            break;
        case 2:
            document.getElementById("cafeQuan").value = 0; // Reset Cafe au Lait quantity to 0
            break;
        case 3:
            document.getElementById("cappuccinoQuan").value = 0; // Reset Iced Cappuccino quantity to 0
            break;
    }
}

function placeOrder() {
    // This function shows the total price of all coffees in an alert message when the user places an order.
    alert("Total price: $" + calculateTotal().toFixed(2));
}

function init() {
    // This function sets up event listeners for changes to quantity or size (radio buttons) for each coffee type.
    // Event listeners tell the browser to watch for changes in the input fields and trigger the calculatePrice() function when they change.

    document.getElementById("regularQuan").addEventListener('change', function() {
        calculatePrice(1); // When the quantity of Just Java changes, calculate the new price.
    });

    document.getElementById("cafeQuan").addEventListener('change', function() {
        calculatePrice(2); // When the quantity of Cafe au Lait changes, calculate the new price.
    });
    document.getElementById("cafeLow").addEventListener('change', function() {
        calculatePrice(2); // When the "single" size of Cafe au Lait is selected, update the price.
    });
    document.getElementById("cafeHigh").addEventListener('change', function() {
        calculatePrice(2); // When the "double" size of Cafe au Lait is selected, update the price.
    });

    document.getElementById("cappuccinoQuan").addEventListener('change', function() {
        calculatePrice(3); // When the quantity of Iced Cappuccino changes, calculate the new price.
    });
    document.getElementById("cappuccinoLow").addEventListener('change', function() {
        calculatePrice(3); // When the "single" size of Iced Cappuccino is selected, update the price.
    });
    document.getElementById("cappuccinoHigh").addEventListener('change', function() {
        calculatePrice(3); // When the "double" size of Iced Cappuccino is selected, update the price.
    });

    // When the page loads, we automatically calculate the price for all coffee types.
    // This ensures that the page shows the correct price even before the user makes changes.
    for (let i = 1; i <= 3; i++) {
        calculatePrice(i); // Call calculatePrice for each coffee type (1 = Just Java, 2 = Cafe au Lait, 3 = Iced Cappuccino)
    }
}

window.onload = init; // When the page is fully loaded, run the init function to set everything up.
