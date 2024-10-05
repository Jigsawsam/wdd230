const visitsDisplay = document.querySelector(".visits");

// Retrieve the number of visits from localStorage or set to 0 if not available
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// Retrieve the last visit date from localStorage
let lastVisit = window.localStorage.getItem("lastVisit-ls");

// Get the current date
let currentDate = new Date();

if (numVisits !== 0) {
    // If the user has visited before
    if (lastVisit) {
        // Convert the lastVisit string back to a Date object
        lastVisit = new Date(lastVisit);

        // Calculate the time difference in milliseconds
        let timeDifference = currentDate - lastVisit;

        // Convert the time difference to days
        let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        if (daysDifference === 0) {
            // If the last visit was within the last 24 hours
            visitsDisplay.textContent = "Back so soon! Awesome!";
        } else if (daysDifference === 1) {
            // If the last visit was exactly 1 day ago
            visitsDisplay.textContent = "You last visited 1 day ago.";
        } else {
            // If the last visit was more than 1 day ago
            visitsDisplay.textContent = `You last visited ${daysDifference} days ago.`;
        }
    }
} else {
    // If this is the user's first visit
    visitsDisplay.textContent = `Welcome! Let us know if you have any questions.`;
}

// Increment the visit count
numVisits++;

// Store the updated number of visits and the current date as the last visit date in localStorage
localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("lastVisit-ls", currentDate);
