// Get the current date and time
const now = new Date();

// Format to (date and time)
const timestamp = now.toLocaleDateString() + ' ' + now.toLocaleTimeString();

// Set the value of the hidden input field
document.getElementById("timestamp").value = timestamp;
