const baseURL = "https://jigsawsam.github.io/wdd230/";
const linksURL = "https://jigsawsam.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

function displayLinks(weeks) {
    const weeksList = document.getElementById('weeks-list');

    // Loop through each week
    weeks.forEach(weekObj => {
        // Create list item for each week
        const listItem = document.createElement('li');
        
        // Start with the week label
        let weekContent = `${weekObj.week}: `;

        // Loop through each link in the week and append it to weekContent
        weekObj.links.forEach((link, index) => {
            const separator = (index < weekObj.links.length - 1) ? " | " : "";
            weekContent += `<a href="${baseURL + link.url}">${link.title}</a>${separator}`;
        });

        // Insert content into the list item
        listItem.innerHTML = weekContent;

        // Append the list item to the ul
        weeksList.appendChild(listItem);
    });
}

getLinks();