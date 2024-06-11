document.getElementById('sign_up').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Get the values from the input fields
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('psw').value;

  // Check if passwords match
  if (password !== confirmPassword) {
    swal("Error", "Passwords do not match!", "error");
    return;
  }

  // Check if user already exists
  var existingUser = JSON.parse(localStorage.getItem('user'));
  if (existingUser && (existingUser.username === username || existingUser.email === email)) {
    swal("Error", "A user with this username or email already exists!", "error");
    return;
  }

  // Create a user object
  var user = {
    username: username,
    email: email,
    password: password // In a real application, never store plain text passwords!
  };

  // Store the user object in local storage
  localStorage.setItem('user', JSON.stringify(user));

  swal("Success", "User signed up successfully!", "success");
});
