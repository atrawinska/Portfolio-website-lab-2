//This file validates the contact form input and displays the text for 3 seconds

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
  let isValid = true;


  //first name validation
  if (!validateName(firstName.value)) {
    showError(firstName, "First name can only contain standard letters");

  } else {
    clearError(firstName);
  }
    isValid = isValid && validateName(firstName.value);

  //last name validation
  if (!validateName(lastName.value)) {
    showError(lastName, "Last name can only contain standard letters");
  } else {
    clearError(lastName);
  }
    isValid = isValid && validateName(lastName.value);

    if (!validateEmail(email.value)) {
    showError(email, "Email is not in the proper format");
  } else {
    clearError(email);
  }
    isValid = isValid && validateEmail(email.value);


const subjectValid = validateSelect(subject);
if (!subjectValid) showError(subject, "Choose a subject");
else clearError(subject);
isValid = isValid && subjectValid;


  if (!validateMessage(message.value)) {
  showError(message, "Message must be at least 20 characters");
} else {
  clearError(message);
}
  isValid = isValid && validateMessage(message.value);

  if (isValid) {
    successMessage.textContent = `Thank you ${firstName.value}! I will contact you soon!`;

    //message disappears after 3 seconds
    setTimeout(() => {
      successMessage.textContent = "";
    }, 3000);

    //clearr
    form.reset();
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


//CHANGE to up to 40 char, instead of minimum of 20
function validateMessage(msg) {
  return msg.trim().length <= 40;
}



function validateSelect(sbj) {
   return sbj.value !== "";
}


const charCount = document.getElementById("char-count");

message.addEventListener("input", function() {
  const length = message.value.length;
  charCount.textContent = `${length} / 40 characters`;
  
  
    charCount.textContent = `${length} / 40 characters`;
    charCount.style.color = length > 40 ? errorColor : validColor; // red if <20, green if >=20

}




);

