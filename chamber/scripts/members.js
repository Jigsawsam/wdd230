const baseURL = "https://jigsawsam.github.io/wdd230/";
const membersURL = "https://jigsawsam.github.io/wdd230/chamber/data/members.json";

async function getLinks() {
    const response = await fetch(membersURL);
    const data = await response.json();
    console.log(data);
    //displayLinks(data);
}

getMembers(); 