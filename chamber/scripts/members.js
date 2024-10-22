const membersURL = "https://jigsawsam.github.io/wdd230/chamber/data/members.json";

async function getMembers() {
    const response = await fetch(membersURL);
    const data = await response.json();
    // console.log(data); // for testing
    displayMembers(data.companies);
}

const displayMembers = (companies) => {
    const container = document.querySelector("#members-container");

    // Set default class to 'grid' on first load
    container.classList.add("grid");

    companies.forEach(company => {
        // Create a new div to hold the company info
        const companyCard = document.createElement("div");
        companyCard.classList.add("company-card");

        // Create elements for the company's details
        const name = document.createElement("h3");
        name.textContent = company.name;

        const address = document.createElement("p");
        address.textContent = `Address: ${company.address}`;

        const phone = document.createElement("p");
        phone.textContent = `Phone: ${company.phone}`;

        const website = document.createElement("a");
        const url = new URL(company.website);
        website.href = company.website;
        website.textContent = url.hostname;
        website.target = "_blank"; // Open in new tab

        const image = document.createElement("img");
        image.src = company.image;
        image.alt = `${company.name} logo`;

        const membershipLevel = document.createElement("p");
        membershipLevel.textContent = `Membership Level: ${company.membershipLevel}`;

        // Append all elements to the companyCard
        companyCard.appendChild(name);
        companyCard.appendChild(image);
        companyCard.appendChild(address);
        companyCard.appendChild(phone);
        companyCard.appendChild(website);
        companyCard.appendChild(membershipLevel);

        // Append the companyCard to the container
        container.appendChild(companyCard);
    });
}

getMembers();
