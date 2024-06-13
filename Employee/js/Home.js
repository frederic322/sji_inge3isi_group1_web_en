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
    let img = userProfile.picture;
    let title = userProfile.employeeName;
    let sector = userProfile.employeeSector;
    let activity = userProfile.employeeActivity;
    let phone = userProfile.employeePhone;
    let region = userProfile.employeeRegion;
    let email = userProfile.employeeEmail;
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
            <p class="card-text" id="region">${region}</p>
            <p class="card-text" id="email" style="display:none">${email}</p>
          </div>
        </div>
      </div>`
    cardContainer.append(col);
});


function filterCards(searchTerm) {
    $("#cardContainer .col").each(function () {
        var text = $(this).children(".card").children(".card-body").children(".card-title").text().toLowerCase();
        var textAddress = $(this).children(".card").children(".card-body").children("#address").text().toLowerCase();
        if (text.includes(searchTerm) || textAddress.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }

    });
}
$('#searchInput').on('input', function(){
    let val = $(this).val().toLowerCase()
    console.log(val);
    filterCards(val)
})
//for sectors and active class per active for each thing
const style = document.createElement('style');
style.textContent =`
  .selected {
    background-color: var(--blackbooth) !important;
    color: var(--primary) !important;
    border-radius: 0px !important;
  }
`;
document.head.appendChild(style);

// Get all the buttons
let buttons = document.querySelectorAll('.nav-link');

// Set the "All" button as selected by default
buttons[0].classList.add('selected');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove the 'selected' class from all buttons
        buttons.forEach(btn => btn.classList.remove('selected'));

        // Add the 'selected' class to the clicked button
        this.classList.add('selected');

        // Filter the cards
        filterCards(this.textContent.toLowerCase());
    });
});

function filterCards(searchTerm) {
    $("#cardContainer .col").each(function () {
        var title = $(this).children(".card").children(".card-body").children(".card-title").text().toLowerCase();
        var sector = $(this).children(".card").children(".card-body").children("#sector").text().toLowerCase();
        var address = $(this).children(".card").children(".card-body").children("#address").text().toLowerCase();

        if (searchTerm === 'all' || title.includes(searchTerm) || sector.includes(searchTerm) || address.includes(searchTerm)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
}

$('.nav-link:first').addClass('selected'); // Set the "All" button as selected by default
handleSearchInput(); // Call the function to set up the event listeners

function showCardDetails(card) {
    const name = card.querySelector('#name').textContent;
    const sector = card.querySelector('#sector').textContent;
    const activity = card.querySelector('#Activity').textContent;
    const phoneNumber = card.querySelector('#Phone number').textContent;
    const region = card.querySelector('#region').textContent;
    const email = card.querySelector('#email').textContent.trim();
    const address = card.querySelector('#address').textContent.trim();

    // Build the HTML content with conditional display for hidden elements
    let detailsHtml = `
      <h2 class="swal2-title">${name}</h2>
      <p>Sector: ${sector}</p>
      <p>Activity: ${activity}</p>
      <p>Phone Number: ${phoneNumber}</p>
      <p>Region: ${region}</p>`;

    if (email) {
      detailsHtml += `<p>Email: ${email}</p>`;
    }

    if (address) {
      detailsHtml += `<p>Address: ${address}</p>`;
    }

    Swal.fire({
      html: detailsHtml,
      confirmButtonColor: '#9844eb', // Match your primary color (optional)
    });
  }

  // Attach click event listener to the entire card
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('click', () => showCardDetails(card));
  });







