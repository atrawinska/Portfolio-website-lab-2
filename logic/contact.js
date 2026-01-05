// Select form and inputs
const form = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const successMessage = document.getElementById("success-message");

//function to validate that a name contains only letters, 
//does not accept special letters
function validateName(name) {
  return /^[A-Za-z]+$/.test(name);
}

//listen for form submission
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop page reload

  console.log("Form submitted"); // Optional, to see submit is firing

  //validate first and last names
  if (!validateName(firstName.value)) {
    console.log("First name is invalid");
  } else {
    console.log("First name is valid");
  }

  if (!validateName(lastName.value)) {
    console.log("Last name is invalid");
  } else {
    console.log("Last name is valid");
  }
});

