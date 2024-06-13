// Get the container where the cards will be added
let getData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : [];
// let cardContainer = document.getElementById("cardContainer");
let cardContainer = $("#cardContainer");

// Clear the container
cardContainer.empty();

// Loop through the data from local storage
getData.forEach(userProfile => {
    let address = userProfile.employeeDepartment + userProfile.employeeDistrict
 +  userProfile.employeeNeighborhood + userProfile.employeeRegion + userProfile.employeepLocation;
 

    // Create a new column
    // let col = document.createElement("div");
    // col.className = "col";

    // Create a new card
    // let card = document.createElement("div");
    // card.className = "card h-100 text-center";

    // Create the image
    // let img = document.createElement("img");
    // img.className = "card-img-top";
    // img.src = userProfile.picture;
    // img.alt = "...";
    // card.appendChild(img);
    let img = userProfile.picture;

    // Create the card body
    // let cardBody = document.createElement("div");
    // cardBody.className = "card-body";

    // Create the card title
    // let title = document.createElement("h5");
    // title.className = "card-title";
    // title.textContent = userProfile.employeeName;
    // cardBody.appendChild(title);'
    let title = userProfile.employeeName;

    // Create the sector text
    // let sector = document.createElement("p");
    // sector.className = "card-text";
    // sector.textContent = userProfile.employeeSector;
    // cardBody.appendChild(sector);
    let sector = userProfile.employeeSector;

    // Create the activity text
    // let activity = document.createElement("p");
    // activity.className = "card-text";
    // activity.textContent = userProfile.employeeActivity;
    // cardBody.appendChild(activity);
    let activity = userProfile.employeeActivity;

    // Create the phone number text
    // let phone = document.createElement("p");
    // phone.className = "card-text";
    // phone.textContent = userProfile.employeePhone;
    // cardBody.appendChild(phone);
    let phone = userProfile.employeePhone;

    // Add the card body to the card
    // card.appendChild(cardBody);

    // Add the card to the column
    // col.appendChild(card);

    // Add the column to the container

    let col = `
      <div class="col">

        <div class="card h-100 text-center">
          <img src="${img}" class="card-img-top" alt="..." id="img">
          <div class="card-body">
            <h5 class="card-title" id="name">${title}</h5>
            <p class="card-text" id="sector">${sector}</p>
            <p class="card-text" id="Activity">${activity}</p>
            <p class="card-text" id="Phone number">${phone}</p>
            <p class="card-text" id="address" style="display:none">${address}</p>
          </div>
        </div>
      </div>`
    cardContainer.append(col);
});

function filterCards(searchTerm) {
    $("#cardContainer .col").each(function () {
        var text = $(this).children(".card").children(".card-body").children(".card-title").text().toLowerCase();
        var textAddress = $(this).children(".card").children(".card-body").children("#address").text().toLowerCase();
        if (text.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
        if (textAddress.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}
$('#searchInput').on('input', function(){
    let val = $(this).val().toLowerCase()
    filterCards(val)
})

//search from home
// Get the input element
// let input = document.getElementById("sort");

// // Add an event listener for the input event
// input.addEventListener("input", function () {
//     // Get the current value of the input
//     let query = this.value.toLowerCase();

//     // Get all the cards
//     let cards = document.querySelectorAll(".card");

//     // Loop through the cards
//     cards.forEach(function (card) {
//         // Get the name from the card
//         let name = card.querySelector(".card-title").textContent.toLowerCase();

//         // If the name includes the query, show the card, otherwise hide it
//         if (name.includes(query)) {
//             card.style.display = "block";
//         } else {
//             card.style.display = "none";
//         }
//     });
// });
// document.addEventListener('DOMContentLoaded', function () {
//     const searchInput = document.getElementById('searchInput');
//     const cardContainer = document.getElementById('cardContainer');
//     const cards = cardContainer.getElementsByClassName('col');

//     // Add an event listener for the 'input' event on the search input field
//     searchInput.addEventListener('input', function () {
//         const filter = searchInput.value.toLowerCase();

//         Array.from(cards).forEach(function (card) {
//             console.log(card);
//             const cardName = card.querySelector('#name').textContent.toLowerCase();
//             const cardAddress = card.querySelector('#address').textContent.toLowerCase();
//             console.log(cardName);
//             console.log(cardAddress);

//             // Check if the card name or address includes the search input value
//             if (cardName.includes(filter) || cardAddress.includes(filter)) {
//                 card.style.display = '';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     });
// });