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
const close = document.querySelectorAll("#close");
close.forEach((closed) => closed.addEventListener("click", closeNavSucces));
function closeNavSucces() {
  modalSucces.style.display = "none";
  location.reload();
}
function modalValidation() {
  const modalSucces = document.querySelector("#modalSucces");
  modalSucces.style.display = "block";
  modalbg.style.display = "none";
}

function error(message) {
  return message;
}
function validedFirstName() {
  const firstName = document.querySelector("#first");
  const errorFirst = document.querySelector("#errorFirst");
  if (firstName.value === "") {
    errorFirst.innerText = error("Champs Obligatoire");
    return false;
  } else if (firstName.value.trim().length < 2) {
    errorFirst.innerText = error("Veuillez entrer 2 caractères ou plus");
    return false;
  } else {
    errorFirst.innerText = error("");
    return true;
  }
}
function validatedLast() {
  const lastName = document.querySelector("#last");
  const errorLast = document.querySelector("#errorLast");
  if (lastName.value === "") {
    errorLast.innerText = error("Champs Obligatoire");
    return false;
  } else if (lastName.value.trim().length < 2) {
    errorLast.innerText = error("Veuillez entrer 2 caractères ou plus");
    return false;
  } else {
    errorLast.innerText = error("");
    return true;
  }
}
function validatedBirthDay() {
  const birthDay = document.querySelector("#birthdate");
  const errorBirth = document.querySelector("#errorBirth");
  if (birthDay.value === "") {
    errorBirth.innerText = error("Vous devez entrer votre date de naissance.");
    return false;
  } else {
    errorBirth.innerText = error("");
    return true;
  }
}
function validatedCheckBoxCondition() {
  const checkbox1 = document.querySelector("#checkbox1");
  const errorCheckbox = document.querySelector("#errorCheckbox");
  if (checkbox1.checked === false) {
    errorCheckbox.innerText = error(
      "Vous devez vérifier que vous acceptez les termes et conditions."
    );
    return false;
  } else {
    errorCheckbox.innerText = error("");
    return true;
  }
}
function valitedLocations() {
  const locations = document.querySelectorAll("#locations .checkbox-input");
  const errorLocation = document.querySelector("#errorLocation");
  for (let i = 0; i < locations.length; i++) {
    if (locations[i].checked) {
      errorLocation.innerText = error("");
      return true;
    }
  }
  errorLocation.innerText = error("Vous devez choisir une option");
  return false;
}
function valitedEmail() {
  const email = document.querySelector("#email");
  const regexEmail = /.+\@.+\..+/;
  const errorEmail = document.querySelector("#errorEmail");
  if (email.value.trim().match(regexEmail)) {
    errorEmail.innerText = error("");
    return true;
  }
  errorEmail.innerText = error("Email non valide");
  return false;
}
function valitedTournament() {
  const quantity = document.querySelector("#quantity");
  const errorQuantity = document.querySelector("#errorQuantity");
  if (
    quantity.value.trim().length === 0 ||
    quantity.value.trim() < 0 ||
    quantity.value.trim() > 99
  ) {
    errorQuantity.innerText = error("Veuillez saisir une quantité valide");
    return false;
  }
  errorQuantity.innerText = error("");
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
const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate() == true) {
    modalValidation();
  } else {
    return false;
  }
});
