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
// Fermeture de la nav
function closeNav() {
  modalbg.style.display = "none";
}
const close = document.querySelectorAll("#close");
close.forEach((closed) => closed.addEventListener("click", closeNavSucces));
// Fermeture de la modal de sucess
function closeNavSucces() {
  modalSucces.style.display = "none";
  location.reload();
}
// Modal de succès
function modalValidation() {
  const modalSucces = document.querySelector("#modalSucces");
  modalSucces.style.display = "block";
  modalbg.style.display = "none";
}
// Function générique pour génèrer les erreurs
function error(message) {
  return message;
}
// Function qui valide le firstname
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
// Function qui valide le lastname
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
// Function qui valide le birtday
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
// Function qui valide les conditions d'utilisations
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
// Function qui valide les locations
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
// Function qui valide l'email
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
// Function qui valide le nombre de tournois
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
// function validate qui vérifie si tout est à true pour submit
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
// event au click de soumission pour permettre de valider si tout est à true pour afficher la modal de success
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validate() == true) {
    modalValidation();
  } else {
    return false;
  }
});
