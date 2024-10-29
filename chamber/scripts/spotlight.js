const buisnessURL = "https://jigsawsam.github.io/wdd230/chamber/data/members.json";

async function getBuisness() {
    const response = await fetch(buisnessURL);
    const data = await response.json();
    displaySpot(data.companies);
}

function displaySpot(companies) {
    const buisnessList = document.getElementById('spotlight');
    buisnessList.innerHTML = '';

    // Filter companies to get only those with "Gold" or "Silver" membership levels
    const spotlightCompanies = companies.filter(company => 
        company.membershipLevel === "Gold" || company.membershipLevel === "Silver"
    );

    // Randomly select three companies from the filtered list
    const selectedCompanies = [];
    while (selectedCompanies.length < 3 && spotlightCompanies.length > 0) {
        const randomIndex = Math.floor(Math.random() * spotlightCompanies.length);
        selectedCompanies.push(spotlightCompanies.splice(randomIndex, 1)[0]);
    }

    // Create and append elements for each selected company
    selectedCompanies.forEach(company => {
        const listItem = document.createElement('li');
        listItem.classList.add('spotlight-item');

        // Company Name
        const name = document.createElement('h3');
        name.textContent = company.name;
        listItem.appendChild(name);

        // Company Image
        const image = document.createElement('img');
        image.src = company.image;
        image.alt = `${company.name} logo`;
        listItem.appendChild(image);

        // Company Address
        const address = document.createElement('p');
        address.textContent = company.address;
        listItem.appendChild(address);

        // Company Phone
        const phone = document.createElement('p');
        phone.textContent = company.phone;
        listItem.appendChild(phone);

        // Company Website Link
        const websiteLink = document.createElement('a');
        const url = new URL(company.website);
        websiteLink.href = company.website;
        websiteLink.target = "_blank";
        websiteLink.textContent = url.hostname;
        listItem.appendChild(websiteLink);

        // Append the list item to the business list
        buisnessList.appendChild(listItem);
    });
}

// Fetch and display businesses on DOMContentLoaded
document.addEventListener('DOMContentLoaded', getBuisness);
