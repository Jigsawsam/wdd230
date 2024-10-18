const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        displayProphets(data.prophets);
    } catch (error) {
        console.error('Error fetching or parsing data:', error);
        cards.innerHTML = '<p>Failed to load data. Please try again later.</p>';
    }
}

const displayProphets = (prophets) => {

    prophets.forEach((prophet) => {
        // elements to add to the div.cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');

        // h2 content to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // image portrait with all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();

