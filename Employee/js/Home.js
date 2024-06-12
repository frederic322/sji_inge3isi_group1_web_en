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
