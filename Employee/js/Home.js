// Get the container where the cards will be added
let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
let cardContainer = document.getElementById("cardContainer");

// Clear the container
cardContainer.innerHTML = "";

// Loop through the data from local storage
getData.forEach(userProfile => {
    // Create a new column
    let col = document.createElement("div");
    col.className = "col";

    // Create a new card
    let card = document.createElement("div");
    card.className = "card h-100 text-center";

    // Create the image
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = userProfile.picture;
    img.alt = "...";
    card.appendChild(img);

    // Create the card body
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";

    // Create the card title
    let title = document.createElement("h5");
    title.className = "card-title";
    title.textContent = userProfile.employeeName;
    cardBody.appendChild(title);

    // Create the sector text
    let sector = document.createElement("p");
    sector.className = "card-text";
    sector.textContent = userProfile.employeeSector;
    cardBody.appendChild(sector);

    // Create the activity text
    let activity = document.createElement("p");
    activity.className = "card-text";
    activity.textContent = userProfile.employeeActivity;
    cardBody.appendChild(activity);

    // Create the phone number text
    let phone = document.createElement("p");
    phone.className = "card-text";
    phone.textContent = userProfile.employeePhone;
    cardBody.appendChild(phone);

    // Add the card body to the card
    card.appendChild(cardBody);

    // Add the card to the column
    col.appendChild(card);

    // Add the column to the container
    cardContainer.appendChild(col);
});

//filtering by sector
// Get all the buttons
let buttons = document.querySelectorAll(".nav-link");

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener("click", function() {
        // Get the sector from the button text
        let sector = this.textContent;

        // Get all the cards
        let cards = document.querySelectorAll(".card");

        // Loop through the cards
        cards.forEach(card => {
            // Get the sector of the card
            let cardSector = card.querySelector(".card-text").textContent;

            // If the card's sector matches the button's sector or the button is 'All', show the card, otherwise hide it
            if (cardSector === sector || sector === 'All') {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});



