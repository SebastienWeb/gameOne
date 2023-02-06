function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCloseBtn = document.querySelector(".close");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

modalCloseBtn.addEventListener("click", closeNav);
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

function closeNav() {
  modalbg.style.display = "none";
}

const modalSucces = document.getElementById("modalSucces");
const close = document.getElementById("close");
close.addEventListener("click", closeNavSucces);
function closeNavSucces() {
  modalSucces.style.display = "none";
}
function modalValidation() {
  const modalSucces = document.getElementById("modalSucces");
  modalSucces.style.display = "block";
}

function error(message) {
  return message;
}
function validedFirstName() {
  const firstName = document.getElementById("first");
  const errorFirst = document.getElementById("errorFirst");
  if (firstName.value === "") {
    errorFirst.innerText = error("Champs Obligatoire");
    return false;
  } else if (firstName.value.trim().length < 2) {
    errorFirst.innerText = error("Veuillez entrer 2 caractères ou plus");
    return false;
  } else {
    return true;
  }
}
function validatedLast() {
  const lastName = document.getElementById("last");
  const errorLast = document.getElementById("errorLast");
  if (lastName.value === "") {
    errorLast.innerText = error("Champs Obligatoire");
    return false;
  } else if (lastName.value.trim().length < 2) {
    errorLast.innerText = error("Veuillez entrer 2 caractères ou plus");
    return false;
  } else {
    return true;
  }
}
function validatedBirthDay() {
  const birthDay = document.getElementById("birthdate");
  const errorBirth = document.getElementById("errorBirth");
  if (birthDay.value === "") {
    errorBirth.innerText = error("Vous devez entrer votre date de naissance.");
    return false;
  } else {
    return true;
  }
}
function validatedCheckBoxCondition() {
  const checkbox1 = document.getElementById("checkbox1");
  const errorCheckbox = document.getElementById("errorCheckbox");
  if (checkbox1.checked === false) {
    errorCheckbox.innerText = error(
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    return false;
  } else {
    return true;
  }
}
function valitedLocations() {
  const locations = document.querySelectorAll("#locations .checkbox-input");
  const errorLocation = document.getElementById("errorLocation");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      return true;
    }
  }
  errorLocation.innerText = error("Vous devez choisir une option");
  return false;
}
function valitedEmail() {
  const email = document.getElementById("email");
  const regexEmail = /.+\@.+\..+/;
  const errorEmail = document.getElementById("errorEmail");
  if (email.value.trim().match(regexEmail)) {
    return true;
  }
  errorEmail.innerText = error("Email non valide");
  return false;
}
function valitedTournament() {
  const quantity = document.getElementById("quantity");
  const errorQuantity = document.getElementById("errorQuantity");
  if (
    quantity.value.trim().length === 0 ||
    quantity.value.trim() < 0 ||
    quantity.value.trim() > 99
  ) {
    errorQuantity.innerText = error("Veuillez saisir une quantité valide");
    return false;
  }
  return true;
}

// function validate
function validate() {
  return (
    validedFirstName() &&
    validatedLast() &&
    valitedEmail() &&
    validatedBirthDay() &&
    valitedTournament() &&
    valitedLocations() &&
    validatedCheckBoxCondition()
  );
}
