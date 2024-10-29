
document.addEventListener("DOMContentLoaded", () => {
    const bannerDisplay = document.querySelector(".banner");

    // Get current day of the week
    const today = new Date().getDay(); // 0 = Sunday - 6 = Saturday

    // Check if today is Monday (1), Tuesday (2), or Wednesday (3)
    const isMeetAndGreetDay = today >= 1 && today <= 3;

    // Display the banner if it's the correct day and the banner is not closed
    if (isMeetAndGreetDay) {
        bannerDisplay.style.display = "block"; // Show the banner

        // Add the banner content
        bannerDisplay.innerHTML = `
            <p>Come join us at the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m. at the Spokane Riverfront Park</p>
            <button class="close-banner">❌</button>
        `;

        // Close button functionality
        const closeButton = document.querySelector(".close-banner");
        closeButton.addEventListener("click", () => {
            bannerDisplay.style.display = "none"; // Hide the banner
        });
    }
});
