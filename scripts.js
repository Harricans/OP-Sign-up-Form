function validateForm() {
  // Get the input field elements
  var firstNameInput = document.getElementById("fname");
  var lastNameInput = document.getElementById("lname");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirm-password");

  // Get the input field values
  var firstName = firstNameInput.value;
  var lastName = lastNameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;
  var confirmPassword = confirmPasswordInput.value;

  // Perform the validation checks
  var isValid = true;

  if (firstName === "") {
    firstNameInput.classList.add("error");
    isValid = false;
  } else {
    firstNameInput.classList.remove("error");
  }

  if (lastName === "") {
    lastNameInput.classList.add("error");
    isValid = false;
  } else {
    lastNameInput.classList.remove("error");
  }

  if (email === "") {
    emailInput.classList.add("error");
    isValid = false;
  } else {
    emailInput.classList.remove("error");
  }

  if (password === "") {
    passwordInput.classList.add("error");
    isValid = false;
  } else {
    passwordInput.classList.remove("error");
  }

  if (confirmPassword === "") {
    confirmPasswordInput.classList.add("error");
    isValid = false;
  } else {
    confirmPasswordInput.classList.remove("error");
  }

  if (password !== confirmPassword) {
    passwordInput.classList.add("error");
    confirmPasswordInput.classList.add("error");
    isValid = false;
  } else {
    passwordInput.classList.remove("error");
    confirmPasswordInput.classList.remove("error");
  }

  if (!isValid) {
    alert("Please fill in all required fields.");
    return false; // Prevent form submission
  }

  // If all checks pass, allow form submission
  return true;
}
