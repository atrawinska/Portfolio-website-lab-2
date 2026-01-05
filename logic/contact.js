// Select form and inputs
const form = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
const successMessage = document.getElementById("success-message");


const errorColor = "#dc3545"; 
const validColor = "#28a745"; 




//function to validate that a name contains only letters, 
//does not accept special letters
function validateName(name) {
  return /^[A-Za-z]+$/.test(name);
}


function validateEmail(text) {
   return /^\S+@\S+\.\S+$/.test(text.toLowerCase());
}

//listen for form submission
form.addEventListener("submit", function(event) {
  event.preventDefault();

  // First Name Validation
  if (!validateName(firstName.value)) {
    showError(firstName, "First name can only contain standard letters");
  } else {
    clearError(firstName);
  }

  // Last Name Validation
  if (!validateName(lastName.value)) {
    showError(lastName, "Last name can only contain standard letters");
  } else {
    clearError(lastName);
  }

    if (!validateEmail(email.value)) {
    showError(email, "Email is not in the proper format");
  } else {
    clearError(email);
  }

  if (!validateMessage(message.value)) {
  showError(message, "Message must be at least 20 characters");
} else {
  clearError(message);
}



  });

///MESSAGE

//shows error message under an input
function showError(input, message) {
  const errorElement = input.nextElementSibling; // the <small class="error">
  errorElement.textContent = message;
  errorElement.style.display = "block";
  input.style.borderColor = errorColor; 
}

//clears the error (input is valid)
function clearError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = "";
  errorElement.style.display = "none";
  input.style.borderColor = validColor; // green
}

function validateMessage(msg) {
  return msg.trim().length >= 20;
}

const charCount = document.getElementById("char-count");

message.addEventListener("input", function() {
  const length = message.value.length;
  charCount.textContent = `${length} / 20 characters`;
  
  
    charCount.textContent = `${length} / 20 characters`;
    charCount.style.color = length < 20 ? errorColor : validColor; // red if <20, green if >=20

});


